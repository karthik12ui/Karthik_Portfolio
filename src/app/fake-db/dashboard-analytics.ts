export class ProfessionalDashboardDb
{
    public static widgets = {
        widget1: {
            chartType: 'line',
            datasets : {
                '2012': [
                    {
                        label: 'Hours',
                        data : [80, 80, 80, 160, 166, 170, 160, 140, 160, 160, 170, 160 ],
                        fill : 'start'

                    }
                ],
                '2013': [
                    {
                        label: 'Hours',
                        data : [140, 120, 166, 180, 120, 102, 0, 0, 0, 0, 0, 0],
                        fill : 'start'

                    }
                ],
                '2014': [
                    {
                        label: 'Hours',
                        data : [0, 0, 166, 100, 160, 80, 132, 160, 172, 160, 15, 20],
                        fill : 'start'

                    }
                ],
                '2015': [
                    {
                        label: 'Hours',
                        data : [166, 180, 182, 142, 197, 160, 152, 160, 172, 160, 0, 85],
                        fill : 'start'

                    }
                ],
                '2016': [
                    {
                        label: 'Hours',
                        data : [166, 160, 182, 142, 197, 160, 152, 168, 172, 160, 152, 166],
                        fill : 'start'

                    }
                ],
                '2017': [
                    {
                        label: 'Hours',
                        data : [150, 160, 168, 142, 197, 210, 209, 231, 210, 227, 167, 96],
                        fill : 'start'

                    }
                ],
                '2018': [
                    {
                        label: 'Hours',
                        data : [170, 166, 195, 162, 171, 167, 168, 178, 160, 200, 158, 80],
                        fill : 'start'

                    }
                ],
                '2019': [
                    {
                        label: 'Hours',
                        data : [168, 160, 168, 112, 176, 160, 176, 176, 80, 168, 174, 168],
                        fill : 'start'

                    }
                ],
                '2020': [
                    {
                        label: 'Hours',
                        data : [168, 160, 172, 162, 160, 176, 176, 160, 168, 0, 92, 168],
                        fill : 'start'

                    }
                ],
                '2021': [
                    {
                        label: 'Hours',
                        data : [168, 160, 168, 112, 0, 0, 0, 0, 0, 0, 0, 0],
                        fill : 'start'

                    }
                ],

            },
            labels   : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            colors   : [
                {
                    borderColor              : '#66bb6a',
                    backgroundColor          : '#66bb6a',
                    pointBackgroundColor     : '#43a047',
                    pointHoverBackgroundColor: '#43a047',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                }
            ],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top  : 32,
                        left : 32,
                        right: 32
                    }
                },
                elements           : {
                    point: {
                        radius          : 4,
                        borderWidth     : 2,
                        hoverRadius     : 4,
                        hoverBorderWidth: 2
                    },
                    line : {
                        tension: 0
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            gridLines: {
                                display       : false,
                                drawBorder    : false,
                                tickMarkLength: 18
                            },
                            ticks    : {
                                fontColor: '#ffffff'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min     : 0,
                                max     : 250,
                                stepSize: 50
                            }
                        }
                    ]
                },
                plugins            : {
                    filler      : {
                        propagate: false
                    },
                    xLabelsOnTop: {
                        active: true
                    }
                }
            }
        },
        widget7: {
            scheme : {
                domain: [ '#66bb6a', '#2e7d32', '#43a047', '#a5d6a7']
            },
            devices: [
                {
                    name  : 'Mockups',
                    value : 10,
                },
                {
                    name  : 'Designing',
                    value : 20,
                },
                {
                    name  : 'Coding',
                    value : 50,
                },
                {
                    name  : 'CI/CD (Build / Deployment)',
                    value : 10,
                },
                {
                    name  : 'Unit Testing',
                    value : 10,
                },

            ]
        },
        aboutProject: {
            projectsCount  : '6',
           projectsdata: [
            {
                id : 'verizon',
                label: 'Project 1',
                projectsWorked: 4,
                projectsWorkedSubTitle: 'Projects Worked @ Telecommunications company',
                projectDuration: 30,
                technologiesUsed: 10,
                   content   :  {
                    'content': '<h1>As a UX / UI Angular Developer</h1>' +
                    '<ul>' +
                    '<li>' +
                    'Responsible for designing and developing responsive customer facing, admin managed Private Network for IoT devices and ThingSpace Services application using HTML5, SASS, Angular flux, Angular material and Angular 7 and 9' +
                    '</li>' +
                    '<br>' +
                    '<li>' +
                    'Leading team as a front-end designer / developer participated in the technical design review process to ensure high quality technical designs to identify deliver best practices and center of excellence touch point meetings with demos.' +
                    '</li>' +
                    '<br>' +
                    '<li>' +
                    'Designing both template and Reactive based Forms with cross field custom form validations. Produced visually appealing designs focused on usability, utility, UX, cross-browser compatibility and SEO /web standards.' +
                    '</li>'+
                    '<br>' +
                    '<li>' +
                    'Designed and developed by aligning with security principles and standards of Verizon. Cleared all critical and high-level security issues if any request comes as part of audit scans like fortify, black duck, pen tests.' +
                    '</li>'+
                    '<br>' +
                    '<li>' +
                    'Developed data visualization charts by creating RTC module (Real time communication) with socket i.o to broadcast real time onboarding status on dashboards.' +
                    '</li>'
                },
               },
               {
                id : 'chubb',
                   label: 'Project 2',
                projectsWorked: 3,
                projectsWorkedSubTitle: 'Projects Worked @ Commercial insurance company',
                projectDuration: 15,
                technologiesUsed: 8,
                   content   :  {
                    'content': '<h1>As a Angular Developer</h1>' +
                    '<ul>' +
                    '<li>' +
                    'Designed and Developed singe page application using HTML5, CSS3, Flex, Bootstrap, Angular 2+ with Redux architecture for Clients Enterprise Application Client Center Portal.' +
                    '</li>' +
                    '<br>' +
                    '<li>' +
                    'Created Single Page Application (SPA) using Angular with Redux architecture. UI-Route, Dependency Injection design pattern on Components and Services for shared data between Components.' +
                    '</li>' +
                    '<br>' +
                    '<li>' +
                    'Developed with ECMA Script 6 features for build of JSX and ES2015 (ES6) webpack design pattern on Components and Services for shared data between Components.' +
                    '</li>'+
                    '<br>' +
                    '<li>' +
                    'Created custom Pipes to filter data on template and using built-in Pipes along with them, also implemented filtering, sorting methods to display the ordered list based on status of order.' +
                    '</li>'
                },
               },
               {
                id : 'ode',
                label: 'Project 3',
             projectsWorked: 4,
             projectsWorkedSubTitle: 'Projects Worked @ Department of Education',
             projectDuration: 18,
             technologiesUsed: 6,
                content   :  {
                 'content': '<h1>As a UX Designer / UI Developer</h1>' +
                 '<ul>' +
                 '<li>' +
                 'Worked at Department of Education for the projects OEDS Redesign and EAS Dashboard and involved in various phases of development life cycle from requirement analysis, design, implementation and testing.' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Built rich prototypes and applications using HTML5, CSS3, SASS, JavaScript, jQuery, AJAX, JSON, AngularJS, High Charts and Bootstrap' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Worked on AngularJS framework including MVC architectures, different modules, specific controllers, templates, custom directives and custom filters and used AngularJS for dependency injections' +
                 '</li>'+
                 '<br>' +
                 '<li>' +
                 'Developed on demand, combo and compression server using AngularJS, Responsive report data chart using D3 Data Visualization charts, implemented drill down charts routing techniques using High charts and Angular JS Routing' +
                 '</li>'
             },
            },
            {
                id : 'qri',
                label: 'Project 4',
             projectsWorked: 1,
             projectsWorkedSubTitle: 'Projects Worked @ Independent Review Board',
             projectDuration: 8,
             technologiesUsed: 5,
                content   :  {
                 'content': '<h1>As a MEAN Stack Developer</h1>' +
                 '<ul>' +
                 '<li>' +
                 'Worked as a MEAN stack developer on NodeJS applications using express as middleware, JWT, MongoDB and Angular JS as client-side code, to building secure RESTful API development as light weight application.' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'As a User Experience Designer designed branding strategies and goals to define visual design strategy, layout, and features to design their web sites/applications.' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Created shared modules, templates, custom directives and custom filters and with AngularJS for dependency injection.' +
                 '</li>'+
                 '<br>' +
                 '<li>' +
                 'Developed broadcasting of Live events using Sockets.io packages for features involved in application of live streaming real time data to multiple customers logged to same event.' +
                 '</li>'
             },
            },
            {
                id : 'ads',
                label: 'Project 5',
             projectsWorked: 1,
             projectsWorkedSubTitle: 'Projects Worked @ :  Collaborate Solutions, Inc',
             projectDuration: 6,
             technologiesUsed: 5,
                content   :  {
                 'content': '<h1>As a Software Developer</h1>' +
                 '<ul>' +
                 '<li>' +
                 'Designed mockups, GUI layouts by using HTML5, CSS and JavaScript with table-less designs meeting W3C standards.' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Created forms with validation displaying inline error messages along with the handling of masking and format patterns for input fields and developing application aligning with security principles.' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Used JQuery for creating reusable widgets for calendar drag and drop file uploads, table grids, form validations integrating with RESTful services.' +
                 '</li>'
                 +
                 '<br>' +
                 '<li>' +
                 'Developed optimized schema designs to upload and retrieve documents and images in mongoDB using gridFS. Performed AES level encryption schemas to store sensitive data.' +
                 '</li>'  +
                 '<br>' +
                 '<li>' +
                 '•	Resolved cross-browser issues and web site usability issues with visually appealing designs focused on usability, utility, UX, cross-browser compatibility and SEO /web standards.' +
                 '</li>'
             },
            },
            {
                id : 'india',
                label: 'Project 6',
             projectsWorked: 2,
             projectsWorkedSubTitle: 'Projects Worked @ Smart Search Inc',
             projectDuration: 20,
             technologiesUsed: 4,
                content   :  {
                 'content': '<h1>As a :  Software Developer</h1>' +
                 '<ul>' +
                 '<li>' +
                 'As an intern worked closely with Business Analysts in understanding the technical requirements of each project and prepared the use cases for different functionalities and designs.' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Work in close collaboration with internal customers and teams to develop strategies that address product content and overall user experience design for Catalyst’s clients.' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Created JQuery scripts for basic animation and end user screen customization purposes.' +
                 '</li>'
             },
            }
           ]
        }
    };
}
