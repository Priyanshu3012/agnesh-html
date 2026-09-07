"use client";

import useScrollAnimations from "../../../hooks/useScrollAnimations";

export default function BlogContent() {
  useScrollAnimations();

  return (
    <>
      <section
        className="hero-section page-section scroll-to-page pb-0"
        id="home"
      >
        <div className="custom-container">
          <div className="hero-content content-width" id="about">
            <div className="section-header m-0">
              <div className="w-100">
                <img
                  src="/assets/images/blog/blog-banner.png"
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
                <p className="point-heading">Infographic Designs</p>
              </div>
              <div className="w-100 ">
                <div className="grid-container">
                  <div className="eamiler-first-column">
                    <div className="first-column">
                      <img
                        src="/assets/images/blog/infographic-designs.png"
                        alt="Agnesh Jha Logo"
                        className="W-100"
                      />
                    </div>
                    <div className="second-column">
                      <img
                        src="/assets/images/blog/infographic-designs-1.png"
                        alt="Agnesh Jha Logo"
                        className="W-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid-container">
                  <div className="eamiler-first-column">
                    <div className="first-column">
                      <img
                        src="/assets/images/blog/infographic-designs-2.png"
                        alt="Agnesh Jha Logo"
                        className="W-100 b-raduis-22"
                      />
                    </div>
                    <div className="second-column">
                      <img
                        src="/assets/images/blog/infographic-designs-3.png"
                        alt="Agnesh Jha Logo"
                        className="W-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="portfolio-area page-section scroll-to-page pt-0"
        id="portfolio"
      >
        <div className="custom-container">
          <div className="portfolio-content content-width">
            <div className="section-header m-0">
              <div className="w-100 mb-5 point-heading-container">
                <p className="point-heading">Blog Images</p>
              </div>
              <div className="w-100 ">
                <div className="grid-container">
                  <div className="eamiler-first-column">
                    <div className="first-column">
                      <img
                        src="/assets/images/blog/blog-images.png"
                        alt="Agnesh Jha Logo"
                        className="W-100"
                      />
                    </div>
                    <div className="second-column">
                      <img
                        src="/assets/images/blog/blog-images-1.png"
                        alt="Agnesh Jha Logo"
                        className="W-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid-container">
                  <div className="eamiler-first-column">
                    <div className="first-column">
                      <img
                        src="/assets/images/blog/blog-images-2.png"
                        alt="Agnesh Jha Logo"
                        className="W-100"
                      />
                    </div>
                    <div className="second-column">
                      <img
                        src="/assets/images/blog/blog-images-3.png"
                        alt="Agnesh Jha Logo"
                        className="W-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid-container">
                  <div className="eamiler-first-column">
                    <div className="first-column">
                      <img
                        src="/assets/images/blog/blog-images-4.png"
                        alt="Agnesh Jha Logo"
                        className="W-100"
                      />
                    </div>
                    <div className="second-column">
                      <img
                        src="/assets/images/blog/blog-images-5.png"
                        alt="Agnesh Jha Logo"
                        className="W-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="portfolio-area page-section scroll-to-page pt-0 pb-0"
        id="portfolio"
      >
        <div className="custom-container">
          <div className="portfolio-content content-width">
            <div className="section-header m-0">
              <div className="w-100 mb-5 point-heading-container">
                <p className="point-heading">
                  Visual Performance Prediction (Based on Design Psychology
                  &amp; Best Practices):
                </p>
                <br />
                <span className="point-sunheading">
                  Here&apos;s a breakdown of each ad and its likely performance:
                </span>
              </div>
              <div className="w-100 ">
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Ad</th>
                        <th>Headline / Message</th>
                        <th>Visual Strength</th>
                        <th>Likely Performance (Predicted)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          &quot;3 Months FREE IVR + WhatsApp plan&quot; (LHS)
                        </td>
                        <td>Strong offer, clean UI</td>
                        <td>
                          <span className="stars">⭐️⭐️⭐️⭐️</span>
                          <div className="note">(High)</div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Same offer + Male character (RHS)</td>
                        <td>Adds personality, slightly busier</td>
                        <td>
                          <span className="stars">⭐️⭐️⭐️⭐️</span>
                          <div className="note">(Medium-High)</div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>&quot;Track agent chat &amp; call...&quot;</td>
                        <td>Good product showcase, CTA visible</td>
                        <td>
                          <span className="stars">⭐️⭐️⭐️⭐️</span>
                          <div className="note">(Medium-High)</div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>&quot;Ek hi number pe IVR + WhatsApp&quot;</td>
                        <td>Regional language + smiling woman</td>
                        <td>
                          <span className="stars">⭐️⭐️⭐️⭐️</span>
                          <div className="note">
                            (High in Hindi-speaking regions)
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>&quot;Start at ₹2400/year only&quot;</td>
                        <td>Strong price callout + WhatsApp</td>
                        <td>
                          <span className="stars">⭐️⭐️⭐️⭐️</span>
                          <div className="note">(Very High)</div>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>&quot;Verified Business Caller ID&quot;</td>
                        <td>Trusted brand mention (Truecaller)</td>
                        <td>
                          <span className="stars">⭐️⭐️⭐️⭐️</span>
                          <div className="note">(High trust, High CTR)</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="portfolio-area page-section scroll-to-page pt-4"
        id="portfolio"
      >
        <div className="custom-container">
          <div className="portfolio-content content-width">
            <div className="section-header m-0">
              <div className="row m-0 mb-5">
                <div className="col-lg-3 goals-box">
                  <p className="point-heading">Design &amp; CTA Highlights:</p>
                </div>
                <div className="col-lg-3 goals-box">
                  <div className="d-flex align-items-center problem-statement-items mb-5">
                    <img src="/assets/images/point-icon.png" alt="Pain Point" />
                    <p className="m-0">Green buttons: Good for “Go” action</p>
                  </div>
                  <div className="d-flex align-items-center problem-statement-items">
                    <img src="/assets/images/point-icon.png" alt="Pain Point" />
                    <p className="m-0">Truecaller branding: Adds credibility</p>
                  </div>
                </div>
                <div className="col-lg-3 goals-box">
                  <div className="d-flex align-items-center problem-statement-items mb-5">
                    <img src="/assets/images/point-icon.png" alt="Pain Point" />
                    <p className="m-0">
                      Faces + device UI: Boosts attention &amp; clarity
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 goals-box">
                  <div className="d-flex align-items-center problem-statement-items mb-5">
                    <img src="/assets/images/point-icon.png" alt="Pain Point" />
                    <p className="m-0">
                      Regional (Hindi) copy: High local engagement
                    </p>
                  </div>
                </div>
              </div>

              <div className="row m-0 mb-5">
                <div className="col-lg-3 goals-box">
                  <p className="point-heading">
                    impressions, clicks, CTR, conversions
                  </p>
                </div>
                <div className="col-lg-6 goals-box">
                  <div className="d-flex align-items-center problem-statement-items mb-5">
                    <p
                      className="m-0"
                      style={{ color: "#55E574", fontWeight: 600 }}
                    >
                      Ad 1: 20,000 impressions | 900 clicks | CTR 4.5%
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-100 text-center mt-5 d-inline-block">
                <img
                  src="/assets/images/social-media/thank-you.png"
                  alt=""
                  className="w-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
