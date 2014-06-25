
$(document).ready(function(){

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(37.160317, -29.53125),
      zoom: 3
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    console.log(map);

    var pins = [];
    $.get('/pins.json').done(function(data) {
      pins = data
      $.each(pins, function(index, item){
        addPin(item.latitude, item.longitude, item.caption);
      });
    });

    var addPin = function(lat, long, name){
      if(lat && long)
      {	
	      var loc = new google.maps.LatLng(lat, long);
	      var newMarker = new google.maps.Marker({
	        position: loc,
	        map: map,
	        title: name
	      });

	      var newInfoWindow = new google.maps.InfoWindow({
	        content: "<h3>" + name + "</h3>"
	      });
	      addInfoWindowListener(newMarker, newInfoWindow);
	  }
    };

    var placeMarker = function(loc){
      var newMarker = new google.maps.Marker({
        position: loc,
        map: map,
        title: "BLAH"
      });
    };

    var lastInfoWindow;
    var addInfoWindowListener = function(marker, newInfoWindow){
      google.maps.event.addListener(marker, 'click', function() {
        if(!!lastInfoWindow){
          lastInfoWindow.close();
        }
        if(lastInfoWindow === newInfoWindow){
          lastInfoWindow = null;
        }
        else {
          newInfoWindow.open(map,this);
          lastInfoWindow = newInfoWindow;
        }
      });
    }
	function resize_map()
	{
	 	google.maps.event.trigger(map, 'resize');
	}
  	google.maps.event.addDomListener(window, 'resize', resize_map);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
});