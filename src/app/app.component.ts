import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


import { navigation } from '../app/navigation/navigation';
import { locale as navigationEnglish } from '../app/navigation/i18n/en';
import { locale as navigationTurkish } from '../app/navigation/i18n/tr';


import { AlbumNavigationService } from '../@album/components/navigation/navigation.service';
import { AlbumConfigService } from '../@album/services/config.service';
import { AlbumSidebarService } from '../@album/components/sidebar/sidebar.service';
import { AlbumSplashScreenService } from '../@album/services/splash-screen.service';
import { AlbumTranslationLoaderService } from '../@album/services/translation-loader.service';

@Component({
    selector   : 'app',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{
    albumConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {AlbumConfigService} _albumConfigService
     * @param {AlbumNavigationService} _albumNavigationService
     * @param {AlbumSidebarService} _albumSidebarService
     * @param {AlbumSplashScreenService} _albumSplashScreenService
     * @param {AlbumTranslationLoaderService} _albumTranslationLoaderService
     * @param {Platform} _platform
     * @param {TranslateService} _translateService
     */
    constructor(
        @Inject(DOCUMENT) private document: any,
        private _albumConfigService: AlbumConfigService,
        private _albumNavigationService: AlbumNavigationService,
        private _albumSidebarService: AlbumSidebarService,
        private _albumSplashScreenService: AlbumSplashScreenService,
        private _albumTranslationLoaderService: AlbumTranslationLoaderService,
        private _translateService: TranslateService,
        private _platform: Platform
    )
    {
        // Get default navigation
        this.navigation = navigation;

        // Register the navigation to the service
        this._albumNavigationService.register('main', this.navigation);

        // Set the main navigation as our current navigation
        this._albumNavigationService.setCurrentNavigation('main');

        // Add languages
        this._translateService.addLangs(['en', 'tr']);

        // Set the default language
        this._translateService.setDefaultLang('en');

        // Set the navigation translations
        this._albumTranslationLoaderService.loadTranslations(navigationEnglish, navigationTurkish);

        // Use a language
        this._translateService.use('en');

        // Add is-mobile class to the body if the platform is mobile
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this.document.body.classList.add('is-mobile');
        }

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to config changes
        this._albumConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.albumConfig = config;

                if ( this.albumConfig.layout.width === 'boxed' )
                {
                    this.document.body.classList.add('boxed');
                }
                else
                {
                    this.document.body.classList.remove('boxed');
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void
    {
        this._albumSidebarService.getSidebar(key).toggleOpen();
    }
}
