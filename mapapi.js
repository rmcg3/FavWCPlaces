function initialize() {
  var mapOptions = {
    center: {
      lat: 39.9545904,
      lng: -75.6029956
    },
    zoom: 16
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);


  var bonBonInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1>Square One Bar</h1><h2>1400 S Michigan Ave</h2>' +
      'A great bar if you want to avoid the crowds.  ' +
      'It has a laid back atmosphere but a very welcoming staff.  ' +
      'It has great specials as well.' +
      '</div>'
  });

  var masInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title">My Home!</h1><h2>18th St & Michigan ave</h2>' +
      'This is where I live! Smack dab in the South Loop.  ' +
      'It\'s a fantastic neighborhood with bars and restaurants.  ' +
      'And if you happen to be a Bears fan, you\'re right next to Soldier Field.' +
      '</div>'
  });

  var loveAgainInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title">Dusek\'s Punch Bar</h1><h2>1227 W 18th Street</h2>' +
      'This is by far one of my absolute favorite place\'s in the entire city.  ' +
      'Underneath the Dusek\'s Restuarant is a hidden gem where they serve eclectic punch mixes.  ' +
      'The ambience is amazing, and the drinks are strong.  Take an Uber or a taxi if you\'re heading over.' +
      '</div>'
  });

  var diaDoceInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title">Mercer 113</h1><h2>113 W Hubbard Street</h2>' +
      'A bar/nightclub that is perfect for going out on a Friday or Saturday night.  ' +
      'It\'s not a posh club but you\'ll still feel like your at a nice upscale bar.  ' +
      'Get there before the line builds and you\'ll have a great night!' +
      '</div>'
  });

  var bonBon = new google.maps.Marker({
    position: {
      lat: 39.959006,
      lng: -75.607625
    },
    map: map,
    title: 'Bon Bon Sushi'
  });

  var mas = new google.maps.Marker({
    position: {
      lat: 39.960265,
      lng: -75.603004
    },
    map: map,
    title: 'Más Mexicali Cantina'
  });

  var loveAgain = new google.maps.Marker({
    position: {
      lat: 39.958445,
      lng: -75.605327
    },
    map: map,
    title: 'Love Again Local'
  });

  var diaDoce = new google.maps.Marker({
    position: {
      lat: 39.958586,
      lng: -75.603630
    },
    map: map,
    title: 'Dia Doce Gourmet Cupcakes'
  });

  google.maps.event.addListener(bonBon, 'click', function() {
    GuidedTour();
  });

  google.maps.event.addListener(mas, 'click', function() {
    GuidedTour();
  });

  google.maps.event.addListener(loveAgain, 'click', function() {
    GuidedTour();
  });

  google.maps.event.addListener(diaDoce, 'click', function() {
    GuidedTour();
  });

  function GuidedTour() {
    diaDoceInfo.close(map, loveAgain);
    map.panTo(mas.getPosition());
    masInfo.open(map, mas);
    window.setTimeout(function() {
      map.panTo(bonBon.getPosition());
      masInfo.close(map, mas);
      bonBonInfo.open(map, bonBon);
    }, 6000)
    window.setTimeout(function() {
      map.panTo(loveAgain.getPosition());
      bonBonInfo.close(map, bonBon);
      loveAgainInfo.open(map, loveAgain);
    }, 11000)
    window.setTimeout(function() {
      map.panTo(diaDoce.getPosition());
      loveAgainInfo.close(map, loveAgain);
      diaDoceInfo.open(map, diaDoce);
    }, 16000)
  }
}
google.maps.event.addDomListener(window, 'load', initialize);