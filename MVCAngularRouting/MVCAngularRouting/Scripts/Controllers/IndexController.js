// IndexController.js


angular
    .module('myApp')
    .controller('IndexController', IndexController);

function IndexController($scope) {
    $scope.Heading = "Index Page";
}