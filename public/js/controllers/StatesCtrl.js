(function() {
    'use strict';
    angular
    .module('app')
    .controller('StatesCtrl', StatesCtrl);

    StatesCtrl.$inject = ['$scope','$filter', 'StatesService', 'MapService'];

    function StatesCtrl($scope, $filter, statesService, mapService) {

        $scope.states={};
        $scope.selected = {};
        $scope.selected.state = [];

        statesService.getStates().then(function(states) {
            $scope.states = states;
        });

        $scope.stateBorders=[];
        statesService.getBorders().then(function(stateBorders) {
            $scope.stateBorders = stateBorders;
        });

        //Get and set map
        mapService.map.then(function (map) {
            //Setup map
            map.setView([37.8, -96], 4);
            mapService.getTiles().addTo(map);

            //setup map layer
            $scope.geoJSONWrapper = statesService.getGeoJSONWrapper();
            $scope.layer = L.geoJson();
            $scope.layer.addData($scope.geoJSONWrapper).addTo(map);
        });

        //Watch for selected states & update map layers
        $scope.$watch('selected.state', function (newVal, oldVal) {
            // Clear existing layers so they don't pile up
            $scope.layer.clearLayers();
            $scope.geoJSONWrapper = statesService.getGeoJSONWrapper();

            // Create new geoJson obj with selected/deselected states
            angular.forEach(newVal, function(state, key) {
                var stateBorderObj = $filter('filter')($scope.stateBorders.features, state.value);
                $scope.geoJSONWrapper.features.push(stateBorderObj[0])
            });

            $scope.layer.addData($scope.geoJSONWrapper);
        }, true);
    }

})();
