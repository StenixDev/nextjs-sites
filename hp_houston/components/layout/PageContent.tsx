import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';

import { ReactNode } from 'react';

type PageContentProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
};
function PageContent({ children, title, subtitle }: PageContentProps) {
  return (
    <section className='py-16 md:py-24 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading title={title} subtitle={subtitle} />

        <div>
          <div>
            <Card className='h-full space-y-6'>{children}</Card>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PageContent;
