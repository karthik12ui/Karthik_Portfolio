export class ProfessionalDashboardDb
{
    public static widgets = {
        widget1: {
            chartType: 'line',
            datasets : {
                '2012': [
                    {
                        label: 'Hours',
                        data : [80, 80, 80, 160, 166, 170, 160, 140, 160, 160, 170, 80 ],
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
                        data : [168, 160, 168, 112, 176, 160, 176, 176, 80, 0, 0, 0],
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
                    value : 60,
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
                projectsWorked: 1,
                projectsWorkedSubTitle: 'Projects Worked @ Telecommunications company',
                projectDuration: 13,
                technologiesUsed: 8,
                   content   :  {
                    'content': '<h1>As a Angular Developer</h1>' +
                    '<ul>' +
                    '<li>' +
                    'Designed and Developed a Dynamic application that can adopt processing and activating multiple brand devices. Once Activation is successful application provides the details and summary along with the other supporting functionality' +
                    '</li>' +
                    '<br>' +
                    '<li>' +
                    'Application has Dynamic content that chnages based on users directed to application that include page content, subscription plan, form fields and its validation' +
                    '</li>' +
                    '<br>' +
                    '<li>' +
                    'Created the application with Angular 6+ and has resuable components and services which can handle dynamic alerts error messages modals and more.' +
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
                    'Responsible for Developing Application using HTML5, CSS3, Flex, Bootstrap, Angular 2+ for Agents and Clients Enterprise Application called Small Commercial Insurance Portal (Marketplace) and Client Center Portal.' +
                    '</li>' +
                    '<br>' +
                    '<li>' +
                    'Created Single Page Application (SPA) using Angular with Redux architecture. UI-Route, Dependency Injection design pattern on Components and Services for shared data between Components.' +
                    '</li>' +
                    '<br>' +
                    '<li>' +
                    'Implemented Typescript Reusable multi slot content projection, parent and child components and services to consume REST APIs using Component based architecture with Angular Cli.' +
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
                 'Designed prototypes and rich Responsive User Interface applications using HTML5, CSS3, JavaScript, jQuery, AJAX, JSON, AngularJS, High Charts and Bootstrap.' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Implemented MVC architectures by creating modules, controllers, templates, custom directives, pipes and custom filters with Angular JS 1.2' +
                 '</li>' +
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
             projectDuration: 4,
             technologiesUsed: 5,
                content   :  {
                 'content': '<h1>As a MEAN Stack Developer</h1>' +
                 '<ul>' +
                 '<li>' +
                 'Worked with clients and Senior User Experience Designers to understand their branding strategies and design goals to define visual design strategy, layout, and features to design their web sites/applications.' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Used client side scripting languages as JavaScript added collections of list of objects in database Mongo DB Locally with Robo Mongo and Implemented Schemas to store data and retrieve data from the Mongo DB.' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Developed a Schema to Send an E-mail Notifications to the users who has an account in the Application with Alert Message when were ever an event is added to the application or removed from the application.' +
                 '</li>'
             },
            },
            {
                id : 'ads',
                label: 'Project 5',
             projectsWorked: 1,
             projectsWorkedSubTitle: 'Projects Worked @ ADS Pipe',
             projectDuration: 14,
             technologiesUsed: 5,
                content   :  {
                 'content': '<h1>As a UX Designer / UI Developer</h1>' +
                 '<ul>' +
                 '<li>' +
                 'Designed mockups, GUI layouts by using HTML, DHTML, XHTML, XML, CSS and JavaScript in securing the application using form-based authentication' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Performed Client side validation with bootstrap feedback icons and JQuery.' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Created Email Template for Invoices which generates with batch process and implemented Nested Views with the help of AngularJS UI-view & UI-SREF, implemented custom directives for reusable components used across the application.' +
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
                 'content': '<h1>As a UX / UI Developer</h1>' +
                 '<ul>' +
                 '<li>' +
                 'Responsible for checking cross browser compatibility and hence worked on different browsers like safari, internet explorer, Firefox and Google chrome.' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Used JQuery for creating various widgets, data manipulation, data traversing, form validations, create the content on the fly depend on the user request, implementing Ajax features for the application.' +
                 '</li>' +
                 '<br>' +
                 '<li>' +
                 'Implemented various Validation Controls for form validation and implemented custom validation controls with JavaScript validation controls.' +
                 '</li>'
             },
            }
           ]
        }
    };
}
