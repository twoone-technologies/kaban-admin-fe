import React from 'react';
import StatusBadge from '../../_components/StatusBadge';
import ProfileCard from '../../_components/ProfileCard';
import RealtorProfile from './RealtorProfile';
import Contact from './Contact';
import Social from './Social';
import VerificationDocuments from './VerificationDocuments';

// type Props = {}

export default function Profile() {
  return (
    <div>
      <h2 className="mb-3 text-white">Status:</h2>
      <div className="flex justify-between border-b-2 border-accent pb-3">
        <StatusBadge stat_1="verified" />
        <button className="border p-2 rounded flex gap-2 items-center border-accent  max-w-max">
          Verify this user
        </button>
      </div>
      <ProfileCard className="my-4" name={'foo'} role="camel" star={3} />
      <div className="flex flex-col gap-8">
        <RealtorProfile />
        <Contact />
        <Social />
        <VerificationDocuments />
        <div className='flex flex-col gap-2'>
        <h2 className="text-white text-xl">Deactivate account</h2>
        <p className="">This will notify the account user via email that this account has been deactivated in violation of our terms of service.</p>
        <button className='p-3 bg-transparent border border-red-500 max-w-max rounded-md text-red-500'>Deactivate account</button>
        </div>
      </div>
    </div>
  );
}
