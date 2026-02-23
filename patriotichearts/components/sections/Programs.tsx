import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { PROGRAMS } from '@/data/siteData';
import Image from 'next/image';
import Link from 'next/link';

export default function Programs() {
  return (
    <section id='programs' className='py-16 md:py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          title='Our Programs'
          subtitle='Car Donations Fund All Patriotic Hearts Programs'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {PROGRAMS.map((program) => {
            return (
              <Card
                key={program.id}
                className='h-full flex flex-col border-t-4 border-t-patriotic-red hover:shadow-xl transition-all duration-300'
              >
                <div className='flex items-center mb-4 justify-center'>
                  <div className='flex flex-col justify-center items-center'>
                    <Image
                      src={`/programs/${program.logo}`}
                      alt={program.title}
                      width={100}
                      height={100}
                      className='mb-3'
                    />
                    <h3 className='text-lg font-serif font-bold text-patriotic-navy'>
                      {program.title}
                    </h3>
                  </div>
                </div>

                <p className='text-patriotic-red text-sm mb-2 text-center font-bold'>
                  {program.tagline}
                </p>

                {/* 👇 this grows and keeps button at bottom */}
                <p className='text-gray-600 text-sm leading-relaxed mb-4 grow'>
                  {program.description}
                </p>

                {program.link && (
                  <Link href={program.link}>
                    <Button
                      variant='primary'
                      size='sm'
                      className='w-full justify-center mt-auto cursor-pointer'
                    >
                      Learn More
                    </Button>
                  </Link>
                )}
              </Card>
            );
          })}
        </div>

        {/* CTA for more programs */}
        <div className='mt-12 text-center'>
          <p className='text-gray-600 mb-4'>
            Want to support these programs? Every donation makes a difference.
          </p>
          <Button variant='primary' size='lg' href='#donate'>
            Support Our Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
