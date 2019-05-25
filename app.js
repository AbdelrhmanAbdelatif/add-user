var myApp = angular.module('myApp' , [ ]);

myApp.controller('storeController', function MyController($scope){
    $scope.show = {
        fName:"",
        lName:"",
        lang:"",
        email:"",
        account:"",
        role:""
    };
    $scope.persons = [];
    $scope.addNewUser=false;
    $scope.edit_mode=false;

    $scope.save = function(){
        if($scope.edit_mode==false){
            var person = angular.copy($scope.show);
            $scope.persons.push(person);    
        }
        $scope.reset();
    }

    $scope.edit=function(person){
        $scope.show=person;
        $scope.addNewUser=true;
        $scope.edit_mode=true;
    }

    $scope.reset=function(){
        $scope.edit_mode=false;
        $scope.addNewUser=false;
        $scope.show = {
            fName:"",
            lName:"",
            lang:"",
            email:"",
            account:"",
            role:""
        };
    }

    });

