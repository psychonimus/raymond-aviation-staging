import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BlogStyles.css';

gsap.registerPlugin(ScrollTrigger);

const EmptyLegFlights = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.to(heroRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".blog-post-hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Content reveal
      gsap.from(".blog-post-section", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="blog-post-container" ref={containerRef}>
      <header className="blog-post-hero">
        <img 
          src="/assets/images/banner-blog-6.jpg" 
          alt="Empty Leg Flights: What You Need to Know" 
          className="blog-post-hero-image"
          ref={heroRef}
        />
        <div className="blog-post-hero-overlay"></div>
        <div className="blog-post-hero-content">
          <span className="blog-post-category">Travel Strategy</span>
          <h1 className="blog-post-title">Empty Leg Flights: What You Need to Know Before You Book</h1>
          <div className="blog-post-meta">
            <span className="blog-post-date">January 18, 2026</span>
            <span className="blog-post-author">By Raymond Aviation</span>
            <span className="blog-post-read-time">7 min read</span>
          </div>
        </div>
      </header>

      <article className="blog-post-body container" ref={contentRef}>
        <div className="back-to-blogs">
          <Link to="/blogs">
            ← Back to Blogs
          </Link>
        </div>
        <p className="blog-post-intro">
          Luxury jets at a fraction of the price. But are empty legs right for your travel plans? If you have ever searched for “private jet deals,” you have almost certainly come across the term <strong>"empty leg flight"</strong> (also known as a “deadhead” or “ferry” flight).
        </p>

        <section className="blog-post-section">
          <p className="blog-post-paragraph">
            The promise is seductive: fly on a private jet for the price of a first-class airline ticket, sometimes even less. But like any high-value opportunity, empty leg flights come with specific rules, risks, and rewards. At Raymond Aviation, we believe in total transparency. Whether you are a current Jet Card holder or simply exploring private aviation, here is everything you need to know about empty-leg flights.
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">What Exactly Is an Empty Leg?</h2>
          <p className="blog-post-paragraph">
            An empty leg occurs when a private jet has flown a client to a destination and must return to its home base (or fly to its next pick-up point) without any passengers onboard.
          </p>
          <p className="blog-post-paragraph">
            The aircraft is already paid to go somewhere. The fuel, crew, landing fees, and insurance are already accounted for. So, from the operator’s perspective, any revenue from an empty leg is pure upside. That savings gets passed on to you, often as a <strong>40% to 75% discount</strong> off the standard one-way charter rate.
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">The Good: Why Passengers Love Empty Legs</h2>
          <ul className="blog-post-list">
            <li><strong>Unbeatable Pricing:</strong> You can access a heavy jet or a midsize cabin for less than a commercial business class ticket, especially on longer routes.</li>
            <li><strong>Same Private Jet Experience:</strong> You still get the same aircraft, the same crew, the same private terminal (FBO), and the same zero-lines experience. No TSA. No boarding groups.</li>
            <li><strong>Perfect for Repositioning Yourself:</strong> If you are flexible about where you go, empty legs can turn a spontaneous weekend trip into an unforgettable luxury experience at a bargain.</li>
          </ul>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">The Catch: What You Must Understand</h2>
          <p className="blog-post-paragraph">
            Empty legs are not a replacement for a jet card or on-demand charter. They are a supplemental tool for flexible travelers. Here is why:
          </p>
          <ol className="blog-post-list">
            <li><strong>You Do Not Choose the Route:</strong> An empty leg is fixed. If the aircraft is flying from New York to Miami empty, you cannot ask it to go to Chicago instead. You must accept the departure city, arrival city, and timing as offered.</li>
            <li><strong>Last-Minute and Unpredictable:</strong> Most empty legs are confirmed 24 to 48 hours before departure. If you need to be at a board meeting on Tuesday at 9:00 AM, an empty leg is a gamble, not a solution.</li>
            <li><strong>One-Way Only:</strong> Empty legs are almost always one-way. You will need to book a separate return option—either another empty leg or a full-price one-way charter.</li>
            <li><strong>No Cancellation Flexibility:</strong> If an operator’s paid client changes their plans, the empty leg may vanish. The operator may cancel on you if the primary flight changes.</li>
          </ol>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">Empty Legs vs. a Jet Card: Which is Better?</h2>
          <div className="blog-post-table-wrapper">
            <table className="blog-post-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Empty Leg Flight</th>
                  <th>Raymond Aviation Jet Card</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Pricing</strong></td>
                  <td>Deeply discounted, variable</td>
                  <td>Fixed, all-inclusive hourly rate</td>
                </tr>
                <tr>
                  <td><strong>Schedule</strong></td>
                  <td>Last-minute, fixed route</td>
                  <td>You choose date, time, route</td>
                </tr>
                <tr>
                  <td><strong>Aircraft Choice</strong></td>
                  <td>Whatever is repositioning</td>
                  <td>Flexible across categories</td>
                </tr>
                <tr>
                  <td><strong>Reliability</strong></td>
                  <td>Low (subject to change)</td>
                  <td>Guaranteed access</td>
                </tr>
                <tr>
                  <td><strong>Best For</strong></td>
                  <td>Spontaneous leisure trips</td>
                  <td>Business-critical travel</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="blog-post-paragraph mt-4">
            The bottom line: Use empty legs for weekend getaways or one-off personal trips when your schedule is wide open. Use a <strong>Raymond Aviation Jet Card</strong> for business travel, family obligations, or any flight that cannot afford a “maybe.”
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">How to Book Empty Legs Safely</h2>
          <p className="blog-post-paragraph">
            If you want to pursue empty legs, do not rely on random social media brokers. Work with a reputable provider like Raymond Aviation. We offer two options:
          </p>
          <ul className="blog-post-list">
            <li><strong>Standby Alerts:</strong> Let us know your preferred routes. We will notify you when an empty leg appears at a discount.</li>
            <li><strong>Jet Card + Empty Legs:</strong> The smartest strategy. Use your Jet Card for guaranteed, mission-critical flights. Layer in empty legs whenever they match your leisure plans.</li>
          </ul>
        </section>

        <footer className="blog-post-conclusion">
          <h2>Ready to Fly Smarter?</h2>
          <p>
            Whether you want a guaranteed fleet at a fixed rate (Jet Card) or alerts on deeply discounted empty legs, Raymond Aviation has a solution for your flying profile. Contact us today to discuss your travel patterns. We will show you exactly how to mix guaranteed access with opportunistic savings.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default EmptyLegFlights;