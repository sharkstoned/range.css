angular.module("DemoApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        views: {
            "main": {
                templateUrl: 'partials/main.html'
            }
        }
    }).state('docs', {
        url: '/docs',
        views: {
            "main": {
                templateUrl: 'partials/docs.html'
            }
        }
    });
}).value("presets", {
    "default": {
        color1: '#616161',
        color2: '#8396d7',
        'thumb-border-color': '#3e58b6',
        'shadow-color': '#111',
        'thumb-roundness': 50,
        'thumb-height': 40,
        'thumb-shadow-size': 1,
        'thumb-shadow-blur': 1,
        'track-shadow-size': 1,
        'track-shadow-blur': 1,
        'thumb-width': 40,
        'contrast': 5,
        'track-height': 10,
        'track-radius': 5,
        'namespace': 'slider',
        'thumb-border-width': 1
    },
    "terminator": {
        color1: '#616161',
        color2: '#8396d7',
        'thumb-border-color': '#3e58b6',
        'shadow-color': '#111',
        'thumb-roundness': 0,
        'thumb-height': 40,
        'thumb-shadow-size': 1,
        'thumb-shadow-blur': 1,
        'track-shadow-size': 1,
        'track-shadow-blur': 1,
        'thumb-width': 40,
        'contrast': 5,
        'track-height': 10,
        'track-radius': 5,
        'namespace': 'slider',
        'thumb-border-width': 1
    }
}).run(function ($rootScope, presets) {
    $rootScope.presets = presets;

    $rootScope.$watch('slider', function (slider, old) {
        var lessVals = angular.copy(slider);
        lessVals['thumb-roundness'] += "%";
        lessVals['range-roundness'] += "px";
        lessVals['thumb-height'] += "px";
        lessVals['thumb-width'] += "px";
        lessVals['thumb-border-width'] += "px";
        lessVals['contrast'] += "%";

        lessVals['track-radius'] += "px";
        lessVals['track-shadow-size'] += "px";
        lessVals['track-shadow-blur'] += "px";
        lessVals['thumb-shadow-size'] += "px";
        lessVals['thumb-shadow-blur'] += "px";
        lessVals['track-height'] += "px";
        less.modifyVars(lessVals);

        if (slider.namespace) {
            $rootScope.output = __lastCSS.replace(/input\[type=range\]/g, 'input[type=range].' + slider.namespace);
        } else {
            $rootScope.output = __lastCSS;
        }
    }, true);

    $rootScope.slider = presets.default;
});
