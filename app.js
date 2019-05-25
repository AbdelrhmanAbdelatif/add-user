var myApp = angular.module('myApp' , [ ]);

myApp.controller('storeController', function MyController($scope){
    $scope.show = {};
    $scope.persons = [
        {
            name: 'Abd',
            age : '29',
            job : 'frodev'
            
        },
        {
            name: 'mohd',
            age : '30',
            job : 'dev'
            
        }

    ];

    $scope.save = function(){
        $scope.person.push($scope.show);
        $scope.show = {};
    }
    });

