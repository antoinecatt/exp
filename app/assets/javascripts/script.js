
$(document).ready(function(){


$("#new_experience").on("submit", function (event) {
	event.preventDefault();
	console.log(event)
	$.ajax({
		url: "/experiences",
		method: "post",
		dataType: "json",
		data: {
			experience:{
			"caption": $('#experience_caption').val(),
			"description": $('#experience_description').val(),
			"address": $('#experience_address').val()}
			}
		}).success(function(data) {
			console.log(data);
			$.each(function(index, data){
				(data.latitude, data.longitude, data.caption)
			})
		});
	});

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(29.7601927, -95.3693896),
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