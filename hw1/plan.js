// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru11 = {lat: -25.344, lng: 131.036};
  var uluru12 = {lat: -24.344, lng: 131.036};
  var uluru13 = {lat: -25.344, lng: 133.036};
  var uluru14 = {lat: -23.344, lng: 133.036};
  var test={uluru11,uluru12,uluru13,uluru14};
  console.log(test);
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru11});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru11, map: map});
  var marker1 = new google.maps.Marker({position: uluru12, map: map});
  var marker2 = new google.maps.Marker({position: uluru13, map: map});
  var marker3 = new google.maps.Marker({position: uluru14, map: map});
  var infoWindow = new google.maps.InfoWindow;
  var avlat=0,avlng=0;
  avlat=uluru11.lat+uluru12.lat+uluru13.lat+uluru14.lat
  avlng=uluru11.lng+uluru12.lng+uluru13.lng+uluru14.lng
  avlat/=4;
  avlng/=4;
  var cen={lat: avlat,lng : avlng};
  var markerC = new google.maps.Marker({position: cen, map: map,label:'中心點'});
  map.setCenter(cen);
  map.setZoom(6);
/*if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
			console.log(pos);
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
			map.setZoom(20);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }*/
  var firebaseConfig = {
    apiKey: "AIzaSyDwJjp2trrq11ug8AM6Gx05Ls-Xxk4fGNs",
    authDomain: "my-project-1511251845749.firebaseapp.com",
    databaseURL: "https://my-project-1511251845749.firebaseio.com",
    projectId: "my-project-1511251845749",
    storageBucket: "my-project-1511251845749.appspot.com",
    messagingSenderId: "480774795173",
    appId: "1:480774795173:web:cad0bb45852adcc51c024c"
  };
  firebase.initializeApp(firebaseConfig);
}
function codeAddress(){

  console.log('get data');
  // Your web app's Firebase configuration
  var db = firebase.firestore();
  var ref = db.collection('jeff');
  ref.get().then(querySnapshot => {
	querySnapshot.forEach(doc => {
		console.log(doc.id, doc.data());
	});
  });

}

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
