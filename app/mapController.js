app.controller('mapController', function($scope, $http, $location) {
    var myLatlng = new google.maps.LatLng(43.578002999999995,  -79.657339);
    navigator.geolocation.watchPosition(showPosition);
    function showPosition(position) {
     myLatlng = new google.maps.LatLng(position.coords.latitude , position.coords.longitude);
    console.log(myLatlng);  
    initialize();
    }
    function initialize() {
      
      var mapOptions = {
        zoom: 15,
        center: myLatlng
      }
      var map = new google.maps.Map(document.getElementById('map'), mapOptions);

      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Hello World!'
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});
