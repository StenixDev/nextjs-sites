import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Programs from '@/components/sections/Programs';
import DonationCTA from '@/components/sections/DonationCTA';
import Awards from '@/components/sections/Awards';
import Blog from '@/components/sections/Blog';
import Books from '@/components/sections/Books';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <DonationCTA />
      <Awards />
      <Blog />
      <Books />
      <Team />
      <Contact />
    </>
  );
}
