import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className='relative bg-patriotic-navy text-white overflow-hidden'>
      {/* Background with overlay */}
      <div className='absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-patriotic-navy' />
      <div className='absolute inset-0  opacity-30' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40'>
        <div className='text-center'>
          {/* Decorative Stars */}
          <div className='flex justify-center mb-6'>
            <div className='flex space-x-2'>
              <span className='text-4xl text-patriotic-red'>★</span>
              <span className='text-4xl text-white'>★</span>
              <span className='text-4xl text-patriotic-red'>★</span>
            </div>
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight'>
            Help Our Heroes and their Spouses
          </h1>

          <p className='text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto'>
            Help 4 America&apos;s Heroes
          </p>

          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Button variant='primary' size='lg' href='#donate'>
              Post a Job
            </Button>
            <Button variant='outline' size='lg' href='#programs'>
              Search Jobs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
