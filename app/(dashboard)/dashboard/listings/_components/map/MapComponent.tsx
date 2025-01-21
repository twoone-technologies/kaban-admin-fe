'use client'
import {
  APIProvider,
  AdvancedMarker,
  Map,
  MapCameraChangedEvent,
  MapMouseEvent,
  Pin,
} from '@vis.gl/react-google-maps';
import { MapPins } from './MapPins';
import { SetStateAction } from 'react';
import { usePathname } from 'next/navigation';
import { Listing } from '@/utils/types/listing.types';

type MapComponentProps = {
  className?: string;
  markerArr?: Listing[] | Listing;
  markedPin?: google.maps.LatLngLiteral | null;
  mapCenter?: google.maps.LatLngLiteral | null;
  onClick?: ((event: MapMouseEvent) => void) | undefined;
  setMapCenter?: React.Dispatch<
    SetStateAction<google.maps.LatLngLiteral | null>
  >;
  handleStack?: (stack: 'listings' | 'map') => void;
};

export default function MapComponent({
  onClick,
  markedPin,
  className,
  markerArr,
  mapCenter,
  handleStack,
  setMapCenter,
}: MapComponentProps) {
  const API_KEY = process.env.VITE_API_KEY || '';
  const MAP_ID = process.env.VITE_MAP_ID || '';

  const mapCentralAxis = () => {
    if (markerArr) {
      if (Array.isArray(markerArr) && markerArr?.length > 0) {
        let sumLat = 0;
        let sumLng = 0;
        markerArr?.forEach((markerData: Listing) => {
          sumLat += markerData.location.coordinates[0];
          sumLng += markerData.location.coordinates[1];
        });
        const avgLat = sumLat / markerArr?.length;
        const avgLng = sumLng / markerArr?.length;
        return { lat: avgLat, lng: avgLng };
      } else {
        const position = {
          lat: (markerArr as Listing).location.coordinates[0],
          lng: (markerArr as Listing).location.coordinates[1],
        };
        return markedPin ? markedPin : position;
      }
    }
  };

  // const location = useLocation();
  const path = usePathname();
  const handleCenter = (e: MapCameraChangedEvent) => {
    if (path.includes('/dashboard') && setMapCenter) {
      setMapCenter(e.detail.center);
    }
  };
  // console.log({ markedPin: markedPin });
  return (
    <div className={`h-full w-full`}>
      <APIProvider
        apiKey={API_KEY}
        libraries={['places', 'marker']}
      >
        <Map
          className={`w-full h-full ${className}`}
          onClick={onClick}
          onCameraChanged={handleCenter}
          defaultZoom={10}
          mapId={MAP_ID}
          center={mapCenter}
          defaultCenter={mapCentralAxis()}
        >
          {markerArr && <MapPins pois={markerArr} handleStack={handleStack} markedPin={markedPin} />}
          {path === '/dashboard/post' && markedPin && (
            <AdvancedMarker
              clickable
              position={markedPin.lat ? markedPin : null}
            >
              <Pin
                background={'#437ef7'}
                glyphColor={'#eaebf0'}
                borderColor={'#eaebf0'}
              />
            </AdvancedMarker>
          )}
        </Map>
      </APIProvider>
    </div>
  );
}
