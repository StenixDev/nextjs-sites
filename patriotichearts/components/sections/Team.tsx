'use client';

import { User } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { TEAM_MEMBERS } from '@/data/siteData';

export default function Team() {
  return (
    <section id='team' className='py-16 md:py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          title='Executive Team'
          subtitle='Meet the dedicated team leading Patriotic Hearts'
        />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          {TEAM_MEMBERS.map((member) => (
            <Card
              key={member.id}
              className='text-center h-full border-t-4 border-t-patriotic-navy'
            >
              <div className='w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4'>
                <User className='h-12 w-12 text-gray-400' />
              </div>
              <h3 className='text-xl font-serif font-bold text-patriotic-navy mb-1'>
                {member.name}
              </h3>
              <p className='text-patriotic-red font-medium'>{member.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
