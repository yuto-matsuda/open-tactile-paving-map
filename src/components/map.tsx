import styles from '../styles/components/map.module.scss'
import { useEffect, useState } from 'react'
import { getJPDateTime } from '../utils/datetime'
import type { Pavement } from '../types/pavement'
import { supabase } from '../libs/supabaseClient'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map() {
  const [pavements, setPavements] = useState<Pavement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await supabase
        .from('pavement')
        .select('id, camera_timestamp, latitude, longitude, image_url')
        .eq('has_tactile_paving', true);

      const { data, error } = res as {
        data:  Pavement[]
        error: any
      };

      if (error) {
        console.error(error)
      } else if (data) {
        setPavements(data)
      }
    }

    fetchData();
  }, [])

  useEffect(() => {
    console.log(pavements)
  }, [pavements])

  const initPos: LatLngExpression = [34.666536, 133.918078];  // Okayama Sta.

  return (
    <>
      <MapContainer center={initPos} zoom={13} className={styles.map}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; OpenStreetMap contributors'
        />
        {pavements.map(({ id, camera_timestamp, latitude, longitude, image_url }) => (
          <Marker key={id} position={[latitude, longitude]}>
            <Popup className={styles.popup}>
              <div className={styles.content}>
                <img src={image_url} width='150' alt='photo' className={styles.img} />
                <div className={styles.date}>
                  <span className={styles.heading}>Captured At:</span>
                  <p className={styles.timestamp}>{getJPDateTime(camera_timestamp)}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  )
}