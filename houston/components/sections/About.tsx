import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Shield, Car } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id='about' className='py-16 md:py-24 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          title='Houston Chapter'
          subtitle='Dedicated to serving those who served our nation'
        />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Mission Statement */}
          <Card className='h-full'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 rounded-full flex items-center justify-center mr-4'>
                <Image
                  src='/jeremy-white.jpg'
                  alt='Jeremy White'
                  width={120}
                  height={120}
                  className='rounded-full'
                />
              </div>
              <h3 className='text-xl font-serif font-bold text-patriotic-navy'>
                Jeremy White
              </h3>
            </div>
            <p className='text-gray-600 mb-4'>
              <strong>Jeremy White</strong> is a dedicated supporter of the
              mission behind Patriotic Hearts and the driving force behind the
              Houston chapter. With a deep respect for those who serve our
              nation, Jeremy is committed to making a meaningful impact in the
              lives of American heroes and their families within the Houston
              community.
            </p>
            <p className='text-gray-600'>
              Motivated by a passion for service and a heart for giving back,
              Jeremy took the initiative to help establish the Houston chapter.
              Creating new opportunities to support veterans, and their loved
              ones. His leadership reflects the core values of honor,
              compassion, and community that define Patriotic Hearts.
            </p>
            <br />
            <span>📞 (719) 896-9365</span>
            <br />
            <span>📧 houston@patriotichearts.org</span>
          </Card>

          {/* Car Donation Program */}
          <Card className='h-full border-l-4 border-l-patriotic-red'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-patriotic-navy rounded-full flex items-center justify-center mr-4'>
                <Car className='h-6 w-6 text-white' />
              </div>
              <h3 className='text-xl font-serif font-bold text-patriotic-navy'>
                Car Donation Program
              </h3>
            </div>
            <p className='text-gray-600 mb-4'>
              Almost all of our funding comes from our{' '}
              <strong>CarDonation2Veterans</strong> program. When Americans
              donate their cars or trucks, we pick them up within 48 hours and
              provide a tax-deductible receipt.
            </p>
            <ul className='space-y-2 mb-6'>
              <li className='flex items-center text-gray-600'>
                <Shield className='h-5 w-5 text-patriotic-red mr-2' />
                Free pickup within 48 hours
              </li>
              <li className='flex items-center text-gray-600'>
                <Shield className='h-5 w-5 text-patriotic-red mr-2' />
                Tax-deductible receipt provided
              </li>
              <li className='flex items-center text-gray-600'>
                <Shield className='h-5 w-5 text-patriotic-red mr-2' />
                Market value up to $500, or full sale price
              </li>
            </ul>
            <Button variant='primary' href='https://cardonation2veterans.com/'>
              Donate Your Vehicle
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
