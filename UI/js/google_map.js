let pickup = document.getElementById('pickup');
let destination = document.getElementById('destination');
let googleMap = document.getElementById('google-map2');

const toggleMap = (event) => {
    if (event.target === pickup || event.target === destination && googleMap.style.display === 'none') {
        googleMap.style.display = 'block'; 
    } else {
        googleMap.style.display = 'none'; 
    }
  };
  pickup.addEventListener('click', toggleMap);
  destination.addEventListener('click', toggleMap);

function initMap()  {
    // Map Options
const options = {
    zoom: 8,
    center:{lat:6.465422, lng:3.406448}
}
// New Map
let map = new google.maps.Map(googleMap, options);
let icon = {
    url: './img/pickup.png', // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};

addMaker({lat:6.601838, lng:3.351486}, icon);
// Add marker
function addMaker(coords, icon) {
    var marker = new google.maps.Marker({
        position:coords,
        map:map,
        icon: icon
        // "http://i64.tinypic.com/5cg3gp.png width='10px'"  //Pickup
        // http://i63.tinypic.com/8yyuqf.png  Destination
    });
    let infoWindow = new google.maps.InfoWindow({
        content:`<h1>Pickup</h1>`
    });
    marker.addEventListner('click', function(){
 infoWindow.open(map, marker);
    });
}
}





