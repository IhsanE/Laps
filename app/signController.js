app.controller('signController', function($scope, $http, $location) {
    $scope.isRegister = false;

    $scope.registerToggle = function(){
        $scope.isRegister = $scope.isRegister ? false : true;
    }

    $scope.login = function(){
        var data = {
            username : $scope.username,
            password : $scope.password
        };
        $http.post('/login', data).
          then(function(response) {
            // this callback will be called asynchronously
            // when the response is available
            if (response.verified)
                $location.path("/home");

          }, function(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(error);
          });
    }

    $scope.register = function(){
        var data = {
            username : $scope.username,
            password : $scope.password,
            car      : $scope.car-brand
        };
        $http.post('/register', data).
          then(function(response) {
            // this callback will be called asynchronously
            // when the response is available
            if (response.verified)
                $location.path("/home");

          }, function(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(error);
          });
    }
});
