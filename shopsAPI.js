function initialize() {
  var mapOptions = {
    center: {
      lat: 39.9584529,
      lng: -75.6069638
    },
    zoom: 15
  };

  var map2 = new google.maps.Map(document.getElementById('map-canvas2'),
    mapOptions);


  var fairmansInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href="https://www.fairmans.com/" target="blank">Fairman\'s</h1></a>' +
      '<p1 class = "paragraph"> 43 W GAY ST WEST CHESTER, PA 19380</p1>' +
      '<br> </br>' +
      '<p2 class = "paragraph"> Fairman\'s is a cool shop in town that sells a variety of skate hardware and apparel. It\'s a nice local shop that name brands as well as their own brand.</p2>' +
      '</div>'
  });

  var gSpotInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href="https://the-g-spot-thrift-boutique.business.site/" target="blank">The G Spot Modern Retro Thrift</h1></a>' +
      '<p1 class = "paragraph"> 144 E MARKET ST WEST CHESTER, PA 19382</p1>' +
      '<br> </br>' +
      '<p2 class = "paragraph"> The G Spot Modern Retro Thrift  is a neat thrift store that carries anything from used vintage/designer clothes to home decor and collectables.</p2>' +
      '<p3 class = "paragraph"> Very fun to stop by because you don\'t know what you might find.</p3>' +
      '</div>'
  });

  var musicInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href="https://www.westchestermusicstore.com/" target="blank">West Chester Music Store</h1></a>' +
      '<p1 class = "paragraph"> 310 S HIGH ST WEST CHESTER, PA 19382</p1>' +
      '<br> </br>' +
      '<p2 class = "paragraph"> The West Chester Music Store is one of my favorite shops to go to as a guitar player.</p2>' +
      '<p3 class = "paragraph"> They have a unique selection of guitars, amplifiers, and other instruments. I purchase my guitar strings here frequently to support local business.</p3>' +
      '</div>'
  });



  var fairmans = new google.maps.Marker({
    position: {
      lat: 39.960136,
      lng: -75.606448
    },
    map: map2,
    title: 'Fairman\'s'
  });

  var gSpot = new google.maps.Marker({
    position: {
      lat: 39.960833,
      lng: -75.601780
    },
    map: map2,
    title: 'The G Spot Modern Retro Thrift'
  });

  var music = new google.maps.Marker({
    position: {
      lat: 39.956934,
      lng: -75.601791
    },
    map: map2,
    title: 'West Chester Music Store'
  });

  google.maps.event.addListener(fairmans, 'click', function() {
    fairmansClicked();
  });

  google.maps.event.addListener(gSpot, 'click', function() {
    gSpotClicked();
  });

  google.maps.event.addListener(music, 'click', function() {
    musicClicked();
  });

  function fairmansClicked() {
    map2.panTo(fairmans.getPosition());
    fairmansInfo.open(map2, fairmans);
  }

  function gSpotClicked() {
    map2.panTo(gSpot.getPosition());
    gSpotInfo.open(map2, gSpot);
  }

  function musicClicked() {
    map2.panTo(music.getPosition());
    musicInfo.open(map2, music);
  }
}
google.maps.event.addDomListener(window, 'load', initialize);