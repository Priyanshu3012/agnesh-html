import SocialMediaContent from './SocialMediaContent';

const description =
  'Browse social media creatives, reels, and ad campaigns by Agnesh Jha. Discover high-impact visual storytelling crafted for digital engagement and brand visibility.';

export const metadata = {
  title: 'Social Media Portfolio | Agnesh Jha – Creative Visual Campaigns',
  description,
  openGraph: {
    title: 'Social Media Portfolio | Agnesh Jha – Creative Visual Campaigns',
    description,
    images: ['https://agneshjha.in/assets/images/social-media/social-media-banner.png'],
  },
  twitter: {
    title: 'Social Media Portfolio | Agnesh Jha – Creative Visual Campaigns',
    description,
    images: ['https://agneshjha.in/assets/images/social-media/social-media-banner.png'],
  },
};

export default function SocialMediaPage() {
  return <SocialMediaContent />;
}
