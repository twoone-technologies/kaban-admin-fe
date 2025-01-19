import FormControl from '@/components/common/FormControl';
import React from 'react';

// type Props = {}

export default function Contact() {
  return (
    <div className="border-b-2 border-accent">
      <h2 className='text-white text-xl'>Contact</h2>
      <div className="grid grid-cols-2 gap-4 py-4">
      <FormControl
        as="input"
        labelText='Company Name'
        className="rounded-md bg-accent py-2"
        placeholder="search here"
      />
      <FormControl
        as="input"
        labelText='Service Address'
        className="rounded-md bg-accent py-2"
        placeholder="search here"
      />
      <FormControl
        as="input"
        labelText='Office Area'
        className="rounded-md bg-accent py-2"
        placeholder="search here"
      />
      <FormControl
        as="input"
        labelText='Mobile'
        className="rounded-md bg-accent py-2"
        placeholder="search here"
      />
      <FormControl
        as="input"
        labelText='Whatsapp'
        className="rounded-md bg-accent py-2"
        placeholder="search here"
      />
      </div>
    </div>
  );
}
