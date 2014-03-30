
		var center =new google.maps.LatLng(30.284085,-97.722790);
		var w=new google.maps.LatLng(30.283709,-97.751842);
		var x=new google.maps.LatLng(30.278520,-97.730470);
		var y=new google.maps.LatLng(30.286599,-97.725320);
		var z=new google.maps.LatLng(30.295493,-97.742701);
		
		function initialize()
		{
		var mapProp = {
		  center:center,
		  zoom:14,
		  scaleControl: false,
		  scrollwheel: false,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		  };
		  
		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
		
		var all = [
		    new google.maps.LatLng(29.140167, -101),
		    new google.maps.LatLng(32.392718, -100.9863),
		    new google.maps.LatLng(32.466902, -94.174805),
		    new google.maps.LatLng(28.568844, -94.394531)];
  
		var border= [new google.maps.LatLng(30.2933, -97.7418),new google.maps.LatLng(30.29365, -97.74720),new google.maps.LatLng(30.29327, -97.74698),new google.maps.LatLng(30.29274, -97.74703),new google.maps.LatLng(30.29228, -97.74740),new google.maps.LatLng(30.29212, -97.74760),new google.maps.LatLng(30.29153, -97.75061),new google.maps.LatLng(30.29117, -97.75103),new google.maps.LatLng(30.29063, -97.75147),new google.maps.LatLng(30.28979, -97.75216),new google.maps.LatLng(30.28905, -97.75259),new google.maps.LatLng(30.28854, -97.75278),new google.maps.LatLng(30.28673, -97.75319),new google.maps.LatLng(30.28640, -97.75321),new google.maps.LatLng(30.28558, -97.75318),new google.maps.LatLng(30.28530, -97.75312),new google.maps.LatLng(30.28483, -97.75294),new google.maps.LatLng(30.28432, -97.75263),new google.maps.LatLng(30.28377, -97.75226),new google.maps.LatLng(30.28377, -97.75170),new google.maps.LatLng(30.28379, -97.75135),new google.maps.LatLng(30.28395, -97.75004),new google.maps.LatLng(30.28388, -97.74945),new google.maps.LatLng(30.28351, -97.74827),new google.maps.LatLng(30.27970, -97.73450),new google.maps.LatLng(30.27585, -97.73601),new google.maps.LatLng(30.27459, -97.73182),new google.maps.LatLng(30.278554,-97.730493),new google.maps.LatLng(30.28325, -97.72791),new google.maps.LatLng(30.28718, -97.726761),new google.maps.LatLng(30.28835, -97.72903),new google.maps.LatLng(30.28907, -97.72997),new google.maps.LatLng(30.28933, -97.73124),new google.maps.LatLng(30.28921, -97.73272),new google.maps.LatLng(30.28949, -97.73322),new google.maps.LatLng(30.29005, -97.73446),new google.maps.LatLng(30.29064, -97.73454),new google.maps.LatLng(30.29124, -97.73492),new google.maps.LatLng(30.29172, -97.73533),new google.maps.LatLng(30.29215, -97.73576),new google.maps.LatLng(30.29240, -97.73591),new google.maps.LatLng(30.29267, -97.73597),new google.maps.LatLng(30.29315, -97.73602),new google.maps.LatLng(30.29432, -97.73745),new google.maps.LatLng(30.29605, -97.74110),new google.maps.LatLng(30.29429, -97.74227)];
		
		
		var coverage=new google.maps.Polygon({
			paths: [all, border],
		    strokeColor: "#c2c009",
		    strokeOpacity: 0.8,
		    strokeWeight: 2,
		    fillColor: "#586784",
		    fillOpacity: 0.5
		  });
		
		coverage.setMap(map);
		}
	
		google.maps.event.addDomListener(window, 'load', initialize);