(function () {
    'use strict';

    angular.module('MyApp').run(['$rootScope', '$location', '$http', function ($rootScope, $location, $http) {

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            NProgress.start();
            
            $rootScope.alertType = "";
            $rootScope.alertMessage = "Loading...";
            $rootScope.active = "progress-striped active progress-warning";

            $rootScope.error = null;
            
        });

        $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
            $rootScope.alertType = "alert-success";
            $rootScope.alertMessage = "Successfully changed routes :)";
            $rootScope.active = "progress-success";

            $rootScope.newLocation = $location.path();
            NProgress.done();
        });

        $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
            //alert("ROUTE CHANGE ERROR: " + rejection);
            $rootScope.alertType = "alert-error";
            $rootScope.alertMessage = "Failed to change routes :(";
            $rootScope.active = "";


             var destination = (current && (current.title || current.name || current.loadedTemplateUrl)) || 'rota não encontrada';
             
             var msg = 'Erro ao acessar ' + destination + '. ' + (rejection.msg || '');
             alert("ROUTE CHANGE ERROR: " + msg);
            
            NProgress.done();
        });

        $rootScope.alertType = "alert-info";
        $rootScope.alertMessage = "Welcome to the resolve demo";
    }]);


})();