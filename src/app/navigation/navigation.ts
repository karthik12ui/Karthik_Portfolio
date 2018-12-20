import { AlbumNavigation } from '../../@album/types';

export const navigation: AlbumNavigation[] = [
    {
        id       : 'albums',
        title    : 'Albums',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'dashboards',
                title    : 'Dashboards',
                translate: 'NAV.DASHBOARDS',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id   : 'professional',
                        title: 'Professional Album',
                        type : 'item',
                        url  : '/main/dashboards/professional'
                    },
                    {
                        id   : 'projectsOverview',
                        title: 'Projects Album',
                        type : 'item',
                        url  : 'main/dashboards/projects',
                        badge: {
                            title: '6',
                            bg   : '#FF4500',
                            fg   : '#FFFFFF'
                        }
                    },
                ]
            }
        ]
    },
    {
        id      : 'profile',
        title   : 'Profile',
        icon    : 'import_contacts',
        type    : 'group',
        children: [
            {
                id   : 'personalProfile',
                title: 'Personal Profile',
                type : 'item',
                icon : 'account_circle',
                url  : '/main/profile',
            },
        ]
    }
];
