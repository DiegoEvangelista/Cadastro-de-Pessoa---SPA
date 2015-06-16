(function () {
    'use strict';

    angular.module('MyApp').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$rootScope', 'HomeFactory'];

    function HomeController($scope, $rootScope, HomeFactory) {
        $rootScope.tituloPagina = '- Pessoas';
        var init = function () {
            $scope.Pessoas = HomeFactory.query();
        };

        init();
    };

})();