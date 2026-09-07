import "../styles/vendor/bootstrap.min.css";
import "../styles/vendor/owl.carousel.min.css";
import "../styles/vendor/owl.theme.default.min.css";
import "../styles/vendor/animate.min.css";
import "../styles/vendor/smooth-scrollbar.css";
import "../styles/vendor/lightbox.min.css";
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/scroll-reveal.css";
import "../styles/pdf-carousel.css";

import PageLoader from "../components/PageLoader";

export const metadata = {
  metadataBase: new URL("https://agneshjha.in"),
  title:
    "Agnesh Jha | Senior UI Visual Designer at MyOperator & Heyo (Assistant Manager)",
  description:
    "I'm a Senior UI Visual Designer at MyOperator and Heyo, with 10+ years of experience designing clean, user-friendly websites, landing pages, and digital assets.",
  keywords:
    "Agnesh Jha, AgneshJha, JhaAgnesh, Senior UI Visual Designer at MyOperator & Heyo (Assistant Manager), Paid Ads Specialist, Online Growth, Google Ads, Meta Ads",
  authors: [{ name: "Agnesh Jha" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  icons: { icon: "/assets/images/new/favicon.ico" },
  openGraph: {
    title:
      "Agnesh Jha | Senior UI Visual Designer at MyOperator & Heyo (Assistant Manager)",
    description:
      "I'm a Senior UI Visual Designer at MyOperator and Heyo, with 10+ years of experience designing clean, user-friendly websites, landing pages, and digital assets.",
    url: "https://agneshjha.in/",
    type: "website",
    images: ["https://agneshjha.in/agnesh-jha.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Agnesh Jha | Senior UI Visual Designer at MyOperator & Heyo (Assistant Manager)",
    description:
      "I'm a Senior UI Visual Designer at MyOperator and Heyo, with 10+ years of experience designing clean, user-friendly websites, landing pages, and digital assets.",
    images: ["https://agneshjha.in/agnesh-jha.jpeg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Agnesh Jha",
  url: "https://agneshjha.in/",
  image: "https://agneshjha.in/images/new/agnesh.png",
  jobTitle:
    "Senior UI Visual Designer at MyOperator & Heyo (Assistant Manager)",
  worksFor: {
    "@type": "Organization",
    name: "MyOperator",
    url: "https://myoperator.com/",
  },
  sameAs: [
    "https://www.linkedin.com/in/agneshjha",
    "https://www.behance.net/agneshjha",
    "https://twitter.com/agneshjha1",
    "https://www.instagram.com/ajdesign07/",
  ],
  description:
    "Agnesh Jha is a Senior UI Visual Designer at MyOperator & Heyo (Assistant Manager) with over 10 years of experience, specializing in user interface and visual design.",
  address: {
    "@type": "PostalAddress",
    addressLocality:
      "A-180, Jhaas House, Street no-27, Bharat Vihar, Raja Puri Road, Uttam Nagar, ND-59",
    addressRegion: "Delhi",
    addressCountry: "India",
  },
  email: "agneshjha07@gmail.com",
  telephone: "+91 98997 33658",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
