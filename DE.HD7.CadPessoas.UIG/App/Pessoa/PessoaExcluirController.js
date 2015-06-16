(function () {
    'use strict';

    angular.module('MyApp').controller('PessoaExcluirController', PessoaExcluirController);

    PessoaExcluirController.$inject = ['$scope', '$location', '$routeParams', 'PessoaFactory'];

    function PessoaExcluirController($scope, $location, $routeParams, PessoaFactory) {
        var init = function () {
            $scope.Pessoa = PessoaFactory.get({ Id: $routeParams.Id });
        };

        $scope.excluir = function () {
            $scope.Pessoa.$delete({ Id: $scope.Pessoa.Id }, function () {
                $location.path('/Pessoa');
            });
        };

        init();
    };

})();