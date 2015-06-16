(function () {
    'use strict';

    angular.module('MyApp').controller('PessoaCadastrarController', PessoaCadastrarController);

    PessoaCadastrarController.$inject = ['$scope', '$routeParams', '$location', 'PessoaFactory'];

    function PessoaCadastrarController($scope, $routeParams, $location, PessoaFactory) {
        if ($routeParams.Id != undefined) {
            $scope.pessoa = PessoaFactory.get({ Id: $routeParams.Id });
        } else {
            $scope.pessoa = {};
        }

        $scope.cadastrar = function () {
            if ($scope.pessoaForm.$valid) {
                if ($scope.pessoa.Id != undefined) {
                    $scope.pessoa.$update({ Id: $scope.pessoa.Id }, function () {
                        $location.path('/Pessoa');
                    });
                } else {
                    PessoaFactory.save({}, $scope.pessoa, function () {
                        $location.path('/Pessoa');
                    });
                }
            }
        };
    };

})();