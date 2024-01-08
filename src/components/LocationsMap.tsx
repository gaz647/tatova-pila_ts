import "./LocationsMap.css";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
const mapId = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_MAP_ID;

const LocationsMap = () => {
  const position = {
    center: {
      lat: 49.849941882186435,
      lng: 16.309680629542928,
    },
    ceskaTrebova: {
      lat: 49.90041282691694,
      lng: 16.44559143341741,
    },
    svitavy: {
      lat: 49.75379571340725,
      lng: 16.46756408794071,
    },
    ustiNadOrlici: {
      lat: 49.97951614753338,
      lng: 16.398899542555395,
    },
    trebovice: {
      lat: 49.85749251333705,
      lng: 16.501896360633364,
    },
    vysokeMyto: {
      lat: 49.95124831233347,
      lng: 16.159260279160655,
    },
    jimramov: {
      lat: 49.63658900344888,
      lng: 16.226325795640726,
    },
    breziny: {
      lat: 49.68940799608401,
      lng: 16.116182483534402,
    },
    borova: {
      lat: 49.74098728821695,
      lng: 16.16082528777683,
    },
    prosec: {
      lat: 49.80573862294738,
      lng: 16.116182483534402,
    },
  };

  return (
    <APIProvider apiKey={apiKey}>
      <div className="locations-map-container slide-in-bottom-location-map">
        <Map
          center={position.center}
          zoom={9}
          mapId={mapId}
          disableDefaultUI={true}
          gestureHandling={"none"}
        >
          <Marker position={position.ceskaTrebova} />
          <Marker position={position.svitavy} />
          <Marker position={position.ustiNadOrlici} />
          <Marker position={position.trebovice} />
          <Marker position={position.vysokeMyto} />
          <Marker position={position.jimramov} />
          <Marker position={position.breziny} />
          <Marker position={position.borova} />
          <Marker position={position.prosec} />
        </Map>
      </div>
    </APIProvider>
  );
};

export default LocationsMap;
