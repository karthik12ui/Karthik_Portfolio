import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { AlbumPerfectScrollbarDirective } from '../../../../../../@album/directives/album-perfect-scrollbar/album-perfect-scrollbar.directive';
import { AlbumSidebarService } from '../../../../../../@album/components/sidebar/sidebar.service';
import { AlbumNavigationService } from '../../../../../../@album/components/navigation/navigation.service';

@Component({
    selector     : 'navbar-vertical-style-2',
    templateUrl  : './style-2.component.html',
    styleUrls    : ['./style-2.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalStyle2Component implements OnInit, OnDestroy
{
    albumPerfectScrollbarUpdateTimeout: any;
    navigation: any;

    // Private
    private _albumPerfectScrollbar: AlbumPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AlbumNavigationService} _albumNavigationService
     * @param {AlbumSidebarService} _albumSidebarService
     * @param {Router} _router
     */
    constructor(
        private _albumNavigationService: AlbumNavigationService,
        private _albumSidebarService: AlbumSidebarService,
        private _router: Router
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Directive
    @ViewChild(AlbumPerfectScrollbarDirective)
    set directive(theDirective: AlbumPerfectScrollbarDirective)
    {
        if ( !theDirective )
        {
            return;
        }

        this._albumPerfectScrollbar = theDirective;

        // Update the scrollbar on collapsable item toggle
        this._albumNavigationService.onItemCollapseToggled
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.albumPerfectScrollbarUpdateTimeout = setTimeout(() => {
                    this._albumPerfectScrollbar.update();
                }, 310);
            });

        // Scroll to the active item position
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                    setTimeout(() => {
                        const activeNavItem: any = document.querySelector('navbar .nav-link.active');

                        if ( activeNavItem )
                        {
                            const activeItemOffsetTop       = activeNavItem.offsetTop,
                                  activeItemOffsetParentTop = activeNavItem.offsetParent.offsetTop,
                                  scrollDistance            = activeItemOffsetTop - activeItemOffsetParentTop - (48 * 3);

                            this._albumPerfectScrollbar.scrollToTop(scrollDistance);
                        }
                    });
                }
            );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                    if ( this._albumSidebarService.getSidebar('navbar') )
                    {
                        this._albumSidebarService.getSidebar('navbar').close();
                    }
                }
            );

        // Get current navigation
        this._albumNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._albumNavigationService.getCurrentNavigation();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        if ( this.albumPerfectScrollbarUpdateTimeout )
        {
            clearTimeout(this.albumPerfectScrollbarUpdateTimeout);
        }

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpened(): void
    {
        this._albumSidebarService.getSidebar('navbar').toggleOpen();
    }

    /**
     * Toggle sidebar folded status
     */
    toggleSidebarFolded(): void
    {
        this._albumSidebarService.getSidebar('navbar').toggleFold();
    }
}
