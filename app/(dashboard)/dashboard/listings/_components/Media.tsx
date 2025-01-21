import FormControl from '@/components/common/FormControl';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { ImageIcon } from '@/public/icons';

// type Props = {}

export default function Media() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-white text-xl">Images</h2>
      <span>Uploaded Images (23)</span>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-1">
                <Image
                  src={ImageIcon}
                  height={160}
                  width={160}
                  alt="placeholder"
                  className="w-full h-40 object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6" />
        <CarouselNext className="right-6" />
      </Carousel>
      <FormControl as="input" className="bg-accent p-2" labelText="Video Url" />
    </div>
  );
}
