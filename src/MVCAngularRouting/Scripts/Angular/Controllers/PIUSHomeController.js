(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('PIUSHomeController', PIUSHomeController);

    function PIUSHomeController($scope, $http) {
        $scope.Heading = "PIUS Home";

        $http.get("http://mngappsrv1.hq.gratex.com:8081/pius/svc/policy/?eq(entitySubType,QUOTE)&limit(10)")
            .success(showResponse);


    }

    var showResponse = function (object) {
        $('#output').text(JSON.stringify(object, null, 4));
    };

})();