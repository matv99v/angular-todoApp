angular
    .module('todoApp', [
        'inputTaskForm',
        'tasksList',
        'info',
    ])
    .controller('mainController', ['$log', function($log) {
        $log.debug('---===mainController controller===---');

    }]);;
