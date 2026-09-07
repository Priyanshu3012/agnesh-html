"use client";

import LightboxThumb from "../../../components/LightboxThumb";
import ColorSwitcherPanel from "../../../components/ColorSwitcherPanel";
import useScrollAnimations from "../../../hooks/useScrollAnimations";

const PORTFOLIO_GALLERY = [
  { src: "/assets/images/old-homepage.png", alt: "Website Revamp Homepage" },
  { src: "/assets/images/pricing-page.png", alt: "Website Revamp Homepage" },
  { src: "/assets/images/product-page.png", alt: "Website Revamp Homepage" },
  {
    src: "/assets/images/ux-strategy-wireframes-1.png",
    alt: "UX STRATEGY & WIREFRAMES",
  },
  {
    src: "/assets/images/ux-strategy-wireframes-2.png",
    alt: "UX STRATEGY & WIREFRAMES",
  },
  {
    src: "/assets/images/after-revamp-changes-1.png",
    alt: "UX STRATEGY & WIREFRAMES",
  },
  {
    src: "/assets/images/after-revamp-changes-2.png",
    alt: "UX STRATEGY & WIREFRAMES",
  },
  {
    src: "/assets/images/after-revamp-changes-3.png",
    alt: "UX STRATEGY & WIREFRAMES",
  },
  {
    src: "/assets/images/after-revamp-changes-4.png",
    alt: "UX STRATEGY & WIREFRAMES",
  },
  { src: "/assets/images/old-icon.png", alt: "UX STRATEGY & WIREFRAMES" },
  { src: "/assets/images/revamp-icons.png", alt: "UX STRATEGY & WIREFRAMES" },
  {
    src: "/assets/images/old-navigation-menu.png",
    alt: "UX STRATEGY & WIREFRAMES",
  },
  {
    src: "/assets/images/revamp-navigarion-menu.png",
    alt: "UX STRATEGY & WIREFRAMES",
  },
  { src: "/assets/images/style-guide-1.png", alt: "UX STRATEGY & WIREFRAMES" },
  { src: "/assets/images/style-guide-2.png", alt: "UX STRATEGY & WIREFRAMES" },
  { src: "/assets/images/style-guide-3.png", alt: "UX STRATEGY & WIREFRAMES" },
  { src: "/assets/images/thank-you.png", alt: "Thank You" },
];

