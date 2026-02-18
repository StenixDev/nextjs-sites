'use client';

import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Phone,
  MapPin,
  Mail,
} from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/data/siteData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
};

export default function Footer() {
  return (
    <footer className='bg-patriotic-navy text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* About Section */}
          <div className='lg:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-10 h-10 bg-patriotic-red rounded-full flex items-center justify-center'>
                <span className='text-white font-serif font-bold text-xl'>
                  PH
                </span>
              </div>
              <span className='font-serif font-bold text-xl'>
                Patriotic Hearts
              </span>
            </div>
            <p className='text-gray-300 mb-4'>
              A non-profit organization dedicated to assisting US Military,
              Veterans, and their families in having happy, successful, and
              fulfilling lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-serif font-bold text-lg mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-300 hover:text-patriotic-red transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/#about'
                  className='text-gray-300 hover:text-patriotic-red transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/#programs'
                  className='text-gray-300 hover:text-patriotic-red transition-colors'
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href='/#contact'
                  className='text-gray-300 hover:text-patriotic-red transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='font-serif font-bold text-lg mb-4'>Contact Us</h3>
            <ul className='space-y-3'>
              <li className='flex items-start space-x-3'>
                <MapPin className='h-5 w-5 text-patriotic-red shrink-0 mt-0.5' />
                <span className='text-gray-300 text-sm'>
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className='flex items-center space-x-3'>
                <Phone className='h-5 w-5 text-patriotic-red shrink-0' />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className='text-gray-300 hover:text-patriotic-red transition-colors'
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className='flex items-center space-x-3'>
                <Mail className='h-5 w-5 text-patriotic-red shrink-0' />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className='text-gray-300 hover:text-patriotic-red transition-colors'
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className='mt-6'>
              <h4 className='font-medium mb-3'>Follow Us</h4>
              <div className='flex space-x-4'>
                {SOCIAL_LINKS.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-300 hover:text-patriotic-red transition-colors'
                      aria-label={social.name}
                    >
                      <Icon className='h-5 w-5' />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-8 pt-8 border-t border-blue-800'>
          <div className='flex flex-col md:flex-row justify-center  items-center'>
            Copyright © – 2025 PatrioticHearts. All rights Reserved Worldwide.
          </div>
        </div>
      </div>
    </footer>
  );
}
