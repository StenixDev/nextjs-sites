'use client';

import { Medal, Award, Trophy, Star, Tv, BookOpen } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { AWARDS } from '@/data/siteData';
import Image from 'next/image';
import PeopleFirstbanner from '@/public/PeopleFirstbanner.jpg';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  medal: Medal,
  award: Award,
  trophy: Trophy,
  star: Star,
  tv: Tv,
  book: BookOpen,
};

export default function Awards() {
  return (
    <>
      <section id='awards' className='py-16 md:py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionHeading
            title='Recognition & Awards'
            subtitle='Honored to receive recognition for our dedication to veterans'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {AWARDS.map((award, index) => {
              const Icon = iconMap[award.icon];
              return (
                <Card
                  key={award.id}
                  className='text-center h-full border-b-4 border-b-patriotic-gold'
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      index % 2 === 0
                        ? 'bg-patriotic-gold'
                        : 'bg-patriotic-navy'
                    }`}
                  >
                    <Icon className='h-8 w-8 text-white' />
                  </div>
                  <h3 className='text-lg font-serif font-bold text-patriotic-navy'>
                    {award.title}
                  </h3>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <div className=' bg-patriotic-navy py-10 flex justify-center items-center'>
        <Image src={PeopleFirstbanner} alt='People First ' />
      </div>
    </>
  );
}
