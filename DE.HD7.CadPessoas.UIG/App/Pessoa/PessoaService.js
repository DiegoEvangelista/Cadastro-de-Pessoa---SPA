(function () {
    'use strict';

    angular.module('MyApp').factory('PessoaFactory', pessoaFactory);

    pessoaFactory.$inject = ['$resource', '$http'];

    function pessoaFactory($resource, $http) {
        var resource = $resource('http://localhost:57330/Api/Pessoa/:Id', {}, {
            query: { method: 'GET', params: { Id: '' }, isArray: true },
            update: { method: 'PUT', params: { Id: '@Id' } }
        });
        return resource;
    };

})();