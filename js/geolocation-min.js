function createCustomMap(){var e=new google.maps.LatLng(-41.272989,174.7864);var t={zoom:3,center:e};var n=new google.maps.Map(document.getElementById("custom-map"),t);if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(r){var i=new google.maps.LatLng(r.coords.latitude,r.coords.longitude);n.setCenter(i);var s=new google.maps.Marker({position:i,map:n,title:"You are here"});var o=new google.maps.DirectionsService;var u=new google.maps.DirectionsRenderer;u.setMap(n);var a={origin:i,destination:e,travelMode:google.maps.DirectionsTravelMode.DRIVING};o.route(a,function(e,t){if(t==google.maps.DirectionsStatus.OK){u.setDirections(e)}else{console.log("Could not get directions")}})})}}window.onload=createCustomMap