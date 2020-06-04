function initialize() {
  var mapOptions = {
    center: {
      lat: 39.9597762,
      lng: -75.6052218
    },
    zoom: 17
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);


  var bonBonInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href="https://bonbonsushi.com" target="blank">Bon Bon Sushi</h1></a>' +
      '<p1 class = "paragraph"> 22 N DARLINGTON ST WEST CHESTER, PA 19380</p1>' +
      ' <br> </br>' +
      '<p2 class = "paragraph"> Bon Bon Sushi is my all time favorite place in town for sushi. I really enjoy their original sushi burritos</p2>' +
      '</div>'
  });

  var masInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href="https://www.masmexicali.com/" target="blank">Más Mexicali Cantina</h1></a> ' +
      '<p1 class = "paragraph"> 102 E MARKET ST WEST CHESTER, PA 19382</p1>' +
      ' <br> </br>' +
      '<p2 class = "paragraph"> Más is a great Mexican restaurant/bar. It\'s one of my favorite places for great Mexican cuisine. You can take a virtual tour on their website to see the different floors and the rooftop bar.</p2>' +
      '</div>'
  });

  var loveAgainInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href="https://loveagainlocal.com" target="blank">Love Again Local</h1></a>' +
      '<p1 class = "paragraph"> 18 S CHURCH ST WEST CHESTER, PA 19382</p1>' +
      ' <br> </br>' +
      '<p2 class = "paragraph"> Love Again Local is a great place for a quality sandwich for lunch/brunch. Love Again Local offers vegan and vegetarian options.</p2>' +
      '</div>'
  });

  var diaDoceInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href="https://diadoce.com" target="blank">Dia Doce Gourmet Cupcakes</h1></a>' +
      '<p1 class = "paragraph"> 100 S HIGH ST WEST CHESTER, PA 19382</p1>' +
      ' <br> </br>' +
      '<p2 class = "paragraph"> Dia Doce Gourmet Cupcakes bakes the most ridiculously delicious cupcakes I\'ve ever eaten. They have a weekly and seasonal flavor rotation as well as classic flavors.</p2>' +
      '</div>'
  });

  var tlaxkalliInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href="http://www.tlaxkallipa.site/" target="blank">Tlaxkalli</h1></a>' +
      '<p1 class = "paragraph"> 346-348 W GAY ST WEST CHESTER, PA 19380</p1>' +
      ' <br> </br>' +
      '<p2 class = "paragraph"> This is a second Mexcian restaurant, but I had to include it in my list of favorites. The quality and deliciousness of Tlaxkalli\'s food is unmatched. It is by far my favorite place to get a fantastic meal for a great price.</p2>' +
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

  var tlaxkalli = new google.maps.Marker({
    position: {
      lat: 39.957947,
      lng: -75.610827
    },
    map: map,
    title: 'Tlaxkalli'
  });

  google.maps.event.addListener(bonBon, 'click', function() {
    bonBonClicked();
  });

  google.maps.event.addListener(mas, 'click', function() {
    masClicked();
  });

  google.maps.event.addListener(loveAgain, 'click', function() {
    loveAgainClicked();
  });

  google.maps.event.addListener(diaDoce, 'click', function() {
    diaDoceClicked();
  });

  google.maps.event.addListener(tlaxkalli, 'click', function() {
    tlaxkalliClicked();
  });

  function bonBonClicked() {
    map.panTo(bonBon.getPosition());
    bonBonInfo.open(map, bonBon);
  }

  function masClicked() {
    map.panTo(mas.getPosition());
    masInfo.open(map, mas);
  }

  function loveAgainClicked() {
    map.panTo(loveAgain.getPosition());
    loveAgainInfo.open(map, loveAgain);
  }

  function diaDoceClicked() {
    map.panTo(diaDoce.getPosition());
    diaDoceInfo.open(map, diaDoce);
  }

  function tlaxkalliClicked() {
    map.panTo(tlaxkalli.getPosition());
    tlaxkalliInfo.open(map, tlaxkalli);
  }

}
google.maps.event.addDomListener(window, 'load', initialize);