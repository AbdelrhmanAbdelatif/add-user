var myApp = angular.module('myApp' , [ ]);

myApp.controller('storeController', function MyController($scope){
    $scope.show = {
        fName:"",
        lName:"",
        lang:"",
        email:"",
        account:"False",
        role:""
    };
    $scope.users = [];
    $scope.addNewUser=false;
    $scope.edit_mode=false;

    $scope.save = function(){
        if($scope.edit_mode==false){
            var user = angular.copy($scope.show);
            $scope.users.push(user);    
        }
        $scope.reset();
    }

    $scope.edit=function(user){
        $scope.show=user;
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
            account:"False",
            role:""
        };
    }

    });

