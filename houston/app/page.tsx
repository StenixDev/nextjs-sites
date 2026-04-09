import About from '@/components/sections/About';
import Awards from '@/components/sections/Awards';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import DonationCTA from '@/components/sections/DonationCTA';
import Hero from '@/components/sections/Hero';
import Programs from '@/components/sections/Programs';

// export const metadata = {
//   title:
//     'Patriotic hearts - Making the Lives of American Heroes and their Families Better',
//   description:
//     'Patriotic Hearts Inc. is a nonprofit organization established under the laws of the state of California. The organization&#039;s primary mission is to assist US Military, Veterans, and their families.',
// };

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />

      <DonationCTA />
      <Awards />

      <Contact />
    </>
  );
}
