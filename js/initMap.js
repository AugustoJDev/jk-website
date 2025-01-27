let map;

async function initMap() {
    const location = { lat: -9.575505, lng: -35.786795 };
    const { Map } = await google.maps.importLibrary("maps");

    const map = new Map(document.getElementById("map-jkdesigner"), {
        center: location,
        zoom: 17,
        zoomControl: true,
        mapTypeControl: true,
        streetViewControl: true,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'TrimTime'
    });
}

initMap();