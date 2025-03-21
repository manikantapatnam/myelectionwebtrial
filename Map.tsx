"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon in Leaflet
const icon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

interface District {
  id: number;
  name: string;
  coordinates: [number, number];
}

interface MapProps {
  districts: District[];
}

export default function Map({ districts }: MapProps) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {districts.map((district) => (
        <Marker
          key={district.id}
          position={district.coordinates}
          icon={icon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold">{district.name}</h3>
              <p className="text-sm text-muted-foreground">Click for detailed results</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}