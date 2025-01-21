import React from 'react';
import MapComponent from './MapComponent';
import FormControl from '@/components/common/FormControl';

// type Props = {};

export default function Map() {
  return (
    <div className='py-4 border-b border-accent'>
      <h2 className='text-white text-xl mb-4'>Map</h2>
      <div className='grid grid-cols-2 gap-4'>
        <MapComponent mapCenter={{lat: 5, lng: 7}} />
        <div className="flex flex-col gap-2 justify-between">
          <FormControl as="input" className='p-2 bg-accent' labelText='Map Address'/>
          <FormControl as="input" className='p-2 bg-accent' labelText='Longitude'/>
          <FormControl as="input" className='p-2 bg-accent' labelText='Latitude'/>
        </div>
      </div>
    </div>
  );
}
