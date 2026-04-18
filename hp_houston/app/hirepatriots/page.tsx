import Image from 'next/image';
import HirePatriotsLogo from '@/public/programs/HP-horizontal-logo.png';
import PageContent from '@/components/layout/PageContent';

function HirePatriots() {
  return (
    <PageContent
      title='HirePatriots'
      subtitle='Honored to receive recognition for our dedication to veterans'
    >
      <div className='flex justify-center '>
        <Image
          src={HirePatriotsLogo}
          alt='HirePatriots'
          width={332}
          height={60}
        />
      </div>
      <p>
        Patriotic Hearts’ <b>HirePatriots program</b> focuses on securing their
        financial futures by providing employment opportunities, daily,
        part-time, and full-time. – Reconnecting with the civilian world when
        transitioning from military service can be very difficult after the
        strict structure of military service. Towards the end, HirePatriots
        includes a unique job board where local civilian residents post chores
        around their homes and yards for local US Military, and veterans to do
        and earn extra income.
      </p>

      <p>
        This creates a friendly connection between them and the residents in
        nearby communities, which often results in developing surrogate
        friendships and families, and being invited to share holidays, family
        dinners. These connections enrich their lives, prevent depression and
        loneliness; and can assist them in transitioning successfully too.
      </p>

      <div className='flex justify-center '>
        <a href='https://hirepatriots.com/in-the-news' target='_blank'>
          <Image
            src='https://hirepatriots.com/wp-content/uploads/2024/06/newtvradio-compressed.jpg'
            alt='HirePatriots TV / Radio'
            width={718}
            height={84}
          />
        </a>
      </div>
    </PageContent>
  );
}
export default HirePatriots;
