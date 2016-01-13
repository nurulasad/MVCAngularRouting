// AnotherPageController.js

(function () {
    'use strict'

    var app = angular.module('myApp');

    app.controller('ParentController', ['$scope', function ($scope) {
        $scope.data = {
            name: 'Template Parent',
            customer : {
                name: 'Template 1'
            }
        };
    }])

})();



(function () {
    'use strict'

    var app = angular.module('myApp');

    app.controller('Component2Controller', ['$scope', function ($scope) {
        var d = $scope;
    }]).directive('myCustomer', function () {
        return {
            template: 'Name: {{customerInfo.name}}',
            scope: {
                customerInfo: '=info'
            }
        };
    });

})();