import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { BOOKS } from '@/data/siteData';
import Image from 'next/image';

export default function Books() {
  return (
    <section id='books' className='py-16 md:py-24 bg-patriotic-navy text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          title='Books by Mark Baird'
          subtitle='Inspiring reads for patriots and veterans'
          className='text-white'
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
          {BOOKS.map((book) => (
            <Card
              key={book.id}
              className='flex flex-col text-center bg-white/10 backdrop-blur-sm border-none p-4'
            >
              <div className='relative w-full h-56 shrink-0'>
                <div className='relative w-full h-56'>
                  <Image
                    src={`/books/${book.book}`}
                    alt={book.title}
                    fill
                    sizes='(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           20vw'
                    className='object-contain'
                  />
                </div>
              </div>

              <div className='grow mt-3'>
                <h3 className='text-lg font-serif font-bold'>{book.title}</h3>
                <p className='text-gray-300 text-sm'>by {book.author}</p>
              </div>

              <Button
                variant='gold'
                size='sm'
                href={book.amazonLink}
                className='w-full mt-4'
                target='_blank'
              >
                Buy on Amazon
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
