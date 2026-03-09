import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import SeeFactsheetButton from '../buttons/SeeFactsheetButton'
import ExploreMapButton from '../buttons/ExploreMapButton'
import { WOMEN_MARKERS } from '../data/women'
import MermaidImage from '../assets/Mermaid.webp'
import { markerIcon } from '../utils/mapMarkerIcon'

const DEFAULT_CENTER = [-1.4558, -48.4902] 
const DEFAULT_ZOOM = 12

export default function Map({ embedded = false, embedOnlyMap = false, mapHeight = '70vh' }) {
  const titleBlock = (
    <>
      <h1 className="text-4xl font-bold font-display mb-4">
        Explorar <span className="text-secondary">mapa</span>
      </h1>
      <p className="text-lg mb-6">
        Mapa interactivo del proyecto Iyá Oromiô.
      </p>
    </>
  )

  const mapBlock = (
    <div
      className="w-full rounded-xl overflow-hidden shadow-lg"
      style={{ height: mapHeight }}
    >
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {WOMEN_MARKERS.map((woman) => (
          <Marker
            key={woman.id}
            position={[woman.position.lat, woman.position.lng]}
            icon={markerIcon}
          >
            <Popup>
              <div className="space-y-2 max-w-xs bg-white text-neutral-800 rounded p-1">
                <img
                  src={MermaidImage}
                  alt={woman.name}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
                <h3 className="font-semibold">{woman.name}</h3>
                <p className="text-sm">{woman.shortDescription}</p>
                <SeeFactsheetButton to={`/women/${woman.id}`} />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )

  if (embedded && embedOnlyMap) {
    return mapBlock
  }

  if (embedded) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold font-display mb-4">
              Explorar <span className="text-secondary">mapa</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Mapa interactivo del proyecto Iyá Oromiô.
            </p>
          </div>
          <div className="mb-6">
            {mapBlock}
          </div>
          <div className="flex justify-center">
            <ExploreMapButton />
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        {titleBlock}
      </div>
      <div className="px-4 pb-16">
        {mapBlock}
      </div>
    </>
  )
}
