import Rating from '@/components/common/Ratings'
import { DislikeIcon, LikeIcon } from '@/public/icons'
import Image from 'next/image'
import React from 'react'
import avatar from '@/public/icons/avatar.png'

// type Props = {}

export default function Reports({ report }: { report?: boolean }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-baseline gap-2">
          <div className="flex items-center gap-2">
            <Image src={avatar} alt="Description of image" />
            <div>
              <h2 className='text-white'>John Doe</h2>
              {report ? <span>2months ago</span> : <Rating num={3.5} />}
            </div>
          </div>
          {report ? null : <span> 2months ago</span>}
        </div>
        <div className='flex gap-4 items-center'>
          <div>
          {report && <h2 className='text-white'>Reason to report</h2> }
          <p>
            I recently had the pleasure of working with Realtor`s Name from Real
            Estate Agency and I cannot express how grateful I am for the
            outstanding service I received. From the very beginning, Realtor
            Name demonstrated a level of professionalism and expertise that
            immediately put me at ease during the daunting process of buying a
            home.
          </p>
          </div>
          {!report ? <div className="flex gap-4">
            <div className="flex gap-4">
              <LikeIcon className="w-5 h-5" /> <span>3</span>
            </div>
            <div className="flex gap-4">
              <DislikeIcon className="w-5 h-5" /> <span>3</span>
            </div>
          </div> : null}
        </div>
      </div>
    </div>
  )
}