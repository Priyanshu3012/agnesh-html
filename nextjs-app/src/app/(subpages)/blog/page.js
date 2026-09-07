import BlogContent from './BlogContent';

export const metadata = {
  title: 'Blog | Agnesh Jha – UI/UX, Branding & Digital Marketing Insights',
  description:
    'Explore the latest insights, strategies, and case studies in branding, digital marketing, business growth, and personal development by Agnesh Jha.',
  openGraph: {
    title: 'Blog | Agnesh Jha – UI/UX, Branding & Digital Marketing Insights',
    description:
      'Explore the latest insights, strategies, and case studies in branding, digital marketing, business growth, and personal development by Agnesh Jha.',
    images: ['https://agneshjha.in/assets/images/blog/blog-banner.png'],
  },
  twitter: {
    title: 'Blog | Agnesh Jha – UI/UX, Branding & Digital Marketing Insights',
    description:
      'Explore the latest insights, strategies, and case studies in branding, digital marketing, business growth, and personal development by Agnesh Jha.',
    images: ['https://agneshjha.in/assets/images/blog/blog-banner.png'],
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
