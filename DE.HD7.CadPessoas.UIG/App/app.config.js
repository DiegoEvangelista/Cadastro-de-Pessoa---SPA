(function () {
    'use strict';

    angular.module('MyApp').config(config);

    config.$inject = ['$routeProvider', '$httpProvider'];

    function config($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'App/Home/home.html',
                controller: 'HomeController',
                access: 'publico'
            })
            .when('/Pessoa', {
                templateUrl: 'App/Pessoa/index.html',
                controller: 'PessoaController',
                access: 'publico'
            })
            .when('/Pessoa/Cadastrar', {
                templateUrl: 'App/Pessoa/cadastrar.html',
                controller: 'PessoaCadastrarController',
                access: 'publico'
            })
            .when('/Pessoa/:Id/Excluir', {
                templateUrl: 'App/Pessoa/excluir.html',
                controller: 'PessoaExcluirController',
                access: 'publico'
            })
            .when('/Pessoa/:Id/Cadastrar', {
                templateUrl: 'App/Pessoa/cadastrar.html',
                controller: 'PessoaCadastrarController',
                access: 'publico'
            })
            .when('/Pessoa/:Id', {
                templateUrl: 'App/Pessoa/detalhes.html',
                controller: 'PessoaDetalheController',
                access: 'publico'
            });
        $httpProvider.interceptors.push(function ($q, $location) {
            return {
                'responseError': function (response) {
                    if (response.status === 401 || response.status === 403) {
                        $location.path('/');
                        return $q.reject(response);
                    } else {
                        return $q.reject(response);
                    }
                }
            };
        });
    }

})();