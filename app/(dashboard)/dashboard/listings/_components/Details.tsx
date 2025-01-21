import FormControl from '@/components/common/FormControl';
import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';

// type Props = {};

export default function Details() {
  return (
    <div className="flex flex-col border-b-2 border-accent pb-3 gap-4">
      <h2 className="text-white text-xl">Details</h2>
      <div className="grid grid-cols-2 gap-2">
        <FormControl
          as="input"
          labelText="Bedrooms"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
        <FormControl
          as="input"
          labelText="Bathrooms"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
        <FormControl
          as="input"
          labelText="Parking Lot"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
        <FormControl
          as="input"
          labelText="Area Size"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
        <FormControl
          as="input"
          containerClass='col-span-2'
          labelText="Area Suffix"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
      </div>
      <h2 className="text-white text-xl">Features</h2>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-2">
        <div className='flex gap-2 items-center'>
          <Checkbox id="swimmingpool" />
          <label htmlFor="swimmingpool">swimming pool</label>
        </div>
        <div className='flex gap-2 items-center'>
          <Checkbox id="fittedkitchen" />
          <label htmlFor="fittedkitchen">Fitted Kitchen</label>
        </div>
        <div className='flex gap-2 items-center'>
          <Checkbox id="in-builtspeaker" />
          <label htmlFor="in-builtspeaker">In-built speaker</label>
        </div>
        <div className='flex gap-2 items-center'>
          <Checkbox id="En-suite" />
          <label htmlFor="En-suite">En-suite</label>
        </div>
        <div className='flex gap-2 items-center'>
          <Checkbox id="boysquarters" />
          <label htmlFor="boysquarters">Boys Quarters</label>
        </div>
        <div className='flex gap-2 items-center'>
          <Checkbox id="gym" />
          <label htmlFor="gym">Gym</label>
        </div>
        <div className='flex gap-2 items-center'>
          <Checkbox id="CCTVcameras" />
          <label htmlFor="CCTVcameras">CCTV Cameras</label>
        </div>
        <div className='flex gap-2 items-center'>
          <Checkbox id="security" />
          <label htmlFor="security">Security</label>
        </div>
      </div>
    </div>
  );
}
