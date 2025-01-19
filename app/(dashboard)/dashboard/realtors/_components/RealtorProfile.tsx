import FormControl from '@/components/common/FormControl';
import React from 'react';

// type Props = {}

export default function RealtorProfile() {
  return (
    <div className="border-b-2 border-accent flex flex-col gap-4 pb-3">
      <h2 className='text-white text-xl'>Profile</h2>
      <FormControl
        as="input"
        labelText='Name'
        className="rounded-md bg-accent py-2"
        placeholder="search here"
      />
      <FormControl
        as="input"
        labelText='Email Address'
        className="rounded-md bg-accent py-2"
        placeholder="search here"
      />
      <FormControl
        as="textarea"
        labelText='Bio'
        className="rounded-md bg-accent py-2"
        placeholder="search here"
      />
    </div>
  );
}
