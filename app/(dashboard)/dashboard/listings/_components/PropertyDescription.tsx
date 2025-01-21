import FormControl from '@/components/common/FormControl';
import React from 'react';

// type Props = {};

export default function PropertyDescription() {
  return (
    <div className="border-b-2 border-accent flex flex-col gap-4 pb-3">
      <h2 className="text-white text-xl">Profile</h2>
      <div className='grid grid-cols-2 gap-2'>
      <FormControl
        as="input"
        labelText="Title"
        className="rounded-md bg-accent py-2"
        placeholder="search here"
      />
      <FormControl
        as="select"
        labelText="Status"
        options={[
          {value: 'sale', label: 'for Sale'},
          {value: 'rent', label: 'for Rent'},
        ]}
        className="rounded-md bg-accent py-2 border-none"
        placeholder="Select"
      />
      <FormControl
        as="select"
        options={[
          {value: 'residential', label: 'Residential'},
          {value: 'commercial', label: 'Commercial'},
          {value: 'industrial', label: 'Industrial'},
        ]}
        labelText="Category"
        className="rounded-md bg-accent py-2 border-none"
        placeholder="select"
      />
      <FormControl
        as="select"
        options={[
          {value: 'land', label: 'Land'},
          {value: 'apartment', label: 'Apartment'},
          {value: 'shop', label: 'Shop'},
          {value: 'office', label: 'Office'},
          {value: 'warehouse', label: 'Warehouse'},
          {value: 'factory', label: 'Factory'},
        ]}
        labelText="Category"
        className="rounded-md bg-accent py-2 border-none"
        placeholder="select"
      />
      </div>
      <FormControl
        as="textarea"
        labelText="Description"
        className="rounded-md bg-accent py-2"
        placeholder="search here"
      />
    </div>
  );
}
