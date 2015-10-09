// AnotherPageController.js

(function () {
    'use strict'

    angular
    .module('myApp')
    .controller('RadioController', ['$scope', function ($scope) {
        $scope.color = {
            name: 'blue'
        };
        $scope.specialValue = {
            "id": "12345",
            "value": "green"
        };


        $scope.onRadioChange = function (color) {
            $scope.text = color.name;
        };
    }]);

   
})();

   