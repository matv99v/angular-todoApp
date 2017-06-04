var tmpl = require('./tasksList.template.html');

angular
    .module('tasksList', [])
    .directive('tasksList', function() {
        return {
            restrict: 'E',
            template: tmpl,
            controller: ['$log', function($log) {
                $log.debug('---===tasksList controller===---');
            }]
        };
    });
