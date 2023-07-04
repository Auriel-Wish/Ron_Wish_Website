function initMap() {
    const home = { lat: 41.10027175580299, lng: -73.91951720933578 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: home,
    });
    const marker = new google.maps.Marker({
        position: home,
        map: map,
    });
}

window.initMap = initMap;