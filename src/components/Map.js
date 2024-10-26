// src/components/Map.js
/*
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px' // Adjust height as needed
};

const center = {
  lat: 13.0572, // Replace with your clinic's latitude
  lng: 80.2342 // Replace with your clinic's longitude
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBns4y9Iyg25M6_90fZKeeRWD7YVpeJlHs">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} // Adjust zoom level as needed
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
*/

/*
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [10.662811993208765, 77.01072816547148]; 

const Map = () => {
  return (
    <MapContainer center={position} zoom={15} style={{ height: '400px', width: '50%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          AVANI-CLINIC
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
*/

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Map.css';

const position = [10.662811993208765, 77.01072816547148];

// Define the custom location icon
const customIcon = L.icon({
  iconUrl:'/image/location.png', // Location pin image
  iconSize: [68, 68], // Adjust icon size
  iconAnchor: [29, 58], // Position the icon correctly
  popupAnchor: [0, -38], // Position the popup relative to the icon
});

const Map = () => {
  return (
    <MapContainer id="map-container" center={position} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          Avani Clinic, Pollachi.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
