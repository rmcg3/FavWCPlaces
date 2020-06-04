function initialize() {
  var mapOptions = {
    center: {
      lat: 39.9643397,
      lng: -75.6138835
    },
    zoom: 12
  };

  var map1 = new google.maps.Map(document.getElementById('map-canvas1'),
    mapOptions);


  var churchStGalInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href="http://www.churchstreetgallerywc.com/" target="blank">Church Street Gallery</h1></a>' +
      '<p1 class = "paragraph"> 12 S CHURCH ST WEST CHESTER, PA 19382</p1>' +
      '<br> </br>' +
      '<p2 class = "paragraph"> The Church Street Gallery is an art gallery that showcases different exhibitions of art from different artists. </p2>' +
      '<p3 class = "paragraph"> Each exhibition usually lasts for about 2 weeks.</p3>' +
      '</div>'
  });

  var americanInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href="http://americanhelicopter.museum/" target="blank">American Helicopter Museum & Education Center</h1></a>' +
      '<p1 class = "paragraph"> 1220 AMERICAN BLVD WEST CHESTER, PA 19380</p1>' +
      '<br> </br>' +
      '<p2 class = "paragraph"> The American Helicopter Museum & Education Center is a very cool museum with tons of aircrafts on display, flight simulations, and other fun activities/exhibits.</p2>' +
      '</div>'
  });

  var historicalInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href="http://www.chestercohistorical.org/" target="blank">Chester County Historical Society</h1></a>' +
      '<p1 class = "paragraph"> 225 N HIGH ST WEST CHESTER, PA 19380</p1>' +
      '<br> </br>' +
      '<p2 class = "paragraph"> The Chester County Historical Society is a neat place where the history of Chester County is preseverd.</p2>' +
      '<p3 class = "paragraph"> Like other galleries, they have a rotation of exhibits that showcase different parts of Chest County\'s history.</p3>' +
      '</div>'
  });


  var churchStGal = new google.maps.Marker({
    position: {
      lat: 39.958750,
      lng: -75.605494
    },
    map: map1,
    title: 'Church Street Gallery'
  });

  var american = new google.maps.Marker({
    position: {
      lat: 39.991859,
      lng: -75.578866
    },
    map: map1,
    title: 'American Helicopter Museum & Education Center'
  });

  var historical = new google.maps.Marker({
    position: {
      lat: 39.961893,
      lng: -75.606187
    },
    map: map1,
    title: 'Chester County Historical Society'
  });



  google.maps.event.addListener(churchStGal, 'click', function() {
    churchStGalClicked();
  });

  google.maps.event.addListener(american, 'click', function() {
    americanClicked();
  });

  google.maps.event.addListener(historical, 'click', function() {
    historicalClicked();
  });


  function churchStGalClicked() {
    map1.panTo(churchStGal.getPosition());
    churchStGalInfo.open(map1, churchStGal);

  }

  function americanClicked() {
    map1.panTo(american.getPosition());
    americanInfo.open(map1, american);
  }

  function historicalClicked() {
    map1.panTo(historical.getPosition());
    historicalInfo.open(map1, historical);
  }
}
google.maps.event.addDomListener(window, 'load', initialize);