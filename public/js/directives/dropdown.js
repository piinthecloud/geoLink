(function() {
    'use strict';
    angular
        .module('app')
        .directive('sharedDropdown', sharedDropdown);

    function sharedDropdown() {
        var directive = {
            templateUrl: 'js/directives/dropdown.html',
            scope: {
                list: '=',
                model: '=',
                placeholderText: '@',
                selectClass: '@'
            }
        };
        return directive;
    }
})();