export default function PortfolioContent() {
  useScrollAnimations();

  return (
    <>
      <ColorSwitcherPanel />

      <section
        className="hero-section page-section scroll-to-page pb-0"
        id="home"
      >
        <div className="custom-container">
          <div className="hero-content content-width" id="about">
            <div className="section-header m-0">
              <div className="w-100">
                <img
                  src="/assets/images/home-banner.png"
                  alt="Agnesh Jha Logo"
                  className="W-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="portfolio-area page-section scroll-to-page"
        id="portfolio"
      >
        <div className="custom-container">
          <div className="portfolio-content content-width">
            <div className="section-header m-0">
              <div className="w-100 mb-5 point-heading-container">
                <p className="point-heading">Introduction</p>
              </div>
              <div className="w-100 introduction-container">
                <div
                  className="intro-company-card"
                  data-animation="fade_from_bottom"
                >
                  <h3>Company</h3>
                  <img src="/assets/images/myoperator.png" alt="MyOperator" />
                  <p>MyOperator Cloud based call management system</p>
                </div>
                <div
                  className="intro-company-card"
                  data-animation="fade_from_bottom"
                >
                  <h3>Role</h3>
                  <img src="/assets/images/Role.png" alt="Role" />
                  <p>Creative UI/Visual Designer (Assistant Manager)</p>
                </div>
                <div
                  className="intro-company-card"
                  data-animation="fade_from_bottom"
                >
                  <h3>Duration</h3>
                  <img src="/assets/images/Duration.png" alt="Duration" />
                  <p>June 2025 – July 2025 (Research, audit, testing, live)</p>
                </div>
                <div
                  className="intro-company-card"
                  data-animation="fade_from_bottom"
                >
                  <h3>Team</h3>
                  <img src="/assets/images/Team.png" alt="Team" />
                  <p>DesignTeam, Product, Marketing, Developers</p>
                </div>
                <div
                  className="intro-company-card"
                  data-animation="fade_from_bottom"
                >
                  <h3>Tools Used</h3>
                  <img src="/assets/images/Tools-used.png" alt="Tools Used" />
                  <p>Figma, Illustrator, Photoshop, ChatGPT, Zeplin</p>
                </div>
              </div>
              <div className="w-100 mt-5 mb-7">
                <div
                  className="w-100 row m-0 mb-4"
                  data-animation="fade_from_bottom"
                >
                  <div className="col-lg-3 objective-box">
                    <p className="point-heading">Objective</p>
                  </div>
                  <div className="col-lg-9 objective-box">
                    <p className="para-gray">
                      The goal of the redesign was to improve the navigation and
                      visual style of the site, thereby increasing conversion.
                    </p>
                  </div>
                </div>
                <div
                  className="w-100 row m-0 mb-lg-7 mb-4"
                  data-animation="fade_from_bottom"
                >
                  <div className="col-lg-3 competitors-box">
                    <p className="point-heading">Competitors</p>
                  </div>
                  <div className="col-lg-9 competitors-box">
                    <p className="para-gray">
                      Exotel, Knowlarity, Telecmi, Ozonetel and freshdesk
                    </p>
                  </div>
                </div>
              </div>
              <div className="row m-0 mb-lg-7">
                <div className="col-lg-3 d-flex align-items-center problem-statement-box">
                  <p className="point-heading">
                    Problem statement <br />
                    <span
                      style={{
                        color: "#575757",
                        marginTop: 5,
                        display: "inline-block",
                        marginLeft: 15,
                      }}
                    >
                      (Old Website Issues)
                    </span>
                  </p>
                </div>
                <div className="col-lg-9 row m-0 p-0">
                  <div className="col-lg-6 p-0 problem-statement-1">
                    <div className="statement-box left">
                      <h3>Pain Point</h3>
                      <div className="d-flex align-items-center problem-statement-items">
                        <img
                          src="/assets/images/point-icon.png"
                          alt="Pain Point"
                        />
                        <p className="m-0">Outdated Visuals</p>
                      </div>
                      <div className="d-flex align-items-center problem-statement-items">
                        <img
                          src="/assets/images/point-icon.png"
                          alt="Pain Point"
                        />
                        <p className="m-0">Weak Content Hierarchy</p>
                      </div>
                      <div className="d-flex align-items-center problem-statement-items">
                        <img
                          src="/assets/images/point-icon.png"
                          alt="Pain Point"
                        />
                        <p className="m-0">Unresponsive Layout</p>
                      </div>
                      <div className="d-flex align-items-center problem-statement-items">
                        <img
                          src="/assets/images/point-icon.png"
                          alt="Pain Point"
                        />
                        <p className="m-0">Low Trust Elements</p>
                      </div>
                      <div className="d-flex align-items-center problem-statement-items">
                        <img
                          src="/assets/images/point-icon.png"
                          alt="Pain Point"
                        />
                        <p className="m-0">Weak CTA Engagement</p>
                      </div>
                      <div className="d-flex align-items-center problem-statement-items">
                        <img
                          src="/assets/images/point-icon.png"
                          alt="Pain Point"
                        />
                        <p className="m-0">SEO + Speed Issues</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0 problem-statement-2">
                    <div className="statement-box right">
                      <h3>Description</h3>
                      <div className="d-flex align-items-center problem-statement-items">
                        <img
                          src="/assets/images/point-icon.png"
                          alt="Pain Point"
                        />
                        <p className="m-0">Old styling, small fonts</p>
                      </div>
                      <div className="d-flex align-items-center problem-statement-items">
                        <img
                          src="/assets/images/point-icon.png"
                          alt="Pain Point"
                        />
                        <p className="m-0">Dense layout</p>
                      </div>
                      <div className="d-flex align-items-center problem-statement-items">
                        <img
                          src="/assets/images/point-icon.png"
                          alt="Pain Point"
                        />
                        <p className="m-0">Poor mobile experience</p>
                      </div>
                      <div className="d-flex align-items-center problem-statement-items">
                        <img
                          src="/assets/images/point-icon.png"
                          alt="Pain Point"
                        />
                        <p className="m-0">No team/social proof visible</p>
                      </div>
                      <div className="d-flex align-items-center problem-statement-items">
                        <img
                          src="/assets/images/point-icon.png"
                          alt="Pain Point"
                        />
                        <p className="m-0">CTAs not prominent</p>
                      </div>
                      <div className="d-flex align-items-center problem-statement-items">
                        <img
                          src="/assets/images/point-icon.png"
                          alt="Pain Point"
                        />
                        <p className="m-0">Slow loading, outdated structure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-box-container">
                <div className="image-box">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={0}>
                    <img
                      src="/assets/images/old-homepage.png"
                      alt="Website Revamp Homepage"
                    />
                  </LightboxThumb>
                  <div className="ag-tags">Old Homepage</div>
                </div>
                <div className="image-box">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={1}>
                    <img
                      src="/assets/images/pricing-page.png"
                      alt="Website Revamp Homepage"
                    />
                  </LightboxThumb>
                  <div className="ag-tags">Old Homepage</div>
                </div>
                <div className="image-box">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={2}>
                    <img
                      src="/assets/images/product-page.png"
                      alt="Website Revamp Homepage"
                    />
                  </LightboxThumb>
                  <div className="ag-tags">Old Homepage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="portfolio-area page-section scroll-to-page p-0"
        id="portfolio"
      >
        <div className="custom-container">
          <div className="portfolio-content content-width">
            <div className="section-header m-0">
              <div className="row m-0 mb-5">
                <div className="col-lg-3 goals-box">
                  <p className="point-heading">Goals for the Redesign</p>
                </div>
                <div className="col-lg-3 goals-box">
                  <div className="d-flex align-items-center problem-statement-items mb-5">
                    <img src="/assets/images/point-icon.png" alt="Pain Point" />
                    <p className="m-0">
                      Make the UI clean, modern, and scalable
                    </p>
                  </div>
                  <div className="d-flex align-items-center problem-statement-items">
                    <img src="/assets/images/point-icon.png" alt="Pain Point" />
                    <p className="m-0">
                      Add clear, repeated CTAs (like &quot;Get Demo&quot;)
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 goals-box">
                  <div className="d-flex align-items-center problem-statement-items mb-5">
                    <img src="/assets/images/point-icon.png" alt="Pain Point" />
                    <p className="m-0">
                      Highlight key products and services clearly
                    </p>
                  </div>
                  <div className="d-flex align-items-center problem-statement-items">
                    <img src="/assets/images/point-icon.png" alt="Pain Point" />
                    <p className="m-0">
                      Use branding consistently (colors, icons, illustrations)
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 goals-box">
                  <div className="d-flex align-items-center problem-statement-items mb-5">
                    <img src="/assets/images/point-icon.png" alt="Pain Point" />
                    <p className="m-0">
                      Improve information hierarchy and user flow
                    </p>
                  </div>
                  <div className="d-flex align-items-center problem-statement-items">
                    <img src="/assets/images/point-icon.png" alt="Pain Point" />
                    <p className="m-0">
                      Improve mobile responsiveness and loading speed
                    </p>
                  </div>
                </div>
              </div>

              <div className="row m-0 mb-5">
                <div className="col-lg-4 px-0">
                  <p className="point-heading">UX STRATEGY &amp; WIREFRAMES</p>
                </div>
                <div className="col-lg-8 px-0">
                  <div className="ag-ux-wireframes-container">
                    <div className="w-50">
                      <div className="ag-ux-wireframes-container-item">
                        <span>01</span>
                        <h3>Discover</h3>
                      </div>
                    </div>
                    <div className="w-50">
                      <div className="ag-ux-wireframes-text">
                        Identifying user issues target audience analysis
                        studying the competition
                      </div>
                    </div>
                  </div>
                  <div className="ag-ux-wireframes-container">
                    <div className="w-50">
                      <div className="ag-ux-wireframes-container-item">
                        <span>02</span>
                        <h3>Wireframing Sitemap</h3>
                      </div>
                    </div>
                    <div className="w-50">
                      <div className="ag-ux-wireframes-text">
                        Create wireframes Create site map
                      </div>
                    </div>
                  </div>
                  <div className="ag-ux-wireframes-container">
                    <div className="w-50">
                      <div className="ag-ux-wireframes-container-item">
                        <span>03</span>
                        <h3>Visual Design Development</h3>
                      </div>
                    </div>
                    <div className="w-50">
                      <div className="ag-ux-wireframes-text">
                        IDesign visual elements develop the website
                      </div>
                    </div>
                  </div>
                  <div className="ag-ux-wireframes-container">
                    <div className="w-50">
                      <div className="ag-ux-wireframes-container-item">
                        <span>04</span>
                        <h3>Testing</h3>
                      </div>
                    </div>
                    <div className="w-50">
                      <div className="ag-ux-wireframes-text">
                        Test the website for usability, perfomance, and
                        accessibility
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" m-0 ux-strategy-wireframesux-row">
                <div className=" ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={3}>
                    <img
                      src="/assets/images/ux-strategy-wireframes-1.png"
                      alt="UX STRATEGY & WIREFRAMES"
                    />
                  </LightboxThumb>
                </div>
                <div className="ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={4}>
                    <img
                      src="/assets/images/ux-strategy-wireframes-2.png"
                      alt="UX STRATEGY & WIREFRAMES"
                    />
                  </LightboxThumb>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="portfolio-area page-section scroll-to-page"
        id="portfolio"
      >
        <div className="custom-container">
          <div className="portfolio-content content-width">
            <div className="section-header m-0">
              <div className="row m-0 mb-5 point-heading-container">
                <div className="col-lg-12 px-0">
                  <p className="point-heading">
                    User Persona / Target Audience
                  </p>
                </div>
              </div>
              <div className="row m-0 mb-0 user-persona-container">
                <div className="col-lg-4 first-column">
                  <img
                    src="/assets/images/shalini-sharma.png"
                    alt="User Persona"
                  />
                </div>
                <div className="col-lg-4 second-column">
                  <div className="w-100 user-persona-content">
                    <h3>Shalini Sharma</h3>
                    <p className="text-user-persona">
                      Inspiring elegance everyday
                    </p>
                  </div>
                  <div className="w-100 user-persona-content">
                    <p className="text-user-persona">
                      <span>Age :</span> 30
                    </p>
                    <p className="text-user-persona">
                      <span>Location :</span> New Delhi
                    </p>
                    <p className="text-user-persona">
                      <span>Occupation :</span> IT Industry
                    </p>
                  </div>
                  <div className="w-100 user-persona-content">
                    <h3>Objectives</h3>
                    <p className="text-user-persona">
                      Simplifying the billing process for customers. Automatic
                      management of monthly expenses and income.
                    </p>
                  </div>
                  <div className="w-100 user-persona-content">
                    <h3>Frustrations</h3>
                    <p className="text-user-persona">
                      The stress caused by insufficient time for accounting
                      documents and frequent misunderstanding.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 pr-0 third-column">
                  <div className="w-100 user-persona-content">
                    <h3>Biography</h3>
                    <p className="text-user-persona">
                      Priya turned her passion for technology into a successful
                      career. She works as a software engineer in a leading IT
                      firm and collaborates with a focused, agile team. She is
                      detail-oriented and ensures all aspects of development and
                      deployment run smoothly.
                    </p>
                  </div>
                  <div className="w-100 user-persona-content">
                    <h3>Need</h3>
                    <p className="text-user-persona">
                      A streamlined platform to save time in project tracking
                      and task management. Quick access to real-time performance
                      reports for efficient decision-making.
                    </p>
                  </div>
                  <div className="w-100 user-persona-content">
                    <h3>Behavior</h3>
                    <p className="text-user-persona">
                      Uses productivity apps during short breaks between coding
                      or meetings. Prefers smart notifications for task updates
                      and sprint deadlines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="portfolio-area page-section scroll-to-page p-0"
        id="portfolio"
      >
        <div className="custom-container">
          <div className="portfolio-content content-width">
            <div className="section-header m-0">
              <div className="row m-0 mb-5 point-heading-container">
                <div className="col-lg-12 px-0">
                  <p className="point-heading">After revamp changes</p>
                </div>
              </div>
              <div className=" m-0 ux-strategy-wireframesux-row mb-3">
                <div className=" ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={5}>
                    <img
                      src="/assets/images/after-revamp-changes-1.png"
                      alt="UX STRATEGY & WIREFRAMES"
                    />
                  </LightboxThumb>
                </div>
                <div className="ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={6}>
                    <img
                      src="/assets/images/after-revamp-changes-2.png"
                      alt="UX STRATEGY & WIREFRAMES"
                    />
                  </LightboxThumb>
                </div>
              </div>
              <div className=" m-0 ux-strategy-wireframesux-row mb-5">
                <div className=" ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={7}>
                    <img
                      src="/assets/images/after-revamp-changes-3.png"
                      alt="UX STRATEGY & WIREFRAMES"
                    />
                  </LightboxThumb>
                </div>
                <div className="ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={8}>
                    <img
                      src="/assets/images/after-revamp-changes-4.png"
                      alt="UX STRATEGY & WIREFRAMES"
                    />
                  </LightboxThumb>
                </div>
              </div>
              <div className=" m-0 ux-strategy-wireframesux-row mb-5">
                <div className=" ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={9}>
                    <img
                      src="/assets/images/old-icon.png"
                      alt="UX STRATEGY & WIREFRAMES"
                    />
                  </LightboxThumb>
                </div>
                <div className="ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={10}>
                    <img
                      src="/assets/images/revamp-icons.png"
                      alt="UX STRATEGY & WIREFRAMES"
                    />
                  </LightboxThumb>
                </div>
              </div>
              <div className=" m-0 ux-strategy-wireframesux-row mb-5">
                <div className=" ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={11}>
                    <img
                      src="/assets/images/old-navigation-menu.png"
                      alt="UX STRATEGY & WIREFRAMES"
                    />
                  </LightboxThumb>
                </div>
                <div className="ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={12}>
                    <img
                      src="/assets/images/revamp-navigarion-menu.png"
                      alt="UX STRATEGY & WIREFRAMES"
                    />
                  </LightboxThumb>
                </div>
              </div>
              <div className="row m-0">
                <div className="col-lg-4 p-0 metric-box">
                  <div className="statement-box left">
                    <h3>Metric</h3>
                    <div className="d-flex align-items-center problem-statement-items">
                      <img src="/assets/images/point-icon.png" alt="Metric" />
                      <p className="m-0">CTA Click-Through Rate</p>
                    </div>
                    <div className="d-flex align-items-center problem-statement-items">
                      <img src="/assets/images/point-icon.png" alt="Metric" />
                      <p className="m-0">Page Load Time</p>
                    </div>
                    <div className="d-flex align-items-center problem-statement-items">
                      <img src="/assets/images/point-icon.png" alt="Metric" />
                      <p className="m-0">Bounce Rate</p>
                    </div>
                    <div className="d-flex align-items-center problem-statement-items">
                      <img src="/assets/images/point-icon.png" alt="Metric" />
                      <p className="m-0">Demo Requests</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 p-0 metric-box">
                  <div className="statement-box left">
                    <h3>Before</h3>
                    <div className="d-flex align-items-center problem-statement-items">
                      <img src="/assets/images/point-icon.png" alt="Before" />
                      <p className="m-0">Low</p>
                    </div>
                    <div className="d-flex align-items-center problem-statement-items">
                      <img src="/assets/images/point-icon.png" alt="Before" />
                      <p className="m-0">~5 sec</p>
                    </div>
                    <div className="d-flex align-items-center problem-statement-items">
                      <img src="/assets/images/point-icon.png" alt="Before" />
                      <p className="m-0">High</p>
                    </div>
                    <div className="d-flex align-items-center problem-statement-items">
                      <img src="/assets/images/point-icon.png" alt="Before" />
                      <p className="m-0">Inconsistent</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 p-0 after-box">
                  <div className="statement-box left">
                    <h3>After (Expected/Actual)</h3>
                    <div className="d-flex align-items-center problem-statement-items">
                      <img
                        src="/assets/images/point-icon.png"
                        alt="After (Expected/Actual)"
                      />
                      <p className="m-0">+40% improvement</p>
                    </div>
                    <div className="d-flex align-items-center problem-statement-items">
                      <img
                        src="/assets/images/point-icon.png"
                        alt="After (Expected/Actual)"
                      />
                      <p className="m-0">~2.5 sec</p>
                    </div>
                    <div className="d-flex align-items-center problem-statement-items">
                      <img
                        src="/assets/images/point-icon.png"
                        alt="After (Expected/Actual)"
                      />
                      <p className="m-0">Reduced by 30%</p>
                    </div>
                    <div className="d-flex align-items-center problem-statement-items">
                      <img
                        src="/assets/images/point-icon.png"
                        alt="After (Expected/Actual)"
                      />
                      <p className="m-0">+35% growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="portfolio-area page-section scroll-to-page pb-0"
        id="portfolio"
      >
        <div className="custom-container">
          <div className="portfolio-content content-width">
            <div className="section-header m-0">
              <div className="row m-0 mb-5 point-heading-container">
                <div className="col-lg-12 px-0">
                  <p className="point-heading">Style Guide</p>
                </div>
              </div>
              <div className=" m-0 ux-strategy-wireframesux-row mb-3">
                <div className=" ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={13}>
                    <img
                      src="/assets/images/style-guide-1.png"
                      alt="UX STRATEGY & WIREFRAMES"
                    />
                  </LightboxThumb>
                </div>
                <div className="ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={14}>
                    <img
                      src="/assets/images/style-guide-2.png"
                      alt="UX STRATEGY & WIREFRAMES"
                    />
                  </LightboxThumb>
                </div>
              </div>
              <div className=" m-0 ux-strategy-wireframesux-row mb-5">
                <div className=" ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={15}>
                    <img
                      src="/assets/images/style-guide-3.png"
                      alt="UX STRATEGY & WIREFRAMES"
                    />
                  </LightboxThumb>
                </div>
                <div className="ux-strategy-wireframesux-column px-0">
                  <LightboxThumb group={PORTFOLIO_GALLERY} index={16}>
                    <img
                      src="/assets/images/thank-you.png"
                      className="w-80"
                      alt="Thank You"
                    />
                  </LightboxThumb>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
