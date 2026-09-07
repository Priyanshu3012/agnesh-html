import SalesDeckContent from './SalesDeckContent';

const description =
  'Discover high-performing sales creatives, landing pages, and campaigns by Agnesh Jha. Tailored to boost conversions, drive engagement, and scale business results.';

export const metadata = {
  title: 'Sales Portfolio | Agnesh Jha – Conversion-Focused Design & Campaigns',
  description,
  openGraph: {
    title: 'Sales Portfolio | Agnesh Jha – Conversion-Focused Design & Campaigns',
    description,
    images: ['https://agneshjha.in/assets/images/sales/sales-banner.png'],
  },
  twitter: {
    title: 'Sales Portfolio | Agnesh Jha – Conversion-Focused Design & Campaigns',
    description,
    images: ['https://agneshjha.in/assets/images/sales/sales-banner.png'],
  },
};

export default function SalesDeckPage() {
  return <SalesDeckContent />;
}
