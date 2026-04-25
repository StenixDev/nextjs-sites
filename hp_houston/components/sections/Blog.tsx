import { Calendar, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

import { getFeed } from '@/lib/rss';

export default async function Blog() {
  const feed = await getFeed();

  return (
    <section id='blog' className='py-16 md:py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          title='Latest Blog'
          subtitle='Stay informed about our work with veterans and military families'
        />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          {feed.slice(0, 3).map((post) => (
            <Card key={post.link} className='h-full flex flex-col'>
              <div className='flex items-center text-gray-500 text-sm mb-3'>
                <Calendar className='h-4 w-4 mr-2' />
                {post.pubDate
                  ? new Date(post.pubDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  : 'No date'}
              </div>
              <h3 className='text-lg font-serif font-bold text-patriotic-navy mb-3'>
                {post.title}
              </h3>
              <p className='text-gray-600 text-sm mb-4 grow'>{post.content}</p>
              <Button
                variant='primary'
                size='sm'
                className='w-full justify-center'
                href={post.link}
                target='_blank'
              >
                Read More
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Card>
          ))}
        </div>

        <div className='text-center'>
          <Button
            variant='primary'
            href='https://hirepatriots.com/news-blogs'
            target='_blank'
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
