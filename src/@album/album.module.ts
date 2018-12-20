import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ALBUM_CONFIG } from './services/config.service';


@NgModule()
export class AlbumModule
{
    constructor(@Optional() @SkipSelf() parentModule: AlbumModule)
    {
        if ( parentModule )
        {
            throw new Error('AlbumModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : AlbumModule,
            providers: [
                {
                    provide : ALBUM_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
