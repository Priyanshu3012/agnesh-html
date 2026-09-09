'use client';

import MobileMenu from '../components/MobileMenu';
import ScrollNav from '../components/ScrollNav';
import LeftSidebar from '../components/LeftSidebar';
import TestimonialCarousel from '../components/TestimonialCarousel';
import LightboxThumb from '../components/LightboxThumb';
import { LightboxProvider } from '../components/LightboxContext';
import LatestProjectShowcase from '../components/LatestProjectShowcase';
import useScrollSpy from '../hooks/useScrollSpy';
import useScrollAnimations from '../hooks/useScrollAnimations';

const NAV_ITEMS = [
  { href: '#home', label: 'Home', icon: 'las la-home' },
  { href: '#about', label: 'About Us', icon: 'lar la-user' },
  { href: '#portfolio', label: 'Portfolio', icon: 'las la-briefcase' },
  { href: '#experience', label: 'Experience', icon: 'las la-laptop' },
  { href: '#tools', label: 'Tools', icon: 'las la-tools' },
  { href: '#awards', label: 'Awards', icon: 'las la-award' },
  { href: '#testimonials', label: 'Testimonials', icon: 'lar la-comment' },
  { href: '#freelance-clients', label: 'Freelance Clients', icon: 'las la-user-tie' },
  { href: '#contact', label: 'Contact', icon: 'las la-smile' },
];

const AWARD_IMAGE = [{ src: '/assets/images/award.jpg', alt: '' }];

const TESTIMONIALS = [
  {
    name: 'Ashish Jajli',
    avatar: '/assets/images/ashish.png',
    role: 'AVP of Strategic Alliances & Partnerships at MyOperator',
    quote:
      '“Agnesh is an outstanding UI designer with a keen eye for detail and a keen sense of current trends. His work consistently exceeds expectations, and he’s a true asset to any team. Highly recommended!”',
  },
  {
    name: 'Rajan Singh',
    avatar: '/assets/images/rajansingh.png',
    role: 'Channels manager, Myoperator',
    quote:
      '“Agnesh is one of the most intuitive UI visual designers I’ve met. He involves you in the process, explains his decisions, and welcomes feedback.”',
  },
  {
    name: 'Sanadh Srivastava',
    avatar: '/assets/images/sanadh.png',
    role: 'Leading Growth at Heyo Phone & MyOperator',
    quote:
      '“He has an instinct for UI visual design. What truly stands out is his collaborative approach—he explains his design choices clearly and welcomes feedback at every step.”',
  },
  {
    name: 'Yogesh Kumar',
    avatar: '/assets/images/yogesh.png',
    role: null,
    quote:
      "“I've worked with Agnesh on a couple of projects now and really value his skills and abilities. He is confident and capable offering exceptional product design work. He is quick in turning things around and very easy to collaborate with which makes working with him seamless.”",
  },
  {
    name: 'Narender Kumar',
    avatar: '/assets/images/narender.png',
    role: 'SaaS & Technical SEO Expert | 200% Traffic Growth Achiever | Helping Businesses Scale Organically',
    quote:
      '“Brilliant designer! Transformed our B2B brand with clean, powerful visuals. Always creative, professional, and fast. Highly recommended - SaaS SEO Manager”',
  },
];

const FREELANCE_LOGOS = [
  { src: '/assets/images/logo/am2pm-white.png', alt: 'am2pm', anim: 'fade_from_left' },
  { src: '/assets/images/logo/bookingbyte-white.png', alt: 'bookingbyte', anim: 'fade_from_bottom' },
  { src: '/assets/images/logo/cabsetgo-white.png', alt: 'cabsetgo', anim: 'fade_from_top' },
  { src: '/assets/images/logo/chocosmooche-white.png', alt: 'chocosmooche', anim: 'fade_from_right' },
  { src: '/assets/images/logo/darkins-white.png', alt: 'darkins', anim: 'fade_from_left' },
  { src: '/assets/images/logo/rkmalik-white.png', alt: 'rkmalik', anim: 'fade_from_bottom' },
  { src: '/assets/images/logo/touchbase-white.png', alt: 'touchbase', anim: 'fade_from_top' },
  { src: '/assets/images/logo/induswellnesshub-white.png', alt: 'induswellnesshub', anim: 'fade_from_right' },
];

