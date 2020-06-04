function initialize() {
  var mapOptions = {
    center: {
      lat: 39.9545904,
      lng: -75.6029956
    },
    zoom: 16
  };

  var map2 = new google.maps.Map(document.getElementById('map-canvas2'),
    mapOptions);


  var bonBonInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1>Square One Bar</h1><h2>1400 S Michigan Ave</h2>' +
      '</div>'
  });

  var masInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title">My Home!</h1><h2>18th St & Michigan ave</h2>' +
      '</div>'
  });

  var loveAgainInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title">Dusek\'s Punch Bar</h1><h2>1227 W 18th Street</h2>' +
      '</div>'
  });

  var diaDoceInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title">Mercer 113</h1><h2>113 W Hubbard Street</h2>' +
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
    diaDoceInfo.close(map2, loveAgain);
    map2.panTo(mas.getPosition());
    masInfo.open(map2, mas);
    window.setTimeout(function() {
      map2.panTo(bonBon.getPosition());
      masInfo.close(map2, mas);
      bonBonInfo.open(map2, bonBon);
    }, 6000)
    window.setTimeout(function() {
      map2.panTo(loveAgain.getPosition());
      bonBonInfo.close(map2, bonBon);
      loveAgainInfo.open(map2, loveAgain);
    }, 11000)
    window.setTimeout(function() {
      map2.panTo(diaDoce.getPosition());
      loveAgainInfo.close(map2, loveAgain);
      diaDoceInfo.open(map2, diaDoce);
    }, 16000)
  }
}
google.maps.event.addDomListener(window, 'load', initialize);