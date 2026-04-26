import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

import Button from '@/components/ui/Button';

import { Posts } from '@/data/posts';
import Image from 'next/image';

export default async function Blog() {
  return (
    <section id='blog' className='py-16 md:py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          title='Recent Posts'
          subtitle='Stay informed about our work with veterans and military families'
        />
      </div>

      <div className='max-w-6xl mx-auto p-4'>
        <div className='grid grid-cols md:grid-cols-3 gap-4'>
          {Posts.map((post) => (
            <div key={post.id}>
              <Image
                src={post.img}
                className='w-full h-48 object-cover rounded-t-lg'
                alt={post.title}
                width={600}
                height={400}
              />
              <Button
                variant='primary'
                size='sm'
                className='w-full justify-center rounded-t-none'
                href={post.link}
                target='_blank'
              >
                Read More
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
