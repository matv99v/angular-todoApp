var tmpl = require('./inputTask.template.html');

angular
    .module('inputTaskForm', [])
    .directive('inputTaskForm', function() {
        return {
            restrict: 'E',
            template: tmpl,
            controller: ['$log', function($log) {
                $log.debug('---===inputTaskForm controller===---');
            }]
        };
    });
