(function () {
    'use strict';

    angular.module('MyApp').controller('PessoaDetalheController', PessoaDetalheController);

    PessoaDetalheController.$inject = ['$scope', '$routeParams', 'PessoaFactory'];

    function PessoaDetalheController($scope, $routeParams, PessoaFactory) {
        var init = function () {
            $scope.Pessoa = PessoaFactory.get({ Id: $routeParams.Id });
        };

        init();
    };

})();