import FormControl from '@/components/common/FormControl';
import React from 'react';

// type Props = {};

export default function Price() {
  return (
    <div className="border-b-2 border-accent flex flex-col gap-4 pb-3">
      <h2 className="text-white text-xl">Profile</h2>
      <div className="grid grid-cols-2 gap-2">
        <FormControl
          as="input"
          labelText="Price"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
        <FormControl
          as="select"
          options={[
            { value: 'naira', label: 'for Sale' },
            { value: 'rent', label: 'for Rent' },
          ]}
          labelText="Price suffix"
          className="rounded-md bg-accent border-none py-2"
          placeholder="price"
        />
      </div>
    </div>
  );
}
