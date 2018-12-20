(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-profile-profile-module~professional-professional-module~projects-projects-module"],{

/***/ "./src/@album/animations/index.ts":
/*!****************************************!*\
  !*** ./src/@album/animations/index.ts ***!
  \****************************************/
/*! exports provided: albumAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "albumAnimations", function() { return albumAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var customAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
var albumAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(customAnimation)])]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animateStagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('50', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('100', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('200', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => 50', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('50ms', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()
            ])
        ], { optional: true })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => 100', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('100ms', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()
            ])
        ], { optional: true })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => 200', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@*', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('200ms', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()
            ])
        ], { optional: true }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'none',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'block',
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '0px',
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '*',
            display: 'block'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => left', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(100%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(0)'
            }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('left => void', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(0)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(-100%)'
            }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => right', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(-100%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(0)'
            }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('right => void', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(0)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(100%)'
            }))
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(-100%)',
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(0)',
            display: 'flex'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(100%)',
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(0)',
            display: 'flex'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInTop', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(-100%)',
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(0)',
            display: 'flex'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInBottom', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(100%)',
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(0)',
            display: 'flex'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandCollapse', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '0px'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '*'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))
    ]),
    // -----------------------------------------------------------------------------------------------------
    // @ Router animations
    // -----------------------------------------------------------------------------------------------------
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransitionLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter, content > :leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(100%)',
                    opacity: 0
                })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translateX(0)',
                            opacity: 1
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translateX(-100%)',
                            opacity: 0
                        }))
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translateX(0%)',
                            opacity: 1
                        }))
                    ], { optional: true })
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })
            ])
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransitionRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter, content > :leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(-100%)',
                    opacity: 0
                })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translateX(0)',
                            opacity: 1
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translateX(100%)',
                            opacity: 0
                        }))
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translateX(0%)',
                            opacity: 1
                        }))
                    ], { optional: true })
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })
            ])
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransitionUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter, content > :leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateY(100%)',
                    opacity: 0
                })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'translateY(0)',
                        opacity: 1
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'translateY(-100%)',
                        opacity: 0
                    }))
                ], { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'translateY(0%)',
                        opacity: 1
                    }))
                ], { optional: true })
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransitionDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter, content > :leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateY(-100%)',
                    opacity: 0
                })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translateY(0)',
                            opacity: 1
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translateY(100%)',
                            opacity: 0
                        }))
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translateY(0%)',
                            opacity: 1
                        }))
                    ], { optional: true })
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })
            ])
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransitionFade', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter, content > :leave ', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0
                })
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0
                }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1
                }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('content > :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })
        ]))
    ])
];


/***/ })

}]);
//# sourceMappingURL=main-profile-profile-module~professional-professional-module~projects-projects-module.js.map