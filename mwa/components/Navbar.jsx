'use client';

import { useState } from 'react';
import { Arrow, Menu, Star } from './Icons';

import Logo from '@/assets/MWA-Logo.png';
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className='absolute inset-x-0 top-0 z-50 border-b border-white/15 text-white'>
      <nav
        className='mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10'
        aria-label='Main navigation'
      >
        <a
          href='#'
          className='flex items-center gap-3'
          aria-label='United Forward home'
        >
          <Image src={Logo} alt='Military Widows Advocacy' width={70} />
          <span className='text-[15px] font-bold uppercase tracking-[.18em]'>
            Military <span className='text-[#f16873]'>Widows</span> Advocacy
          </span>
        </a>
        <div className='hidden items-center gap-9 text-sm font-semibold md:flex'>
          <a className='transition hover:text-white/70' href='#mission'>
            Our Mission
          </a>
          <a className='transition hover:text-white/70' href='#priorities'>
            Advocacy
          </a>

          <a
            className='flex items-center gap-2 rounded-full bg-white px-5 py-3 text-navy transition hover:bg-cream'
            href='#join'
          >
            Get Personal Job Advocacy <Arrow className='h-4 w-4' />
          </a>
        </div>
        <button
          className='grid h-10 w-10 place-items-center rounded-full border border-white/30 md:hidden'
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label='Toggle navigation'
        >
          <Menu className='h-5 w-5' />
        </button>
      </nav>
      {open && (
        <div className='border-t border-white/15 bg-navy px-5 py-5 md:hidden'>
          <div className='flex flex-col gap-4 text-sm font-semibold'>
            <a onClick={() => setOpen(false)} href='#mission'>
              Our Mission
            </a>
            <a onClick={() => setOpen(false)} href='#priorities'>
              Advocacy
            </a>

            <a
              onClick={() => setOpen(false)}
              href='#join'
              className='mt-1 text-[#ff7b85]'
            >
              Get Personal Job Advocacy →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
