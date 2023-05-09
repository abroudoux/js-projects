console.log('Fichier ISS chargé');


const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";


async function getISS() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const { latitude, longitude, altitude } = data;

    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;    
    document.getElementById('alt').textContent = altitude;    
}


getISS();