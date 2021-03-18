  
function iniciarMap(){
    var coord = {lat:42.0551552, lng: -1.6163964};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
