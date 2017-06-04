var tmpl = require('./info.template.html');

angular
    .module('info', [])
    .directive('info', function() {
        return {
            restrict: 'E',
            template: tmpl,
            controller: ['$log', function($log) {
                $log.debug('---===info controller===---');
            }]
        };
    });
