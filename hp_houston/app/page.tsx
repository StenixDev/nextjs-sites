import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';

import DonationCTA from '@/components/sections/DonationCTA';
import Awards from '@/components/sections/Awards';

import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />

      <section className='py-16 md:py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row md:py-3 items-center gap-5'>
          <div className='flex-1'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/wFZ3ZcfLms8?si=5ZIJHYWYOEbP--db'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
          <div className='flex-1'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/fYRFR0bm3lI?si=P_7e45Wo_9KdF3MS'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <About />

      <DonationCTA />
      <Awards />

      <Contact />
    </>
  );
}
