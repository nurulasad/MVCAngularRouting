// IndexController.js

(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('IndexController', IndexController);

    function IndexController($scope) {
        $scope.Heading = "Index Page";
    }

})();