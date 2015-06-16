(function () {
    'use strict';

    angular.module('MyApp').controller('PessoaController', PessoaController);

    PessoaController.$inject = ['$scope', '$rootScope', 'PessoaFactory'];

    function PessoaController($scope, $rootScope, PessoaFactory) {
        $rootScope.tituloPagina = '- Pessoas';
        var init = function () {
            $scope.Pessoas = PessoaFactory.query();
        };

        init();
    };

})();