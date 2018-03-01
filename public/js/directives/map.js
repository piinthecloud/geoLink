(function() {
    'use strict';
    angular
        .module('app')
        .directive('sharedMap', sharedMap);

    sharedMap.$inject = ['MapService'];
    function sharedMap(mapService) {
            var directive = {
              replace: true,
              template: "<div></div>",
              link: function(scope, element, attributes) {
                 mapService.resolveMap(element[0]);
              }
            };
            return directive;
    }
})();
