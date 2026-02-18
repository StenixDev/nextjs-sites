import { MapPin, Phone, Mail } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import alignable from '@/public/alignable.webp';

import { CONTACT_INFO } from '@/data/siteData';
import Image from 'next/image';

export default function Contact() {
  return (
    <section id='contact' className='py-16 md:py-24 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          title='Contact Us'
          subtitle='Get in touch with Patriotic Hearts'
        />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <div className='space-y-6'>
            <Card className='h-full'>
              <h3 className='text-xl font-serif font-bold text-patriotic-navy mb-6'>
                Contact Information
              </h3>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <MapPin className='h-6 w-6 text-patriotic-red mr-3 shrink-0 mt-0.5' />
                  <div>
                    <p className='font-medium text-gray-900'>Address</p>
                    <p className='text-gray-600'>{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <Phone className='h-6 w-6 text-patriotic-red mr-3 shrink-0' />
                  <div>
                    <p className='font-medium text-gray-900'>Phone</p>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className='text-gray-600 hover:text-patriotic-navy'
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className='flex items-center'>
                  <Mail className='h-6 w-6 text-patriotic-red mr-3 shrink-0' />
                  <div>
                    <p className='font-medium text-gray-900'>Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className='text-gray-600 hover:text-patriotic-navy'
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className='mt-8 pt-6 border-t border-gray-200 flex justify-center'>
                <Image src={alignable} alt='Highly Recommended by locals' />
              </div>
            </Card>
          </div>

          <div className='space-y-6'>
            <Card className='h-full'>
              <h3 className='text-xl font-serif font-bold text-patriotic-navy mb-6'>
                Legal Status and Tax-Exempt Status
              </h3>
              <div className='space-y-5'>
                <p>
                  <b>Patriotic Hearts Inc.</b> is recognized as a tax-exempt
                  organization under Section <b>501(c)(3)</b> of the Internal
                  Revenue Code, meaning that the organization is exempt from
                  federal income taxes on income related to its charitable,
                  educational, or other tax-exempt purposes.{' '}
                </p>
                <b className='block'>Accounting Policies</b>

                <b className='block'>Basis of Accounting </b>
                <p>
                  The financial statements of <b>Patriotic Hearts Inc.</b> have
                  been prepared in conformity with{' '}
                  <b>Generally Accepted Accounting Principles (GAAP)</b>
                </p>
                <div className=' flex justify-center'>
                  <iframe
                    src='https://www.youtube.com/embed/Wc5mfS6RJQg'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  ></iframe>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
