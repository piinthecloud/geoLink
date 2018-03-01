(function() {
    angular
    .module('app')
    .factory('MapService', mapService);

    mapService.$inject = ['$q'];
    function mapService($q) {
        var deferred = $q.defer();

        var service = {
            map: deferred.promise,
            resolveMap: resolveMap,
            getTiles: getTiles
        };

        return service;

        function resolveMap(element) {
            deferred.resolve(new L.Map(element));
        }

        function getTiles() {
            var tiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic3RlcGhtcGkiLCJhIjoiN240Q1g3YyJ9.nZ4wXOMd_tEINawMHdQsDA', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1Ijoic3RlcGhtcGkiLCJhIjoiN240Q1g3YyJ9.nZ4wXOMd_tEINawMHdQsDA'
            });
            return tiles;
        }

    }
})();
