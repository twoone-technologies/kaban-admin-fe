'use client';
import React from 'react';
import Price from './Price';
import Media from './Media';
import Map from './map/Map';
import Details from './Details';
import Location from './Location';
import { Button } from '@/components/ui/button';
import PropertyDescription from './PropertyDescription';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
// type Props = {};

export default function Basic() {
  return (
    <div className="flex flex-col gap-8">
      <PropertyDescription />
      <Price />
      <Details />
      <Location />
      <Media />
      <Map />
      <div className="flex justify-end gap-4">
        <Button className="min-w-28 text-white">Approve</Button>
      <Dialog>
        <DialogTrigger asChild>
        <Button variant={'destructive'} className="min-w-28 text-white">
          Disapprove
        </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[40rem] text-text">
          <DialogHeader>
            <DialogTitle>Reason</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className='flex gap-2 items-center'>
              <Checkbox id="1" />
              <label htmlFor="1">Review ¨Property Description¨ sub-header</label>
            </div>
            <div className='flex gap-2 items-center'>
              <Checkbox id="2" />
              <label htmlFor="2">Review ¨Price¨ sub-header</label>
            </div>
            <div className='flex gap-2 items-center'>
              <Checkbox id="3" />
              <label htmlFor="3">Review ¨Details¨ sub-header</label>
            </div>
            <div className='flex gap-2 items-center'>
              <Checkbox id="4" />
              <label htmlFor="4">Review ¨Image¨ sub-header</label>
            </div>
            <div className='flex gap-2 items-center'>
              <Checkbox id="5" />
              <label htmlFor="5">Review ¨Location¨ sub-headerr</label>
            </div>
            <div className='flex gap-2 items-center'>
              <Checkbox id="6" />
              <label htmlFor="6">Review ¨Map¨ sub-header</label>
            </div>
            <div className='flex gap-2 items-center'>
              <Checkbox id="7" />
              <label htmlFor="7">Duplicate Listing</label>
            </div>
            <div className='flex gap-2 items-center'>
              <Checkbox id="8" />
              <label htmlFor="8">Violation of Terms of Servicer</label>
            </div>
          </div>
          <DialogFooter>
            <Button className='text-white' variant={'destructive'} type="button">Disapprove</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </div>
    </div>
  );
}
