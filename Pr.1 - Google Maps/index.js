//iniciar el mapa
function Inicializar() {
    var mapOptions = {
        // Zoom al inicio del punto en el mapa
        zoom: 10,
        // Coordenadas iniciales Estadio Nacional - Lima
        center: new google.maps.LatLng(-12.067426, -77.033772),
        // Tipo de mapa (ROADMAP, SATELLITE, HYBRID, TERRAIN)
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Minimo zoom al mapa
        minZoom: 2
    };

    //crear el nuevo mapa instanciado usando las opciones
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //crear un display con info de la ubicación
    var infoWindow = new google.maps.InfoWindow();

    //crear un marcador 
    var marker = new google.maps.Marker({
        // Cordenadas para estadio La Bombonera, Buenos Aires
        position: new google.maps.LatLng(-34.636062, -58.363964),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Buenos Aires, Estadio la Bombonera'
    });

    // Evento click para el marcador
    marker.addListener('click', function () {
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
    });

    // Ajuste al centro del mapa
    google.maps.event.addDomListener(window, "resize", function () {
        map.setCenter(mapOptions.center);
    });


}

 //inicializar el mapa cuando pantalla de carga termine
 google.maps.event.addDomListener(window, 'load', Inicializar);