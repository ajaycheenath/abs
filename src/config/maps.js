import { setGobalVariable, getGobalVariable, log } from "./Utils";
window.address = "Bangalore";
export function showMap (_address) {
  window.address = _address;

  if (typeof google === 'object' && typeof google.maps === 'object') {
    console.log("1>>>>>google", google);
    window.initialize();
  } else if(getGobalVariable("mapLoaded")) {
    window.initialize();
  } else {
    setTimeout(function() {
      var scriptTag = document.createElement('script');
      scriptTag.src = "http://maps.google.com/maps/api/js?key=AIzaSyBLce1-kGR1IwfPczbiNNIkrmiFlZ9iHzM&sensor=false&callback=initialize"; // set the src attribute
      scriptTag.type = 'text/javascript'; // if you have an HTML5 website you may want to comment this line out
      scriptTag.async = true; // the HTML5 async attribute
      var headTag = document.getElementsByTagName('head')[0];
      headTag.appendChild(scriptTag);
    }, 0);
  }
  return false;
}


window.initialize = function() {
  setGobalVariable("mapLoaded", true);
  const address = window.address;
  console.log("2>>>>>>>>>>>window.address", window.address);
  var geocoder = geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), myOptions);
  if (geocoder) {
    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          map.setCenter(results[0].geometry.location);

          var infowindow = new google.maps.InfoWindow({
            content: '<b>' + address + '</b>',
            size: new google.maps.Size(150, 50)
          });

          var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            title: address
          });
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
          });

        } else {
          log("Coudnt find location map for address "+address);
        }
      } else {
        log("Geocode was not successful for the following reason: " + address);
      }
    });
  }
}
