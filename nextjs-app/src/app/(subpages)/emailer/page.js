import EmailerContent from './EmailerContent';

const description =
  'Explore high-converting emailer designs by Agnesh Jha. Get inspired by clean, professional UI/UX-driven email templates that boost engagement';

export const metadata = {
  title: 'Emailer Showcase | Agnesh Jha – Creative Campaigns & UI/UX Designs',
  description,
  openGraph: {
    title: 'Emailer Showcase | Agnesh Jha – Creative Campaigns & UI/UX Designs',
    description,
    images: ['https://agneshjha.in/assets/images/emailer/email-banner.png'],
  },
  twitter: {
    title: 'Emailer Showcase | Agnesh Jha – Creative Campaigns & UI/UX Designs',
    description,
    images: ['https://agneshjha.in/assets/images/emailer/email-banner.png'],
  },
};

export default function EmailerPage() {
  return <EmailerContent />;
}
