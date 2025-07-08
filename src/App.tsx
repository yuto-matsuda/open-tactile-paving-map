import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const initPos: LatLngExpression = [34.666536, 133.918078];  // Okayama Sta.

const positions = [
  [34.689774, 133.923262],
  [34.689852, 133.923231],
  [34.68987,  133.923259],
  [34.689666, 133.923429],
  [34.68952,  133.923465],
  [34.68933,  133.923438],
  [34.689271, 133.923248],
  [34.689235, 133.922947],
  [34.689227, 133.922676],
  [34.689226, 133.9224],
  [34.689231, 133.922149],
  [34.689226, 133.921877],
  [34.689227, 133.921644],
  [34.68923,  133.921508],
  [34.689235, 133.921506],
  [34.689233, 133.921509],
  [34.68923,  133.921511],
  [34.689234, 133.921505],
  [34.689228, 133.921768],
  [34.689247, 133.922324],
  [34.689236, 133.923203],
  [34.689744, 133.923408],
  [34.689838, 133.923334],
];

export default function App() {
  return (
    <>
      <MapContainer center={initPos} zoom={13} style={{ height: "100vh" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {positions.map((pos, i) => (
        <Marker key={i} position={[pos[0], pos[1]]}>
          <Popup>
            {pos[0]}, {pos[1]}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </>
  )
}