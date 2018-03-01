(function() {
    angular
        .module('app')
        .factory('StatesService', statesService);

    statesService.$inject = ['$http'];
    function statesService($http) {
        var service = {
            getStates: getStates,
            getBorders: getBorders,
            getGeoJSONWrapper: getGeoJSONWrapper
        };

        return service;

        function getStates() {
            return $http.get('/api/states').then(function(res){
                return res.data;
            });
        }

        function getBorders() {
            return $http.get('/api/stateBorders').then(function(res){
                return res.data;
            });
        }

        function getGeoJSONWrapper() {
            var obj = {'type': 'FeatureCollection', 'features': [] };
            return obj;
        }
    }
})();
