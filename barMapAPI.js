function initialize() {
  var mapOptions = {
    center: {
      lat: 39.9557687,
      lng: -75.6002199
    },
    zoom: 15
  };

  var map0 = new google.maps.Map(document.getElementById('map-canvas0'),
    mapOptions);


  var levanteInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href="http://www.levantebrewing.com/" target="blank">Levante Brewing</h1></a>' +
      '<p1 class = "paragraph"> 208 CARTER DR SUITE 2 WEST CHESTER, PA 19382</p1>' +
      '<br> </br>' +
      '<p2 class = "paragraph"> Levante Brewing is a little outside of town but that\'s what makes it unique. Levante offers a cool/hip vibe with its garage-like structure.</p2>' +
      '<p3 class = "paragraph"> Levante has a unique, local selection of brews to enjoy while you play Jenga or enjoy the outdoor seating.</p3>' +
      '</div>'
  });

  var barnsInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href=http://www.barnabyswestchester.com/" target="blank">Barnaby\'s West Chester</h1></a>' +
      '<p1 class = "paragraph"> 15 S HIGH ST WEST CHESTER, PA 19382</p1>' +
      '<br> </br>' +
      '<p2 class = "paragraph"> Barnaby\'s is a great American Restuarant/Bar in town. It\'s a good place to start your night out as they have an outside bar and 3 other bars inside.</p2>' +
      '</div>'
  });

  var kildaresInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href=http://www.kildarespubwc.com/" target="blank">Kildares Irish Pub - West Chester, PA</h1></a>' +
      '<p1 class = "paragraph"> 18 W GAY ST WEST CHESTER, PA 19380</p1>' +
      '<br> </br>' +
      '<p2 class = "paragraph"> Kildares turns into a dark, sweaty, loud nightclub on the weekends. They usually charge a $2 entry fee which gets you access to long bathroom lines, a gross dance floor, and 2 bar areas. </p2>' +
      '<p3 class = "paragraph"> Just kidding, I love Kildares.</p3>' +
      '</div>'
  });

  var ryansInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href=http://ryans-pub.com/" target="blank">Ryan\'s Pub</h1></a>' +
      '<p1 class = "paragraph"> 124 W GAY ST WEST CHESTER, PA 19380</p1>' +
      '<br> </br>' +
      '<p2 class = "paragraph"> Ryan\'s Pub is a homey, fan favorite pub in town. The classic Irish pub offers exceptional food and an upstairs and downstairs bar.</p2>' +
      '<p3 class = "paragraph"> To me, Ryan\'s Pub seemed like an "upperclassmen\'s bar" for a more mature crowd.</p3>' +
      '</div>'
  });

  var ironHillInfo = new google.maps.InfoWindow({
    content: '<div id="infobox">' +
      '<h1 class="title"><a href=https://www.ironhillbrewery.com/west-chester-pa" target="blank">Iron Hill Brewery & Restaurant</h1></a>' +
      '<p1 class = "paragraph"> 3 W GAY ST WEST CHESTER, PA 19380</p1>' +
      '<br> </br>' +
      '<p2 class = "paragraph"> Iron Hill is a chain brewery/restaurant but I had to include their West Chester location to my list of favorite bars/breweries.</p2>' +
      '<p3 class = "paragraph"> Iron Hill has delicious food as well as fancy craft brews. Their interior and design is excellent and modern, creating a great experience.</p3>' +
      '</div>'
  });

  var levante = new google.maps.Marker({
    position: {
      lat: 39.949023,
      lng: -75.587938
    },
    map: map0,
    title: 'Levante Brewing'
  });

  var barnabys = new google.maps.Marker({
    position: {
      lat: 39.959451,
      lng: -75.604017
    },
    map: map0,
    title: 'Barnaby\'s West Chester'
  });

  var kildares = new google.maps.Marker({
    position: {
      lat: 39.960126,
      lng: -75.605655
    },
    map: map0,
    title: 'Kildares Irish Pub - West Chester, PA'
  });

  var ryans = new google.maps.Marker({
    position: {
      lat: 39.959566,
      lng: -75.606840
    },
    map: map0,
    title: 'Ryan\'s Pub'
  });

  var ironHill = new google.maps.Marker({
    position: {
      lat: 39.960514,
      lng: -75.605486
    },
    map: map0,
    title: 'Iron Hill Brewery & Restaurant'
  });

  google.maps.event.addListener(levante, 'click', function() {
    levanteClicked();
  });

  google.maps.event.addListener(barnabys, 'click', function() {
    barnsClicked();
  });

  google.maps.event.addListener(kildares, 'click', function() {
    kildaresClicked();
  });

  google.maps.event.addListener(ryans, 'click', function() {
    ryansClicked();
  });

  google.maps.event.addListener(ironHill, 'click', function() {
    ironHillClicked();
  });

  function levanteClicked() {
    map0.panTo(levante.getPosition());
    levanteInfo.open(map0, levante);
  }

  function barnsClicked() {
    map0.panTo(barnabys.getPosition());
    barnsInfo.open(map0, barnabys);
  }

  function kildaresClicked() {
    map0.panTo(kildares.getPosition());
    kildaresInfo.open(map0, kildares);
  }

  function ryansClicked() {
    map0.panTo(ryans.getPosition());
    ryansInfo.open(map0, ryans);
  }

  function ironHillClicked() {
    map0.panTo(ironHill.getPosition());
    ironHillInfo.open(map0, ironHill);
  }

}
google.maps.event.addDomListener(window, 'load', initialize);