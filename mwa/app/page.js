import Navbar from '@/components/Navbar';
import { Arrow, Star } from '@/components/Icons';
import Logo from '@/assets/MWA-Logo.png';
import MWAProgram from '@/assets/MWA-program.jpg';
import Image from 'next/image';

const priorities = [
  {
    n: '01',
    title: 'Personal Counseling & Skill Discovery',
    text: 'Every journey begins with a one-on-one conversation. We take the time to listen to your story, uncover your unique strengths, and identify the career paths that align with your passions, scheduling needs, and financial goals.',
  },
  {
    n: '02',
    title: 'Local Market &amp; Company Research',
    text: 'You don’t have to search alone. We analyze your local geographic area and nearest metropolitan hubs to find businesses and industries that match your skills and share our patriotic values.',
  },
  {
    n: '03',
    title: 'Elite Resume Crafting',
    text: 'We work directly with you to build a professional, high-impact resume. We know how to translate your unique life experiences and unmatched resilience into a language that corporate hiring managers understand and value.',
  },

  {
    n: '04',
    title: 'Direct Corporate Advocacy (The Power Call)',
    text: 'This is where we break the mold. Once your application is submitted, our leadership personally calls the company’s HR or hiring manager. We bridge the gap, transfer our trust, and advocate directly for your application—ensuring a human being sees the incredible person behind the paper.',
  },
];

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <section className='relative min-h-[780px] overflow-hidden bg-navy text-white lg:min-h-[860px]'>
        <Navbar />
        <div className='star-grid absolute -right-24 top-0 h-[62%] w-[58%] opacity-20' />
        <div
          className='absolute -left-40 bottom-[-22rem] h-[36rem] w-[36rem] rounded-full border-[7rem] border-patriot/10'
          aria-hidden='true'
        />
        <div className='relative mx-auto grid min-h-[780px] max-w-7xl items-center gap-12 px-5 pb-24 pt-36 sm:px-8 lg:min-h-[860px] lg:grid-cols-[1.12fr_.88fr] lg:px-10 lg:pt-32'>
          <div className='relative z-10 max-w-3xl'>
            <div className='reveal mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.26em] text-[#ff7b85]'>
              <Star className='h-3 w-3' /> Honoring sacrifice · supporting those
              left behind
            </div>
            <h1 className='display reveal delay-1 text-[clamp(4rem,7.7vw,7.4rem)] font-bold leading-[.87]'>
              Their service
              <br />
              lives on in{' '}
              <span className='relative inline-block italic text-white'>
                <span className='relative z-10'>her story.</span>
                <span className='absolute bottom-[.07em] left-0 h-[.11em] w-full -rotate-1 bg-patriot' />
              </span>
            </h1>
            <p className='reveal delay-2 mt-8 max-w-xl border-l-2 border-patriot pl-5 text-lg leading-8 text-white/70 sm:text-xl'>
              Behind every fallen hero is a spouse carrying love, loss, and a
              legacy forward. We stand beside military widows with practical
              support, lasting community, and the honor they deserve.
            </p>
            <div className='reveal delay-2 mt-9 flex flex-col gap-3 sm:flex-row'>
              <a
                href='https://patriotichearts.org/donate/'
                target='_blank'
                className='flex items-center justify-center gap-3 rounded-full bg-patriot px-7 py-4 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-[#a91022]'
              >
                Support a Widow <Arrow className='h-5 w-5' />
              </a>
            </div>
          </div>

          <div
            className='reveal delay-2 relative mx-auto hidden h-[500px] w-full max-w-[480px] lg:block'
            aria-hidden='true'
          >
            <div className='absolute inset-7 rounded-full border border-white/20' />
            <div className='absolute inset-14 rounded-full border border-dashed border-white/25' />
            <div className='absolute inset-[5.6rem] grid place-items-center rounded-full bg-cream text-navy shadow-[0_30px_80px_rgba(0,0,0,.35)]'>
              <div className='absolute inset-3 rounded-full border-2 border-navy/15' />
              <div className='absolute inset-6 rounded-full border border-navy/15' />
              <div className='relative text-center'>
                <div className='flex justify-center gap-2 text-patriot'>
                  <Star className='h-4 w-4' />
                  <Star className='h-4 w-4' />
                  <Star className='h-4 w-4' />
                </div>
                <div className='display mt-5 text-5xl font-bold leading-[.88]'>
                  Love
                  <br />
                  <span className='italic text-patriot'>outlives</span>
                  <br />
                  loss
                </div>
                <div className='mx-auto my-5 h-px w-20 bg-navy/25' />
                <div className='text-[9px] font-bold uppercase tracking-[.28em]'>
                  Honor · Hope · Home
                </div>
              </div>
            </div>
            <div className='absolute right-0 top-12 rounded-full bg-patriot px-5 py-3 text-[10px] font-bold uppercase tracking-[.2em] shadow-lg'>
              Never forgotten
            </div>
            <div className='absolute bottom-14 left-0 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md'>
              <span className='h-2 w-2 rounded-full bg-[#ff5a68]' />
              <span className='text-[10px] font-bold uppercase tracking-[.18em]'>
                No widow stands alone
              </span>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 h-1 w-1/3 bg-patriot' />
        <div className='absolute bottom-0 left-1/3 h-1 w-1/3 bg-cream' />
        <div className='absolute bottom-0 right-0 h-1 w-1/3 bg-[#5b83a8]' />
      </section>

      <section id='mission' className='fine-lines bg-cream py-24 sm:py-32'>
        <div className='mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:px-10'>
          <div>
            <div className='mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-patriot'>
              <Star className='h-3 w-3' /> Military Widows: They Served Too
            </div>
            <p className='text-sm leading-6 text-navy/55'>
              When a U.S. service member dies, the sacrifice does not end.
              Behind every fallen hero is often a spouse whose life has been
              forever changed.
              <br />
              Military widows face overwhelming emotional loss, financial
              hardship, and the challenge of rebuilding their lives while
              honoring the memory of the one they loved. They are part of the
              military family, and they deserve our gratitude, respect, and
              support.
              <br />
              At <b>Patriotic Hearts</b>, our programs are available to all U.S.
              Veterans and their families—including military widows. We provide
              employment opportunities, business startup assistance, emergency
              financial aid for urgent bills, and other resources designed to
              bring hope and practical help.
            </p>
          </div>
          <div>
            <h2 className='display max-w-4xl text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl'>
              The Heart of Our
              <span className='stripe-word'>Mission</span>
            </h2>
            <p className='mt-8 max-w-2xl text-lg leading-8 text-navy/65'>
              When a service member makes the ultimate sacrifice, or passes away
              after years of dedicated service, a devastating void is left
              behind. For the military widows who carried the weight of the home
              front, the transition into civilian employment can be an
              overwhelming, uphill battle.
              <br />
              Frequent military moves, career gaps due to family dedication, and
              sudden economic hardships leave thousands of these resilient women
              facing underemployment and financial distress.
              <br />
              At <b>Patriotic Hearts</b>, we believe that honoring a veteran’s
              service means fiercely protecting and supporting the family they
              loved. Our <b>Military Widow Advocacy Program</b> is a national,
              high-touch initiative designed to walk hand-in-hand with military
              widows, providing them with the professional tools, personal
              counseling, and direct corporate advocacy they need to secure
              stable, rewarding careers.
            </p>
          </div>
        </div>
      </section>

      <section id='priorities' className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
          <div className='mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end'>
            <div>
              <div className='mb-4 text-xs font-bold uppercase tracking-[.2em] text-patriot'>
                How We Help
              </div>
              <h2 className='display text-5xl font-bold sm:text-6xl'>
                Our 4-Step Advocacy Process
              </h2>
            </div>
            <p className='max-w-sm text-sm leading-6 text-navy/55'>
              We don&#39;t just ask you to upload a resume to a faceless job
              board. We provide a dedicated, personal advocate to champion your
              employment journey from start to finish.
            </p>
          </div>
          <div className='grid border-t border-navy/15 lg:grid-cols-2'>
            {priorities.map((p, i) => (
              <article
                key={p.n}
                className={`group border-b border-navy/15 py-10 lg:min-h-[410px] lg:px-9 lg:py-12 ${i > 0 ? 'lg:border-l' : ''}`}
              >
                <div className='mb-4 flex items-center justify-between'>
                  <span className='text-xs font-bold tracking-[.2em] text-patriot'>
                    {p.n}
                  </span>
                </div>
                <h3 className='display max-w-xs text-3xl font-bold leading-tight'>
                  {p.title}
                </h3>
                <p className='mt-5 max-w-sm text-sm leading-7 text-navy/60'>
                  {p.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id='impact' className='bg-sky py-24 sm:py-28'>
        <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
          <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
            <div>
              <div className='mb-5 text-xs font-bold uppercase tracking-[.2em] text-patriot'>
                PatriotHearts Program
              </div>
              <h2 className='display max-w-xl text-5xl font-bold leading-tight sm:text-6xl'>
                Stand With a Military Widow
              </h2>
              <p className='mt-6 max-w-lg text-lg leading-8 text-navy/65'>
                The sacrifice doesn't end with the loss of a service member. At
                Patriotic Hearts, we stand beside military widows by providing
                career pathways, business startup support, emergency financial
                assistance, and caring resources that help them find stability,
                independence, and renewed hope.
              </p>

              <div className='reveal delay-2 mt-9 flex flex-col gap-3 sm:flex-row'>
                <a
                  href='https://patriotichearts.org/donate/'
                  target='_blank'
                  className='flex items-center justify-center gap-3 rounded-full bg-patriot px-7 py-4 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-[#a91022] text-white'
                >
                  Support a Widow <Arrow className='h-5 w-5' />
                </a>
              </div>
            </div>
            <div className='flex justify-center'>
              <Image
                src={MWAProgram}
                alt='Military Widows'
                className='rounded-3xl'
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id='join'
        className='relative bg-patriot py-24 text-center text-white sm:py-32'
      >
        <div className='star-grid absolute inset-0 opacity-15' />
        <div className='relative mx-auto max-w-4xl px-5'>
          <Star className='mx-auto mb-6 h-7 w-7' />
          <h2 className='display text-5xl font-bold leading-[1.02] sm:text-7xl'>
            Are You a Military Widow Looking for Work?
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-white/75'>
            You have given so much to our country, and you do not have to
            navigate this next chapter by yourself. Let us be your boots on the
            ground in the job market.
          </p>
          <form className='mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row justify-center'>
            <button className='rounded-full bg-white px-7 py-4 text-sm font-bold text-navy transition hover:bg-cream'>
              Get Personal Job Advocacy Today <span aria-hidden='true'>→</span>
            </button>
          </form>
        </div>
      </section>

      <footer className='bg-navy px-5 py-10 text-white sm:px-8 lg:px-10'>
        <div className='mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex items-center gap-3'>
            <Image src={Logo} alt='Military Widows Advocacy' width={40} />
            <span className='text-sm font-bold uppercase tracking-[.18em]'>
              Military Widows Advocacy
            </span>
          </div>
          <div className='flex flex-wrap gap-6 text-xs font-semibold text-white/55'>
            <a href='#mission' className='hover:text-white'>
              Mission
            </a>
            <a href='#priorities' className='hover:text-white'>
              Advocacy
            </a>
            <a href='#' className='hover:text-white'>
              Privacy
            </a>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