export default function HomeContent() {
  const activeIndex = useScrollSpy(NAV_ITEMS.length);
  useScrollAnimations();

  return (
    <LightboxProvider>
      <MobileMenu navItems={NAV_ITEMS} activeIndex={activeIndex} />
      <ScrollNav navItems={NAV_ITEMS} activeIndex={activeIndex} />
      <LeftSidebar photoSrc="/agnesh-jha.jpeg" showResumeButton={false} />

      <main className="drake-main">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <LeftSidebar photoSrc="/agnesh-jha.jpeg" showResumeButton={false} />
            <section className="hero-section page-section scroll-to-page" id="home">

              <div className="custom-container">
                <div className="hero-content content-width" id="about">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      Introduce 🏠
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">Hello, I’m <span>Agnesh
                      Jha</span> and I am a Senior UI Visual Designer with 10 years of design experience, including 7 years in graphic design and 3+ years in UI/Visual design. I specialize in creating intuitive, user-focused designs that balance creativity with functionality.
                    </h1>
                  </div>
                  <p className="scroll-animation" data-animation="fade_from_bottom">Currently, I manage design projects across two brands —  <a href="https://myoperator.com/" target="_blank" rel="noreferrer"
                    style={{ color: '#28e98c' }}><u>MyOperator.com </u></a> and <a
                      href="https://www.heyophone.com/" target="_blank" rel="noreferrer"
                      style={{ color: '#28e98c' }}><u>HeyoPhone.com</u></a>. My role involves leading teams and overseeing websites, landing pages, blogs, marketing collaterals, sales decks, and paid ad creatives — ensuring brand consistency and delivering engaging user experiences.</p>
                  <p className="scroll-animation" data-animation="fade_from_bottom">I am passionate about transforming ideas into impactful designs that not only look great but also solve real user problems.</p>
                  <a href="#portfolio" className="go-to-project-btn scroll-to scroll-animation"
                    data-animation="rotate_up">
                    <img src="/assets/images/round-text.png" alt="Rounded Text" />
                    <i className="las la-arrow-down" />
                  </a>

                  <div className="facts d-flex">
                    <div className="left scroll-animation" data-animation="fade_from_left">
                      <h1>10+</h1>
                      <p>Years of Experience</p>
                    </div>
                    <div className="right scroll-animation" data-animation="fade_from_right">
                      <h1>100+</h1>
                      <p>projects completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="portfolio-area page-section scroll-to-page" id="portfolio">
              <div className="custom-container">
                <div className="portfolio-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      portfolio 💼
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">Featured
                      <span>Projects</span>
                    </h1>
                  </div>

                  <div className="row portfolio-items">
                    <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                      <div className="portfolio-item portfolio-full">
                        <div className="portfolio-item-inner">
                          <a href="/portfolio">
                            <img src="/assets/images/portfolio2.png" alt="Website Revamp Homepage" />
                          </a>

                        </div>
                        <h2><span>Website Revamp Homepage</span></h2>
                      </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-animation="fade_from_left">
                      <div className="portfolio-item portfolio-half">
                        <div className="portfolio-item-inner">
                          <a href="/sales-deck">
                            <img src="/assets/images/new/sales-deck.png" alt="Portfolio" />
                          </a>

                          <img src="/assets/images/portfolio2.jpg" alt="Portfolio" />

                        </div>
                        <h2><span>Sales Deck</span></h2>
                      </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-animation="fade_from_right">
                      <div className="portfolio-item portfolio-half">
                        <div className="portfolio-item-inner">
                          <a href="/emailer">
                            <img src="/assets/images/new/email.png" alt="Portfolio" />
                          </a>
                        </div>
                        <h2><span>Emailers</span></h2>
                      </div>
                    </div>

                    <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                      <div className="portfolio-item portfolio-half">
                        <div className="portfolio-item-inner">
                          <a href="/social-media">
                            <img src="/assets/images/new/social-media-ads.png" alt="portfolio" />
                          </a>
                        </div>
                        <h2><span>Social Media Paid Ads</span></h2>
                      </div>
                    </div>

                    <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                      <div className="portfolio-item portfolio-half">
                        <div className="portfolio-item-inner">
                          <a href="/blog">
                            <img src="/assets/images/new/infographic.png" alt="portfolio" />
                          </a>
                        </div>
                        <h2><span>Infographic</span></h2>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            <section className="latest-work-area page-section scroll-to-page" id="latest-work">
              <div className="custom-container">
                <div className="portfolio-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      Latest Project 🆕
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">Fresh off the <span>desk</span>
                    </h1>
                  </div>

                  <LatestProjectShowcase />
                </div>
              </div>
            </section>

            <section className="services-area page-section scroll-to-page" id="services">
              <div className="custom-container">
                <div className="services-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      Ways of working 💡
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">Skills that I use to
                      create world-class <span>products</span></h1>
                  </div>

                  <div className="services-items">
                    <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                      <h2>Website Design</h2>
                      <p> I design innovative, user-centric digital products with Figma and XD</p>
                    </div>
                    <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                      <h2>UI-UX Design</h2>
                      <p>Delivering seamless, user-driven digital experiences that elevate brands.</p>
                    </div>
                    <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                      <h2>Wireframes</h2>
                      <p>Structure ideas with a clear, functional layout.</p>
                    </div>
                    <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                      <h2>Prototyping</h2>
                      <p>Quick validation through interactive previews.</p>
                    </div>
                    <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                      <h2>Mockups</h2>
                      <p>High-fidelity visuals before development.</p>
                    </div>
                    <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                      <h2>User Flows</h2>
                      <p>Map intuitive journeys for better usability.</p>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            <section className="about-area page-section scroll-to-page" id="awards">
              <div className="custom-container">
                <div className="about-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      Awards ⭐
                    </h4>
                    <h1 className="scroll-animation award" data-animation="fade_from_bottom">MyOperator: Awards
                      &amp; Recognitions In 2023 (An Awardsome Year)<br />
                      Twin Win At <span>Brand Storyz Awards By Afaqs</span></h1>
                  </div>
                  <p className="scroll-animation" data-animation="fade_from_bottom" style={{ maxWidth: '100%' }}>
                    🔹MyOperator won “Best Blog/Articles” award in the silver category.<br />
                    🔹Heyo Phone won the “Best user-generated content” award in the gold category.</p>

                  <div className="award-container text-center">
                    <LightboxThumb group={AWARD_IMAGE} index={0}>
                      <img src="/assets/images/award.jpg" alt="" />
                    </LightboxThumb>
                    <a href="https://myoperator.com/blog/myoperators-achievements#:~:text=Quality%20of%20Service.-,MyOperator%3A%20Awards%20%26%20Recognitions%20In%202023%20(An%20Awardsome%20Year),-Twin%20Win%20At"
                      target="_blank" rel="noreferrer" style={{ color: '#fff', marginTop: '10px', display: 'block' }}>Myoperator
                      award</a>
                  </div>
                </div>
              </div>
            </section>

            <section className="testimonial-area page-section scroll-to-page" id="testimonials">
              <div className="custom-container">
                <div className="testimonial-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      What People Say ⭐
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">Feedback from
                      <span>clients</span> and <span>colleagues</span> I&apos;ve had the pleasure to work with
                    </h1>
                  </div>

                  <TestimonialCarousel items={TESTIMONIALS} />

                </div>
              </div>
            </section>
            <section className="Clients-area page-section scroll-to-page" id="freelance-clients">
              <div className="custom-container">
                <div className="testimonial-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      Freelance Clients 🤝
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom"> <span>Brands &amp;
                      Businesses</span> I&apos;ve Partnered With</h1>
                  </div>

                  <div className="clients-logos">
                    <div className="row align-items-center">
                      {FREELANCE_LOGOS.map((logo) => (
                        <div key={logo.src} className="col-md-3 scroll-animation" data-animation={logo.anim}>
                          <img src={logo.src} alt={logo.alt} />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </section>
            <section className="contact-area page-section scroll-content" id="contact" style={{ paddingTop: '100px' }}>
              <div className="custom-container">
                <div className="contact-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      contact 🙋🏻‍♂️
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">Let&apos;s Work
                      <span>Together!</span>
                    </h1>
                  </div>
                  <a href="mailto:agneshjha07@gmail.com" target="_blank" rel="noreferrer">
                    <h3 className="scroll-animation" style={{ marginBottom: '20px' }}
                      data-animation="fade_from_bottom"><i className="las la-sms" style={{ color: '#28e98c' }} />
                      &nbsp;Agneshjha07@gmail.com</h3>
                  </a>
                  <a href="https://wa.link/8rntvr" target="_blank" rel="noreferrer">
                    <h3 className="scroll-animation" data-animation="fade_from_bottom"><i
                      className="lab la-whatsapp" style={{ color: '#28e98c' }} /> &nbsp;98997 33658</h3>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </LightboxProvider>
  );
}
