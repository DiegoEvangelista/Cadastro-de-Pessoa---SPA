(function () {
    'use strict';

    angular.module('MyApp').factory('HomeFactory', homeFactory);

    homeFactory.$inject = ['$resource', '$http'];

    function homeFactory($resource, $http) {
        var resource = $resource('http://localhost:57330/Api/Pessoa/:Id', {}, {
            query: { method: 'GET', params: { Id: '' }, isArray: true },
            update: { method: 'PUT', params: { Id: '@Id' } }
        });
        return resource;
    };

})();