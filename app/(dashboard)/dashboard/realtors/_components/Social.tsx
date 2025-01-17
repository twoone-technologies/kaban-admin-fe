import FormControl from '@/components/common/FormControl';
import React from 'react';

// type Props = {}

export default function Social() {
  return (
    <div className="border-b-2 border-accent">
      <h2 className="text-white text-xl">Social Media</h2>
      <div className="grid grid-cols-2 py-4 gap-4">
        <FormControl
          as="input"
          labelText="Facebook"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
        <FormControl
          as="input"
          labelText="X"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
        <FormControl
          as="input"
          labelText="LinkedIn"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
        <FormControl
          as="input"
          labelText="Instagram"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
        <FormControl
          as="input"
          labelText="Youtube"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
        <FormControl
          as="input"
          labelText="TikTok"
          className="rounded-md bg-accent py-2"
          placeholder="search here"
        />
      </div>
    </div>
  );
}
