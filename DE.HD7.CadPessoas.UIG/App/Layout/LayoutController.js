(function () {
    'use strict';

    angular.module('MyApp').controller('LayoutController', LayoutController);

    LayoutController.$inject = ['$rootScope', '$location', 'APP_CONFIG'];

    function LayoutController($rootScope, $location, APP_CONFIG) {
        $rootScope.versao = APP_CONFIG.Versao;
        $rootScope.appName = APP_CONFIG.AppNome;
        $rootScope.tituloPagina = '';

    };

})();