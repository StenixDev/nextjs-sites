'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/siteData';
import Button from '@/components/ui/Button';
import Logo from '@/public/PH-LOGO.png';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-patriotic-navy text-white sticky top-0 z-50 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='shrink-0'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='w-10 h-10  rounded-full flex items-center justify-center'>
                <span className='text-white font-serif font-bold text-xl'>
                  <Image src={Logo} alt='PatrioticHearts' />
                </span>
              </div>
              <span className='font-serif font-bold text-xl hidden sm:block'>
                Patriotic Hearts
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='hover:text-patriotic-red px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Donate Button */}
          <div className='hidden md:block'>
            <Button variant='primary' size='sm' href='#donate'>
              Donate Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md hover:text-patriotic-red hover:bg-blue-800 focus:outline-none'
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='md:hidden bg-blue-900'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='hover:text-patriotic-red block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200'
              >
                {link.label}
              </Link>
            ))}
            <div className='pt-4 pb-2'>
              <Button
                variant='primary'
                size='sm'
                href='#donate'
                className='w-full justify-center'
                onClick={() => setIsOpen(false)}
              >
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
