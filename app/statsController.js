app.controller('statsController', function($scope, $http, $location) {

    $http.get('/myStats'). // They should store information with regards to the user in the session, so use that to figure out which one it is
          then(function(response) {
            // this callback will be called asynchronously
            $scope.data = response.data
          }, function(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            
          });
});
