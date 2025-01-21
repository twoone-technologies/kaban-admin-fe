import FormControl from '@/components/common/FormControl';
import React from 'react';

// type Props = {};

export default function Location() {
  return (
    <div className="flex flex-col border-b-2 border-accent pb-3 gap-4">
      <h2 className="text-white text-xl">Location</h2>
      <div className="grid grid-cols-2 gap-2">
        <FormControl
          as="input"
          labelText="State"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
        <FormControl
          as="input"
          labelText="City"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
        <FormControl
          as="input"
          labelText="Address"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
        <FormControl
          as="input"
          labelText="Landmark"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
      </div>
    </div>
  );
}
