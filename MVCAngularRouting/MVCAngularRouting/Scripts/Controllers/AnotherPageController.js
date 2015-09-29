// AnotherPageController.js

(function () {
    'use strict'

    angular
    .module('myApp')
    .controller('AnotherPageController', AnotherPageController);

    function AnotherPageController($scope) {
        $scope.Heading = "Another Page";
    }

})();