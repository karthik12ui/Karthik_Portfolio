export class ProjectsDashboardDb {
    public static projects = [
        {
            'name': 'Telecommunications company',
            'shortName': 'Telecommunications company',
            'id' : 'verizon'
        },
        {
            'name': 'Commercial Insurance Company',
            'shortName': 'Commercial Insurance',
            'id' : 'chubb'
        },
        {
            'name': 'Department of Education',
            'shortName': 'Department of Education',
            'id' : 'ode'
        },
        {
            'name': 'Independent Review Board',
            'shortName': 'Independent Review Board',
            'id': 'qri'
        },
        {
            'name': 'ADS Pipe',
            'shortName': 'ADS Pipe',
            'id': 'ads'
        },
        {
            'name': 'Smart Search Solutions',
            'shortName': 'India',
            'id': 'india'
        }
    ];

    public static projectsData = {
        projects : [
            {
                projectId : 'verizon',
                allowedToViewRef: true,
                referance: 'https://thingspace.verizon.com/index.html',
                projectAtClient : {
                          count: '1',
                          duration: '3',
                          details: [
                              {
                                  'name' : 'tss',
                                  'duration' : '13',
                              },
                          ]
                      },
                  'widget1'      : {
                          'title' : 'Hours Spent on Project',
                          'projects'      : {
                              'tss' : 'Thing Space Portal - IoT',
                              'pnw' : 'Private Network - IoT',
                              'oc2' : 'Operation Center - M2M',
                              'nen' : 'Network Event Notifications - M2M',
                          },
                          'currentRange': 'pnw',
                          'data'        : {
                              'label': 'HOURS ON PROJECT',
                              'count': {
                                  'tss' : 1128,
                                  'pnw': 2300,
                                  'nen': 1020,
                                  'oc2': 592,
                              },
                          },
                          'detail'      : 'Will be updated soon...'
                      },
                      'widget2'      : {
                          'title' : 'Tasks',
                          'data'        : {
                              'label': 'COMPLETED TASKS',
                              'count': 230,
                              'enhancements': 178,
                              'enhancementslabel': 'Completed Enhancements',
                              'defectslabel': 'Defects Resolved',
                              'defects': 52
                          }
                      },
                      'widget3'      : {
                          'title' : 'Technologies',
                          'projects'      : {
                              'tss' : 'Thing Space Portal - IoT',
                              'pnw' : 'Private Network - IoT',
                              'oc2' : 'Operation Center - M2M',
                              'nen' : 'Network Event Notifications - M2M',
                          },
                          'currentRange': 'pnw',
                          'data'        : {
                              'label': 'TECHNOLOGIES',
                              'count': {
                                  'tss' : 5,
                                  'pnw' : 10,
                                  'nen' : 11,
                                  'oc2' : 10,
                              },
                          },
                      },
                      technologies : {
                          count: '5',
                          details: [
                              {
                                  'name' : 'Angular',
                                  'usage' : '100',
                              },
                              {
                                  'name' : 'ngx - Bootstrap',
                                  'usage' : '100',
                              },
                              {
                                  'name' : 'HTML',
                                  'usage' : '100',
                              },
                              {
                                  'name' : 'Axa Matrix',
                                  'usage' : '80',
                              },
                              {
                                  'name' : 'CSS',
                                  'usage' : '100',
                              },
                          ]
                      },
                      'widget6': {
                          'title'      : 'Select to View Technologies worked on by Project @ Telecommunications company',
                          'projects'     : {
                            'pnw' : 'Private Network - IoT',
                            'tss' : 'Thing Space Portal - IoT',
                            'oc2' : 'Operation Center - M2M',
                            'nen' : 'Network Event Notifications - M2M',
                          },
                          'currentProject': 'pnw',
                          'mainChart'  : {
                              'tss': [
                                  {
                                      'name' : 'Angular with Typescript',
                                      'value': 60
                                  },
                                  {
                                      'name' : 'HTML',
                                      'value': 20
                                  },
                                  {
                                      'name' : 'CSS / SCSS',
                                      'value': 15
                                  },
                                  {
                                      'name' : 'Axa Config',
                                      'value': 2
                                  },
                                  {
                                      'name' : 'Unit Testing',
                                      'value': 3
                                  }
                              ],
                              'pnw': [
                                {
                                    'name' : 'Angular with Typescript',
                                    'value': 50
                                },
                                {
                                    'name' : 'HTML',
                                    'value': 15
                                },
                                {
                                    'name' : 'CSS / SCSS',
                                    'value': 10
                                },
                                {
                                    'name' : 'Angular Material',
                                    'value': 10
                                },
                                {
                                    'name' : 'Angular Flex',
                                    'value': 10
                                },
                                {
                                    'name' : 'Axa Config',
                                    'value': 2
                                },
                                {
                                    'name' : 'Unit Testing',
                                    'value': 3
                                }
                            ],
                            'nen': [
                                {
                                    'name' : 'Angular with Typescript',
                                    'value': 50
                                },
                                {
                                    'name' : 'HTML',
                                    'value': 20
                                },
                                {
                                    'name' : 'CSS / SCSS',
                                    'value': 10
                                },
                                {
                                    'name' : 'Angular Material',
                                    'value': 10
                                },
                                {
                                    'name' : 'Angular Flex',
                                    'value': 10
                                }
                            ],
                            'oc2': [
                                {
                                    'name' : 'Angular with Typescript',
                                    'value': 50
                                },
                                {
                                    'name' : 'HTML',
                                    'value': 15
                                },
                                {
                                    'name' : 'CSS / SCSS',
                                    'value': 10
                                },
                                {
                                    'name' : 'Angular Material',
                                    'value': 10
                                },
                                {
                                    'name' : 'Angular Flex',
                                    'value': 10
                                },
                                {
                                    'name' : 'Axa Config',
                                    'value': 5
                                }
                            ]
                          },
                      },
                      location : {
                          State: 'New Jersey',
                          City : 'Piscataway',
                          Street: '201 Centennial Ave'
                      },
                      Description: {
                          title : 'Telecommunications company',
                           // tslint:disable-next-line:max-line-length
                          subTitle: 'It, is an American telecommunications company which offers wireless products and services. It is the largest wireless telecommunications provider in the United States. It operates a national 4G LTE network covering about 98 percent of the U.S. population, which in December 2015 won or tied for top honors in each category of the RootMetrics RootScore Reports. Company offers mobile phone services through a variety of devices',
                          descriptionByProj: [
                              {
                                  title: 'Thing Space Portal - IoT',
                                  // tslint:disable-next-line:max-line-length
                                  desc: 'Intelligently automates the view by user type logging in and completing checkout process for IoT based products purchases with Credit cards. Implemented 3D Security features and encryption for sensitive data during transactions.'
                              },
                              {
                                title: 'Private Network - IoT',
                                // tslint:disable-next-line:max-line-length
                                desc: 'PN - Project is intended to reduce the implementation time of Private Network  for B2B customers by automating the PN onboarding process for the customers with real time status update notification.'
                            },
                            {
                                title: 'NEN – Network Event Notfications - M2M',
                                // tslint:disable-next-line:max-line-length
                                desc: 'Network Event Notification page allows to view planned and unplanned network maintenance events impacting Verizon services.'
                            },
                            {
                                title: 'Operation Center - M2M',
                                // tslint:disable-next-line:max-line-length
                                desc: 'Created a dashboard view of the ECPD profile over public and private network with status of Onboarding across multiple systems TCM/ TSM, VHAP along with accounts and service plans associated to profile'
                            },
                          ]
                      },
                      'permissionToViewImage': true,
                      'images' : [
                          {
                              'id'  : 1,
                              'url' : './assets/images/samples/cc1.PNG',
                              'type': 'image'
                          },
                          {
                              'id'  : 2,
                              'url' : './assets/images/samples/Catalog.PNG',
                              'type': 'image'
                          },
                          {
                              'id'  : 3,
                              'url' : './assets/images/samples/Payment.PNG',
                              'type': 'image'
                          },
                          {
                              'id'  : 4,
                              'url' : './assets/images/samples/Summary.PNG',
                              'type': 'image'
                          },
                          {
                            'id'  : 5,
                            'url' : './assets/images/samples/pn.png',
                            'type': 'image'
                        },
                        {
                            'id'  : 6,
                            'url' : './assets/images/samples/pn2.png',
                            'type': 'image'
                        },
                        {
                            'id'  : 7,
                            'url' : './assets/images/samples/nen1.png',
                            'type': 'image'
                        },
                        {
                            'id'  : 8,
                            'url' : './assets/images/samples/nen2.png',
                            'type': 'image'
                        },
                        {
                            'id'  : 9,
                            'url' : './assets/images/samples/nen3.png',
                            'type': 'image'
                        },
                        {
                            'id'  : 10,
                            'url' : './assets/images/samples/oc.png',
                            'type': 'image'
                        },
                        {
                            'id'  : 11,
                            'url' : './assets/images/samples/oc2.png',
                            'type': 'image'
                        },
                        {
                            'id'  : 12,
                            'url' : './assets/images/samples/pn3.png',
                            'type': 'image'
                        }
                      ],
                      teamMembers: {
                          'title': 'Team Members',
                          'table': {
                              'columns': ['avatar', 'name', 'role', 'office', 'status'],
                              'rows'   : [
                                  {
                                      avatar  : '',
                                      name    : 'Satish',
                                      role: 'Project Manager',
                                      office  : 'On Site - NJ',
                                      status   : true
                                  },
                                  {
                                      avatar  : '',
                                      name    : 'Nagarajan',
                                      role: 'Technaical Lead',
                                      office  : 'On Site - NJ',
                                      status   : true
                                  },
                                  {
                                      avatar  : '',
                                      name    : 'Sachin',
                                      role: 'Angular Developer',
                                      office  : 'Off Site - NJ',
                                      status   : true
                                  },
                                  {
                                      avatar  : '',
                                      name    : 'Revanth',
                                      role: 'Angular Developer',
                                      office  : 'Off Site - NJ',
                                      status   : true
                                  },
                                  {
                                      avatar  : '',
                                      name    : 'Rukmini',
                                      role: 'JAVA Devloper',
                                      office  : 'On Site - NJ',
                                      status   : false
                                  },
                                  {
                                      avatar  : '',
                                      name    : 'Shivani',
                                      role: 'JAVA Devloper',
                                      office  : 'Off Site - NJ',
                                      status   : false
                                  },
                                  {
                                    avatar  : '',
                                    name    : 'Himani',
                                    role: 'JAVA Devloper',
                                    office  : 'Off Site - NJ',
                                    status   : false
                                }
                              ]
                              }
                        }
                  },
            {
              projectId : 'chubb',
              allowedToViewRef: false,
              referance: 'https://sciagents.chubb.com',
              projectAtClient : {
                        count: '3',
                        duration: '15',
                        details: [
                            {
                                'name' : 'Digital',
                                'duration' : '2',
                            },
                            {
                                'name' : 'Small Commercial Marketplace',
                                'duration' : '10',
                            },
                            {
                                'name' : 'Client Center',
                                'duration' : '3',
                            }
                        ]
                    },
                'widget1'      : {
                        'title' : 'Hours Spent on Project',
                        'projects'      : {
                            'sci' : 'Small Commercial Marketplace',
                            'cc' : 'Client Center Portal',
                            'crux': 'SCI - Crux'
                        },
                        'currentRange': 'sci',
                        'data'        : {
                            'label': 'HOURS ON PROJECT',
                            'count': {
                                'sci' : 1120,
                                'cc' : 680,
                                'crux': 320
                            },
                        },
                        'detail'      : 'Will be updated soon...'
                    },
                    'widget2'      : {
                        'title' : 'Tasks',
                        'data'        : {
                            'label': 'COMPLETED TASKS',
                            'count': 900,
                            'enhancements': 700,
                            'enhancementslabel': 'Completed Enhancements',
                            'defectslabel': 'Defects Resolved',
                            'defects': 200
                        }
                    },
                    'widget3'      : {
                        'title' : 'Technologies',
                        'projects'      : {
                            'sci' : 'Small Commercial Marketplace',
                            'cc' : 'Client Center Portal',
                            'crux': 'SCI - Crux'
                        },
                        'currentRange': 'sci',
                        'data'        : {
                            'label': 'TECHNOLOGIES',
                            'count': {
                                'sci' : 7,
                                'cc' : 5,
                                'crux': 5
                            },
                        },
                    },
                    technologies : {
                        count: '8',
                        details: [
                            {
                                'name' : 'Angular',
                                'usage' : '100',
                            },
                            {
                                'name' : 'Material',
                                'usage' : '100',
                            },
                            {
                                'name' : 'HTML',
                                'usage' : '100',
                            },
                            {
                                'name' : 'SQL',
                                'usage' : '10',
                            },
                            {
                                'name' : 'CSS',
                                'usage' : '100',
                            },
                        ]
                    },
                    'widget6': {
                        'title'      : 'Select to View Technologies worked on by Project @ commercial Insurance',
                        'projects'     : {
                            'sci' : 'Small Commercial Marketplace',
                            'cc' : 'Client Center Portal',
                            'crux': 'Common UI Framework'
                        },
                        'currentProject': 'sci',
                        'mainChart'  : {
                            'sci': [
                                {
                                    'name' : 'Angular with Typescript',
                                    'value': 40
                                },
                                {
                                    'name' : 'HTML',
                                    'value': 20
                                },
                                {
                                    'name' : 'CSS / SCSS',
                                    'value': 15
                                },
                                {
                                    'name' : 'Google Analytics',
                                    'value': 4
                                },
                                {
                                    'name' : 'Survey with Opinion Labs',
                                    'value': 2
                                },
                                {
                                    'name' : 'SQL Query',
                                    'value': 5
                                },
                                {
                                    'name' : 'Unit Testing',
                                    'value': 14
                                }
                            ],
                            'cc': [
                                {
                                    'name' : 'Angular with Typescript',
                                    'value': 50
                                },
                                {
                                    'name' : 'HTML',
                                    'value': 20
                                },
                                {
                                    'name' : 'CSS / SCSS',
                                    'value': 15
                                },
                                {
                                    'name' : 'Google Analytics',
                                    'value': 4
                                },
                                {
                                    'name' : 'Unit Testing',
                                    'value': 11
                                }
                            ],
                            'crux': [
                                {
                                    'name' : 'Angular with Typescript',
                                    'value': 60
                                },
                                {
                                    'name' : 'HTML',
                                    'value': 20
                                },
                                {
                                    'name' : 'Angular Cli',
                                    'value': 10
                                },
                                {
                                    'name' : 'Node JS',
                                    'value': 10
                                }
                            ]
                        },
                    },
                    location : {
                        State: 'New Jersey',
                        City : 'Whitehouse Station',
                        Street: '202 Hall Mill Road'
                    },
                    Description: {
                        title : 'Commercial Insurance company',
                         // tslint:disable-next-line:max-line-length
                        subTitle: 'Insuarance Company provied commercial and personal property and casualty insurance, personal accident and supplemental health insurance, reinsurance and life insurance to a diverse group of clients. As an underwriting company',
                        descriptionByProj: [
                            {
                                title: 'Small Commercial Marketplace',
                                // tslint:disable-next-line:max-line-length
                                desc: 'Small Commercial Marketplace will provide a high level capabilities for agents to Quote / Issue at an account level with set of intergated line of coverages. Agents can review status of renewals and access renewal polices receive online notifications of major activity and service the account by updating billing and claim information with policy documents access, online quoting and Service solutions'
                            },
                            {
                                title: 'Client Center Portal',
                                // tslint:disable-next-line:max-line-length
                                desc: 'In Small Commerial Marketplace allows users to self-register. Once Self-registered, users have access to policy documents and account details with bill payment authority.'
                            },
                            {
                                title: 'Common UI Framework',
                                // tslint:disable-next-line:max-line-length
                                desc: 'Company Responsive User Experiance provides the infrastructure and framework to build resuable Angular 4+ Web Componets, services, widgets and Toolkit with themes'
                            }
                        ]
                    },
                    'permissionToViewImage': false,
                    'images' : [
                        {
                            'id'  : 1,
                            'url' : './assets/images/samples/12.PNG',
                            'type': 'image'
                        },
                        {
                            'id'  : 2,
                            'url' : './assets/images/samples/13.PNG',
                            'type': 'image'
                        },
                        {
                            'id'  : 3,
                            'url' : './assets/images/samples/14.PNG',
                            'type': 'image'
                        },
                        {
                            'id'  : 4,
                            'url' : './assets/images/samples/MEAN_APP.PNG',
                            'type': 'image'
                        }
                    ],
                    teamMembers: {
                        'title': 'Team Members',
                        'table': {
                            'columns': ['avatar', 'name', 'role', 'office', 'status'],
                            'rows'   : [
                                {
                                    avatar  : '',
                                    name    : 'Divyakanth',
                                    role: 'Project Manager',
                                    office  : 'On Site - NJ',
                                    status   : true
                                },
                                {
                                    avatar  : '',
                                    name    : 'Padma',
                                    role: 'Architect',
                                    office  : 'On Site - NJ',
                                    status   : true
                                },
                                {
                                    avatar  : '',
                                    name    : 'Ashwani',
                                    role: 'Architect / Lead',
                                    office  : 'On Site - NJ',
                                    status   : true
                                },
                                {
                                    avatar  : '',
                                    name    : 'Nikhil',
                                    role: 'Project Manager',
                                    office  : 'Offshore - INDIA',
                                    status   : true
                                },
                                {
                                    avatar  : '',
                                    name    : 'Santosh',
                                    role: 'Angular Developer',
                                    office  : 'On Site - NJ',
                                    status   : true
                                },
                                {
                                    avatar  : '',
                                    name    : 'Satish T',
                                    role: 'Angular Developer',
                                    office  : 'On Site - NJ',
                                    status   : true
                                },
                                {
                                    avatar  : '',
                                    name    : 'Vincent',
                                    role: '.Net Devloper',
                                    office  : 'On Site - NJ',
                                    status   : true
                                },
                                {
                                    avatar  : '',
                                    name    : 'Keerthi',
                                    role: '.Net Devloper',
                                    office  : 'On Site - NJ',
                                    status   : true
                                },
                                {
                                    avatar  : '',
                                    name    : 'Satish M',
                                    role: '.Net Devloper',
                                    office  : 'On Site - NJ',
                                    status   : true
                                },
                                {
                                    avatar  : '',
                                    name    : 'Keeneth',
                                    role: '.Net Devloper',
                                    office  : 'On Site - NJ',
                                    status   : false
                                },
                                {
                                    avatar  : '',
                                    name    : 'Kavya',
                                    role: '.Net Devloper',
                                    office  : 'On Site - NJ',
                                    status   : false
                                },
                                {
                                    avatar  : '',
                                    name    : 'Moheb',
                                    role: '.Net Devloper',
                                    office  : 'On Site - NJ',
                                    status   : false
                                }
                            ]
                            }
                      }
                },
                {
                    projectId : 'ode',
                    allowedToViewRef: true,
                    referance: 'https://oeds.ode.state.oh.us/SearchOrg',
                    projectAtClient : {
                        count: '4',
                        duration: '14',
                        details: [
                            {
                                'name' : 'Education Directory',
                                'duration' : '7',
                            },
                            {
                                'name' : 'Task Managment',
                                'duration' : '3',
                            },
                            {
                                'name' : 'EAS Dashboard',
                                'duration' : '2',
                            },
                            {
                                'name' : 'Grant Life Cycle-1 ',
                                'duration' : '2',
                            }
                        ]
                    },
                    'widget1'      : {
                        'title' : 'Hours Spent on Project',
                        'projects'      : {
                            'project1' : 'Education Directory',
                            'project2' : 'Task Managment',
                            'project3': 'EAS Dashboard',
                            'project4': 'Grant Life Cycle-1'
                        },
                        'currentRange': 'project1',
                        'data'        : {
                            'label': 'HOURS ON PROJECT',
                            'count': {
                                'project1' : 1120,
                                'project2' : 480,
                                'project3': 320,
                                'project4': 320
                            },
                        },
                        'detail'      : 'You can show some detailed information about this widget in here.'
                    },
                    'widget2'      : {
                        'title' : 'Tasks',
                        'data'        : {
                            'label': 'COMPLETED TASKS',
                            'count': 148,
                            'enhancements': 122,
                            'enhancementslabel': 'Completed Enhancements',
                            'defectslabel': 'Defects Resolved',
                            'defects': 26
                        }
                    },
                    'widget3'      : {
                        'title' : 'Technologies',
                        'projects'      : {
                            'project1' : 'Education Directory',
                            'project2' : 'Task Managment',
                            'project3': 'EAS Dashboard',
                            'project4': 'Grant Life Cycle-1'
                        },
                        'currentRange': 'project1',
                        'data'        : {
                            'label': 'TECHNOLOGIES',
                            'count': {
                                'project1' : 6,
                                'project2' : 5,
                                'project3': 5,
                                'project4': 6
                            },
                        },
                    },
                    technologies : {
                        count: '8',
                        details: [
                            {
                                'name' : 'Angular',
                                'usage' : '100',
                            },
                            {
                                'name' : 'Material',
                                'usage' : '100',
                            },
                            {
                                'name' : 'HTML',
                                'usage' : '100',
                            },
                            {
                                'name' : 'SQL',
                                'usage' : '10',
                            },
                            {
                                'name' : 'CSS',
                                'usage' : '100',
                            },
                        ]
                    },
                    'widget6': {
                        'title'      : 'Select to View Technologies worked on by Project @ Education Department',
                        'projects'     : {
                            'project1' : 'Education Directory',
                            'project2' : 'Task Managment',
                            'project3': 'EAS Dashboard',
                            'project4': 'Grant Life Cycle-1'
                        },
                        'currentProject': 'project1',
                        'mainChart'  : {
                            'project1': [
                                {
                                    'name' : 'Knockout with Javascript',
                                    'value': 40
                                },
                                {
                                    'name' : 'HTML',
                                    'value': 20
                                },
                                {
                                    'name' : 'Data Tabels',
                                    'value': 15
                                },
                                {
                                    'name' : 'CSS / Bootstrap',
                                    'value': 15
                                },
                                {
                                    'name' : 'Unit Testing',
                                    'value': 10
                                }
                            ],
                            'project2': [
                                {
                                    'name' : 'Angular with Javascript',
                                    'value': 40
                                },
                                {
                                    'name' : 'Data Tabels',
                                    'value': 15
                                },
                                {
                                    'name' : 'HTML',
                                    'value': 30
                                },
                                {
                                    'name' : 'CSS / Bootstrap',
                                    'value': 15
                                }
                            ],
                            'project3': [
                                {
                                    'name' : 'Angular with Typescript',
                                    'value': 30
                                },
                                {
                                    'name' : 'HTML',
                                    'value': 20
                                },
                                {
                                    'name' : 'High Charts / D3 Charts',
                                    'value': 30
                                },
                                {
                                    'name' : 'Bootstrap / CSS',
                                    'value': 20
                                }
                            ],
                            'project4': [
                                {
                                    'name' : 'Knockout with Typescript',
                                    'value': 40
                                },
                                {
                                    'name' : 'HTML',
                                    'value': 30
                                },
                                {
                                    'name' : 'High Charts / D3 Charts',
                                    'value': 15
                                },
                                {
                                    'name' : 'CSS / Bootstrap',
                                    'value': 15
                                }
                            ]
                        },
                    },
                    location : {
                        State: 'OHIO',
                        City : 'Columbus',
                        Street: '25 South Front Street'
                    },
                    Description: {
                        title : 'Department of Education',
                         // tslint:disable-next-line:max-line-length
                        subTitle: 'The Department of Education oversees the state’s public education system, which includes public school districts, joint vocational school districts and charter schools. The Department also monitors educational service centers, other regional education providers, early learning and child care programs, and private schools. The Department’s tasks include administering the school funding system, collecting school fiscal and performance data',
                        descriptionByProj: [
                            {
                                title: 'Education Directory System',
                                // tslint:disable-next-line:max-line-length
                                desc: 'The Educational Directory System (OEDS) is a decentralized data system in which organizations (those who do business with ODE, such as public districts, public schools, joint vocational schools, community schools, educational service centers, nonpublic schools, etc.) maintain their own data. The public can search OEDS for the most current information about an organization. OEDS organization administrators must login to their SAFE accounts to update information'
                            },
                            {
                                title: 'Task Managment System',
                                // tslint:disable-next-line:max-line-length
                                desc: 'Task management is the process of managing a task through its every day batch process. It involves Group Tasks Tracking, Updating Individual Requests, and reporting by data custodians who mananges to approve or denied any request came through assigned by role. Task management has helped Oragnization to achieve goals, or groups of individuals collaborate and share requests came through any system of ODE to provided the accomplishment of collective goals'
                            },
                            {
                                title: 'EAS Dashboard',
                                // tslint:disable-next-line:max-line-length
                                desc: 'EAS Dashboard is an information management tool that visually tracks, analyzes and displays key application request or process flows that requires a Data Custodian review which inlcude the New application approvals, Grant distribution to schools and school teachers application requests. EAS Dashboard is key application to view the overall tasks mangement status by different applications'
                            },
                            {
                                title: 'Grant Life Cycle',
                                // tslint:disable-next-line:max-line-length
                                desc: 'Fedral Grants recieved by the organization must flow through the grant process follows a linear lifecycle that includes creating the funding opportunity, applying, making award decisions, and successfully implementing the award to individual schools. The specific actions along the lifecycle are grouped into multiple phases and will be tracked through EAS Dashboard by organization level and through Task Management for each data custodian'
                            }
                        ]
                    },
                    'permissionToViewImage': true,
                    'images' : [
                        {
                            'id'  : 1,
                            'url' : './assets/images/samples/oeds1.png',
                            'type': 'image'
                        },
                        {
                            'id'  : 2,
                            'url' : './assets/images/samples/oeds2.png',
                            'type': 'image'
                        },
                        {
                            'id'  : 3,
                            'url' : './assets/images/samples/parentDash.JPG',
                            'type': 'image'
                        },
                        {
                            'id'  : 4,
                            'url' : './assets/images/samples/serachOrg.PNG',
                            'type': 'image'
                        }
                    ],
                    teamMembers: {
                        'title': 'Team Members',
                        'table': {
                            'columns': ['avatar', 'name', 'role', 'office', 'status'],
                            'rows'   : [
                                {
                                    avatar  : '',
                                    name    : 'Prashanth',
                                    role: '.Net Developer',
                                    office  : 'Columbus',
                                    status   : true
                                },
                                {
                                    avatar  : '',
                                    name    : 'Sucharitha',
                                    role: '.Net Developer / Lead',
                                    office  : 'Columbus',
                                    status   : true
                                },
                                {
                                    avatar  : '',
                                    name    : 'Santosh',
                                    role: '.Net Developer',
                                    office  : 'Columbus',
                                    status   : false
                                },
                                {
                                    avatar  : '',
                                    name    : 'Jean Chen',
                                    role: 'Architech / Lead',
                                    office  : 'Columbus',
                                    status   : false
                                },
                                {
                                    avatar  : '',
                                    name    : 'Jai Singh',
                                    role: '.Net Developer',
                                    office  : 'Columbus',
                                    status   : true
                                },
                                {
                                    avatar  : '',
                                    name    : 'Kevin',
                                    role: 'Architech/ Lead',
                                    office  : 'Columbus',
                                    status   : false
                                }
                            ]
                            }
                      }
                      },
                      {
                        projectId : 'qri',
                        allowedToViewRef: false,
                        referance: 'https://www.quorumreview.com',
                        projectAtClient : {
                            count: '3',
                            duration: '15',
                            details: [
                                {
                                    'name' : 'BOARD APP',
                                    'duration' : '4',
                                },
                            ]
                        },
                    'widget1'      : {
                            'title' : 'Hours Spent on Project',
                            'projects'      : {
                                'project1' : 'Board App',
                            },
                            'currentRange': 'project1',
                            'data'        : {
                                'label': 'HOURS ON PROJECT',
                                'count': {
                                    'project1' : 640,
                                },
                            },
                            'detail'      : 'You can show some detailed information about this widget in here.'
                        },
                        'widget2'      : {
                            'title' : 'Tasks',
                            'data'        : {
                                'label': 'COMPLETED TASKS',
                                'count': 85,
                                'enhancements': 70,
                                'enhancementslabel': 'Completed Enhancements',
                                'defectslabel': 'Defects Resolved',
                                'defects': 15
                            }
                        },
                        'widget3'      : {
                            'title' : 'Technologies',
                            'projects'      : {
                                'project1' : 'Board App',
                            },
                            'currentRange': 'project1',
                            'data'        : {
                                'label': 'TECHNOLOGIES',
                                'count': {
                                    'project1' : 6,
                                },
                            },
                        },
                        technologies : {
                            count: '8',
                            details: [
                                {
                                    'name' : 'Angular',
                                    'usage' : '100',
                                },
                                {
                                    'name' : 'Material',
                                    'usage' : '100',
                                },
                                {
                                    'name' : 'HTML',
                                    'usage' : '100',
                                },
                                {
                                    'name' : 'SQL',
                                    'usage' : '10',
                                },
                                {
                                    'name' : 'CSS',
                                    'usage' : '100',
                                },
                            ]
                        },
                        'widget6': {
                            'title'      : 'Select to View Technologies worked on by Project @ Quorum Review IRB',
                            'projects'     : {
                                'project1' : 'Board App',
                            },
                            'currentProject': 'project1',
                            'mainChart'  : {
                                'project1': [
                                    {
                                        'name' : 'Angular with Javascript',
                                        'value': 40
                                    },
                                    {
                                        'name' : 'HTML',
                                        'value': 20
                                    },
                                    {
                                        'name' : 'CSS / Bootstrap',
                                        'value': 10
                                    },
                                    {
                                        'name' : 'Node JS',
                                        'value': 20
                                    },
                                    {
                                        'name' : 'Unit Testing',
                                        'value': 10
                                    }
                                ]
                            },
                        },
                        location : {
                            State: 'Washington',
                            City : 'Seattle',
                            Street: '1501 4th Ave #800'
                        },
                        Description: {
                            title : 'Quorum Review IRB',
                             // tslint:disable-next-line:max-line-length
                            subTitle: 'Quorum Review is one of the largest independent review boards (IRB or REB) providing ethics review to the human clinical trials industry. Fully accredited by both AAHRPP and IASSC, Quorum Review purpose is to protect human research participants while facilitating the clinical research process',
                            descriptionByProj: [
                                {
                                    title: 'Board App',
                                    // tslint:disable-next-line:max-line-length
                                    desc: ''
                                }
                            ]
                        },
                        'permissionToViewImage': true,
                        'images' : [
                            {
                                'id'  : 1,
                                'url' : './assets/images/samples/Quorum Review.png',
                                'type': 'image'
                            }
                        ],
                        teamMembers: {
                            'title': 'Team Members',
                            'table': {
                                'columns': ['avatar', 'name', 'role', 'office', 'status'],
                                'rows'   : [
                                    {
                                        avatar  : '',
                                        name    : 'Chris',
                                        role: 'Archirect / Lead',
                                        office  : 'Seattle',
                                        status   : false
                                    }
                                ]
                                }
                          }
                          },
                          {
                            projectId : 'ads',
                            allowedToViewRef: false,
                            referance: 'https://www.ads-pipe.com/',
                            projectAtClient : {
                                count: '3',
                                duration: '15',
                                details: [
                                    {
                                        'name' : 'New Order Tracking System',
                                        'duration' : '14',
                                    }
                                ]
                            },
                        'widget1'      : {
                                'title' : 'Hours Spent on Project',
                                'projects'      : {
                                    'project1' : 'New Order Tracking System',
                                },
                                'currentRange': 'project1',
                                'data'        : {
                                    'label': 'HOURS ON PROJECT',
                                    'count': {
                                        'project1' : 2240,
                                    },
                                },
                                'detail'      : 'You can show some detailed information about this widget in here.'
                            },
                            'widget2'      : {
                                'title' : 'Tasks',
                                'data'        : {
                                    'label': 'COMPLETED TASKS',
                                    'count': 135,
                                    'enhancements': 102,
                                    'enhancementslabel': 'Completed Enhancements',
                                    'defectslabel': 'Defects Resolved',
                                    'defects': 33
                                }
                            },
                            'widget3'      : {
                                'title' : 'Technologies',
                                'projects'      : {
                                    'project1' : 'New Order Tracking System',
                                },
                                'currentRange': 'project1',
                                'data'        : {
                                    'label': 'TECHNOLOGIES',
                                    'count': {
                                        'project1' : 6,
                                    },
                                },
                            },
                            technologies : {
                                count: '8',
                                details: [
                                    {
                                        'name' : 'Angular',
                                        'usage' : '100',
                                    },
                                    {
                                        'name' : 'Material',
                                        'usage' : '100',
                                    },
                                    {
                                        'name' : 'HTML',
                                        'usage' : '100',
                                    },
                                    {
                                        'name' : 'SQL',
                                        'usage' : '10',
                                    },
                                    {
                                        'name' : 'CSS',
                                        'usage' : '100',
                                    },
                                ]
                            },
                            'widget6': {
                                'title'      : 'Select to View Technologies worked on by Project @ ADS Pipe',
                                'projects'     : {
                                    'project1' : 'New Order Tracking System',
                                },
                                'currentProject': 'project1',
                                'mainChart'  : {
                                    'project1': [
                                        {
                                            'name' : 'Anular / Jquery/ Javascript',
                                            'value': 40
                                        },
                                        {
                                            'name' : 'Adobe Photoshop',
                                            'value': 15
                                        },
                                        {
                                            'name' : 'HTML',
                                            'value': 20
                                        },
                                        {
                                            'name' : 'CSS / SCSS',
                                            'value': 15
                                        },
                                        {
                                            'name' : 'Unit Testing',
                                            'value': 10
                                        }
                                    ]
                                },
                            },
                            location : {
                                State: 'OHIO',
                                City : 'Columbus',
                                Street: 'Hillyard'
                            },
                            Description: {
                                title : 'ADS Pipe',
                                 // tslint:disable-next-line:max-line-length
                                subTitle: 'ADS researched and developed a structurally superior corrugated polyethylene pipe that was perfectly suited for subsurface drainage. ADS Manufactures plastic pipe proved far superior to the materials in use at the time. Its many advantages included lightweight construction for easy handling, high resistance to corrosion and abrasion, and strength and durability to withstand severe loading conditions',
                                descriptionByProj: [
                                    {
                                        title: 'New Order Tracking System',
                                        // tslint:disable-next-line:max-line-length
                                        desc: 'New order tracking system of ADS allows the customer to gain insight into where their order is at any given point in time. From the time an order is placed until it is delivered, along with the invoice and providing right customer support if items missing or a problems with order.It is an application tightly integrated with, other systems involved in the management and fulfillment of each order—including sales order management, warehouse management, and inventory'
                                    }
                                ]
                            },
                            'permissionToViewImage': false,
                            'images' : [
                                {
                                    'id'  : 1,
                                    'url' : './assets/images/ecommerce/product-image-placeholder.png',
                                    'type': 'image'
                                },
                            ],
                            teamMembers: {
                                'title': 'Team Members',
                                'table': {
                                    'columns': ['avatar', 'name', 'role', 'office', 'status'],
                                    'rows'   : [
                                        {
                                            avatar  : '',
                                            name    : 'Vamshi',
                                            role: 'Project Manger',
                                            office  : 'On Site',
                                            status   : true
                                        },
                                        {
                                            avatar  : '',
                                            name    : 'Nikhil',
                                            role: 'Java Developer',
                                            office  : 'Columbus',
                                            status   : false
                                        },
                                        {
                                            avatar  : '',
                                            name    : 'Dinesh',
                                            role: 'Java Developer / Lead',
                                            office  : 'Columbus',
                                            status   : false
                                        },
                                        {
                                            avatar  : '',
                                            name    : 'Vijay',
                                            role: 'UI Developer',
                                            office  : 'Columbus',
                                            status   : false
                                        },
                                        {
                                            avatar  : '',
                                            name    : 'Leah',
                                            role: 'Business Analyist',
                                            office  : 'Columbus',
                                            status   : false
                                        },
                                        {
                                            avatar  : '',
                                            name    : 'Jason',
                                            role: 'Architect / Lead',
                                            office  : 'Columbus',
                                            status   : false
                                        }
                                    ]
                                    }
                              }
                              },
                              {
                                projectId : 'india',
                                allowedToViewRef: true,
                                referance: 'http://www.easunreyrolle.com/',
                                projectAtClient : {
                                    count: '2',
                                    duration: '18',
                                    details: [
                                        {
                                            'name' : 'Smart Search Inc',
                                            'duration' : '12',
                                        },
                                        {
                                            'name' : 'Experian',
                                            'duration' : '6',
                                        }
                                    ]
                                },
                            'widget1'      : {
                                    'title' : 'Hours Spent on Project',
                                    'projects'      : {
                                        'project1' : 'Smart Search Inc',
                                        'project2' : 'Experian',
                                    },
                                    'currentRange': 'project1',
                                    'data'        : {
                                        'label': 'HOURS ON PROJECT',
                                        'count': {
                                            'project1' : 1888,
                                            'project2' : 900,
                                        },
                                    },
                                    'detail'      : 'You can show some detailed information about this widget in here.'
                                },
                                'widget2'      : {
                                    'title' : 'Tasks',
                                    'data'        : {
                                        'label': 'COMPLETED TASKS',
                                        'count': 152,
                                        'enhancements': 122,
                                        'enhancementslabel': 'Completed Enhancements',
                                        'defectslabel': 'Defects Resolved',
                                        'defects': 30
                                    }
                                },
                                'widget3'      : {
                                    'title' : 'Technologies',
                                    'projects'      : {
                                        'project1' : 'Smart Search Inc',
                                        'project2' : 'Experian',
                                    },
                                    'currentRange': 'project1',
                                    'data'        : {
                                        'label': 'TECHNOLOGIES',
                                        'count': {
                                            'project1' : 6,
                                            'project2' : 6,
                                        },
                                    },
                                },
                                technologies : {
                                    count: '8',
                                    details: [
                                        {
                                            'name' : 'Angular',
                                            'usage' : '100',
                                        },
                                        {
                                            'name' : 'Material',
                                            'usage' : '100',
                                        },
                                        {
                                            'name' : 'HTML',
                                            'usage' : '100',
                                        },
                                        {
                                            'name' : 'SQL',
                                            'usage' : '10',
                                        },
                                        {
                                            'name' : 'CSS',
                                            'usage' : '100',
                                        },
                                    ]
                                },
                                'widget6': {
                                    'title'      : 'Select to View Technologies worked on by Project @ INDIA',
                                    'projects'     : {
                                        'project1' : 'Smart Search Inc',
                                        'project2' : 'Experian',
                                    },
                                    'currentProject': 'project1',
                                    'mainChart'  : {
                                        'project1': [
                                            {
                                                'name' : 'Jquery / Javascript',
                                                'value': 40
                                            },
                                            {
                                                'name' : 'HTML',
                                                'value': 20
                                            },
                                            {
                                                'name' : 'CSS',
                                                'value': 15
                                            },
                                            {
                                                'name' : 'Adobe Photoshop',
                                                'value': 25
                                            }
                                        ],
                                        'project2': [
                                            {
                                                'name' : 'Javascript',
                                                'value': 40
                                            },
                                            {
                                                'name' : 'Jquery',
                                                'value': 20
                                            },
                                            {
                                                'name' : 'HTML / CSS',
                                                'value': 25
                                            },
                                            {
                                                'name' : 'Adobe Photoshop',
                                                'value': 15
                                            }
                                        ],
                                    },
                                },
                                location : {
                                    State: 'Andhra Pradesh, India',
                                    City : 'Hyderabad',
                                    Street: ''
                                },
                                Description: {
                                    title : 'Smart Search Solutions Inc',
                                     // tslint:disable-next-line:max-line-length
                                    subTitle: 'Company prime goal is to develop customizable frameworks, driven by our robust R&D, which are the cornerstone of our solution offerings. Successfully helped hundreds of clients in Healthcare, Insurance, Life Sciences, Banking, Financial Services, and E-commerce',
                                    descriptionByProj: [
                                        {
                                            title: 'Easun Reyrolle, India',
                                            // tslint:disable-next-line:max-line-length
                                            desc: 'Worked on desiging and developing Marketing website of Easun Reyroll. Identified user needs and business requirements and communicated design deliverables, such as specifications, templates, storyboards, wireframes, and mock-ups. Applied JQuery scripts for basic animation and end user screen customization purposes and implemented various Validation Controls for form validation and implemented custom validation controls with JavaScript validation controls'
                                        },
                                        {
                                            title: 'Experian, India',
                                            // tslint:disable-next-line:max-line-length
                                            desc: 'Using their comprehensive understanding of individuals, markets and economies, we help organizations find, develop and manage customer relationships to make their businesses more profitable, Worked closely with Business Analysts in understanding the technical requirements of each project and prepared the use cases for different functionalities and designs, Worked with Senior User Experience Designers to understand their branding strategies and design goals to define visual design strategy, layout, and features to design their web sites/applications'
                                        },
                                    ]
                                },
                                'permissionToViewImage': false,
                                'images' : [
                                    {
                                        'id'  : 1,
                                        'url' : './assets/images/ecommerce/product-image-placeholder.png',
                                        'type': 'image'
                                    },
                                ],
                                teamMembers: {
                                    'title': 'Team Members',
                                    'table': {
                                        'columns': ['avatar', 'name', 'role', 'office', 'status'],
                                        'rows'   : [
                                            {
                                                avatar  : '',
                                                name    : 'Prashanth Pvss',
                                                role: 'UI - Lead',
                                                office  : 'Hyderabad',
                                                status   : false
                                            },
                                            {
                                                avatar  : '',
                                                name    : 'Gangadhar',
                                                role: 'Java Developer',
                                                office  : 'Hyderabad',
                                                status   : false
                                            },
                                            {
                                                avatar  : '',
                                                name    : 'Nithin Reddy',
                                                role: 'UI Developer',
                                                office  : 'Hyderabad',
                                                status   : false
                                            },
                                            {
                                                avatar  : '',
                                                name    : 'Santosh',
                                                role: 'Project Manager',
                                                office  : 'Hyderabad',
                                                status   : true
                                            },
                                            {
                                                avatar  : '',
                                                name    : 'Anil',
                                                role: 'UI Developer',
                                                office  : 'Hyderabad',
                                                status   : false
                                            },
                                            {
                                                avatar  : '',
                                                name    : 'Amruth',
                                                role: 'DBA',
                                                office  : 'Hyderabad',
                                                status   : false
                                            }
                                        ]
                                        }
                                  }
                                  }
        ]
};

}
