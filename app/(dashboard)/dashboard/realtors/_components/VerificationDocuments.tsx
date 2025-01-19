import Image from 'next/image';
import React from 'react';
import avatar from "@/public/icons/avatar.png"

// type Props = {};

export default function VerificationDocuments() {
  return (
    <div className="border-b-2 border-accent py-2">
      <h2 className="text-white text-xl mb-3">Verification Documents</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className='flex flex-col'>
          <span className='text-lg text-white'>Govt. Issued ID *</span>
          <span>CAC Document, National ID Card, Voter’s Card, Driver’s License, 
          NIN Slip.</span>
          <div className='h-30 w-24'>
          <Image src={avatar} height={50} width={120} alt='k' />
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-lg text-white'>Realtor’s Certification</span>
          <span>Real estate training certificate from a credible institution, REDAN, ESVARBON, NIESV, ERCAAN.
          </span>
          <div>
          <Image src={avatar} height={50} width={120} alt='k' />
          </div>
        </div>
      </div>
    </div>
  );
}
