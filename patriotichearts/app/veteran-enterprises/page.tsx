import PageContent from '@/components/layout/PageContent';
import Image from 'next/image';
import usve from '@/public/USVE-512x512.jpg';
import Button from '@/components/ui/Button';
function VeteranEnterprises() {
  return (
    <PageContent title='Veteran Enterprises' subtitle='A Biz 4 Veterans!'>
      <div className='flex justify-center'>
        <Image src={usve} alt='Veteran Entrepeneur Program' />
      </div>
      <p>
        The mission of Veteran Enterprises is to empower military veterans to
        achieve financial independence and professional fulfillment through the
        mastery of service-based entrepreneurship. We provide veterans with the
        specialized training, operational blueprints, and strategic support
        necessary to launch, manage, and scale high-demand businesses in the
        cleaning and detailing industries. By translating military discipline
        into sustainable business ownership, we honor the service of our
        veterans by equipping them to build a prosperous future for themselves
        and their families.
      </p>
      <p>
        At Veteran Enterprises, we believe the discipline, work ethic, and
        leadership forged in the military are the perfect ingredients for
        business success. We provide the tools; our veterans provide the
        mission-driven execution.
      </p>

      <h2 className='text-2xl font-bold text-center'>
        Why These Five Industries?
      </h2>

      <p>
        We have specifically curated these sectors because they share three
        critical traits for veteran success:
      </p>

      <ol className='ml-5'>
        <li>
          1. <b>Low Barrier to Entry:</b> Start with minimal capital and scale
          as you grow.
        </li>
        <li>
          2. <b>High Resilience:</b> These services are
          &quot;recession-resistant&quot; and always in demand.
        </li>

        <li>
          3. <b>Immediate Cash Flow:</b> Veterans can move from training to
          their first paid contract in a matter of weeks, not months.
        </li>
      </ol>

      <p>
        Veteran Enterprises isn&apos;t just a training course—it’s a launchpad
        for the next generation of American entrepreneurs.
      </p>

      <div className='w-30'>
        <Button
          variant='primary'
          size='sm'
          className='w-full justify-center mt-auto cursor-pointer'
          href='https://militarycleaningmaintenance.com/veterans-transition-into-entrepreneurship'
          target='_blank'
        >
          Learn More
        </Button>
      </div>
    </PageContent>
  );
}
export default VeteranEnterprises;
