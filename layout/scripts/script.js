//Javascript for hover in the places
//desc1
document.getElementById("desc1").onmouseover = function() {mouseOver()};
document.getElementById("desc1").onmouseout = function() {mouseOut()};


function mouseOver() {
   
  document.getElementById("desc1").style.color = "#126e82";
  document.getElementById("desc1").style.fontSize = "x-large";
}

function mouseOut() {
  document.getElementById("desc1").style.color = "black";
  document.getElementById("desc1").style.fontSize = "small";
}

//desc 2
document.getElementById("desc2").onmouseover = function() {mouseOver2()};
document.getElementById("desc2").onmouseout = function() {mouseOut2()};


function mouseOver2() {
   
  document.getElementById("desc2").style.color = "#126e82";
  document.getElementById("desc2").style.fontSize = "x-large";
}

function mouseOut2() {
  document.getElementById("desc2").style.color = "black";
  document.getElementById("desc2").style.fontSize = "small";
}

//desc3
document.getElementById("desc3").onmouseover = function() {mouseOver3()};
document.getElementById("desc3").onmouseout = function() {mouseOut3()};


function mouseOver3() {
   
  document.getElementById("desc3").style.color = "#126e82";
  document.getElementById("desc3").style.fontSize = "x-large";
}

function mouseOut3() {
  document.getElementById("desc3").style.color = "black";
  document.getElementById("desc3").style.fontSize = "small";
}

//desc4
document.getElementById("desc4").onmouseover = function() {mouseOver4()};
document.getElementById("desc4").onmouseout = function() {mouseOut4()};


function mouseOver4() {
   
  document.getElementById("desc4").style.color = "#126e82";
  document.getElementById("desc4").style.fontSize = "x-large";
}

function mouseOut4() {
  document.getElementById("desc4").style.color = "black";
  document.getElementById("desc4").style.fontSize = "small";
}



//Javascript for displaying reviews
function reviewbox1() {
  var x = document.getElementById("hidden-content1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function reviewbox2() {
  var x = document.getElementById("hidden-content2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function reviewbox3() {
  var x = document.getElementById("hidden-content3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function reviewbox4() {
  var x = document.getElementById("hidden-content4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//Javascript for google map -- without api key (Dont have the billing account, so no API key)
function myMap() {

  var mapProp= {
    center:new google.maps.LatLng(-6.548926 ,118.0148634),
    zoom:7,
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    rotateControl: true,  
  };
  var mapOptions2= {
    center:new google.maps.LatLng(7.0182, 107.2072),
    zoom:7,
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    rotateControl: true,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  
  var mapOptions3= {
    center:new google.maps.LatLng(-17.924444, 25.856667),
    zoom:7,
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    rotateControl: true,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var mapOptions4= {
    center:new google.maps.LatLng(22.179968, 113.537773),
    zoom:7,
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    rotateControl: true,
  };

  var map1 = new google.maps.Map(document.getElementById("googleMap1"),mapProp);
  var map2 = new google.maps.Map(document.getElementById("googleMap2"), mapOptions2);
  var map3 = new google.maps.Map(document.getElementById("googleMap3"), mapOptions3);
  var map4 = new google.maps.Map(document.getElementById("googleMap4"), mapOptions4);
  }
  
 

