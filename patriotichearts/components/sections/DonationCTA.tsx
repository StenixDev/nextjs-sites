'use client';

import { Heart, Car, Users } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function DonationCTA() {
  return (
    <section
      id='donate'
      className='relative bg-patriotic-navy text-white py-16 md:py-24 overflow-hidden'
    >
      {/* Background pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent' />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <div className='flex justify-center mb-4'>
            <Heart className='h-12 w-12 text-patriotic-red' />
          </div>
          <h2 className='text-3xl md:text-4xl font-serif font-bold mb-4'>
            Behind the Uniform is a Story of Sacrifice
          </h2>
          <p className='text-xl text-gray-200 max-w-3xl mx-auto'>
            Join us in honoring our veterans and their families. Your support
            changes lives.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {/* Financial Donations */}
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center'>
            <div className='w-16 h-16 bg-patriotic-red rounded-full flex items-center justify-center mx-auto mb-4'>
              <Heart className='h-8 w-8 text-white' />
            </div>
            <h3 className='text-xl font-serif font-bold mb-3'>
              Make a Financial Donation
            </h3>
            <p className='text-gray-200 mb-6'>
              Every dollar fuels our mission to support veterans and their
              families. Your contribution goes directly to those in need.
            </p>
            <Button variant='primary' size='lg' href='#'>
              Donate Today
            </Button>
          </div>

          {/* Vehicle Donations */}
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center'>
            <div className='w-16 h-16 bg-patriotic-red rounded-full flex items-center justify-center mx-auto mb-4'>
              <Car className='h-8 w-8 text-white' />
            </div>
            <h3 className='text-xl font-serif font-bold mb-3'>
              Donate Your Vehicle
            </h3>
            <p className='text-gray-200 mb-6'>
              Turn your old car into hope for veterans. Free pickup, tax
              deductible, and you help fund our programs.
            </p>
            <Button variant='primary' size='lg' href='#'>
              Donate Your Car
            </Button>
          </div>
        </div>

        {/* Impact Stats */}
        <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
          <div>
            <div className='text-3xl font-bold text-patriotic-red'>20+</div>
            <div className='text-sm text-gray-300'>Years of Service</div>
          </div>
          <div>
            <div className='text-3xl font-bold text-patriotic-red'>
              501(c)(3)
            </div>
            <div className='text-sm text-gray-300'>Non-Profit Status</div>
          </div>
          <div>
            <div className='text-3xl font-bold text-patriotic-red'>6</div>
            <div className='text-sm text-gray-300'>Programs</div>
          </div>
          <div>
            <div className='text-3xl font-bold text-patriotic-red'>100%</div>
            <div className='text-sm text-gray-300'>Veteran Focused</div>
          </div>
        </div>
      </div>
    </section>
  );
}
