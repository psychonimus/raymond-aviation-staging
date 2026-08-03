import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BlogStyles.css';

gsap.registerPlugin(ScrollTrigger);

const PowerOfOwnershipContent = () => {
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
          src="/assets/images/fractional-banner-1.jpg" 
          alt="Fractional Ownership Explained" 
          className="blog-post-hero-image"
          ref={heroRef}
        />
        <div className="blog-post-hero-overlay"></div>
        <div className="blog-post-hero-content">
          <span className="blog-post-category">Ownership Models</span>
          <h1 className="blog-post-title">The Power of Ownership, Without the Weight: Fractional Ownership Explained</h1>
          {/* <div className="blog-post-meta">
            <span className="blog-post-date">May 09, 2026</span>
            <span className="blog-post-author">By Raymond Aviation</span>
            <span className="blog-post-read-time">10 min read</span>
          </div> */}
        </div>
      </header>

      <article className="blog-post-body container" ref={contentRef}>
        <div className="back-to-blogs">
          <Link to="/blogs">
            ← Back to Blogs
          </Link>
        </div>
        
        <p className="blog-post-intro">
          Why own just one jet when you can access a global fleet at a fraction of the cost? 
          For India’s top business leaders, celebrities, and corporate houses, time is the only non-renewable resource. 
          When you fly 150, 300, or even 400 hours a year, the question is never if you need private aviation; 
          it is how to structure it most intelligently.
        </p>

        <section className="blog-post-section">
          <p className="blog-post-paragraph">
            You could buy a jet outright. But that means millions in capital outlay, depreciation, crew salaries, hangarage, insurance, and a full-time aviation management team. 
            You could stick to on-demand charter. But at high utilization, the hourly rates become inefficient, and availability is never guaranteed during peak seasons.
          </p>
          <p className="blog-post-paragraph">
            There is a third path: one that gives you the privileges of full ownership without the burden. It is called <strong>Fractional Ownership</strong>. 
            At Raymond Aviation, we have designed a fractional ownership program specifically for India’s most demanding travelers. Here is how it works, why it makes sense, and how we remove every operational headache from your plate.
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">What is Fractional Ownership?</h2>
          <p className="blog-post-paragraph">
            In simple terms, fractional ownership means purchasing a defined share in a professionally operated aircraft. You do not buy the whole plane. You buy a percentage, say, 1/8th, 1/4th, or 1/2, and in return, you receive a guaranteed number of flight hours per year.
          </p>
          <p className="blog-post-paragraph">
            Think of it as a private jet timeshare, but with far more flexibility, liquidity, and professional management than anything in the consumer world. 
            At Raymond Aviation, your share size directly determines your annual hour entitlement. Typical shareholders fly between 150 and 400 hours per year, depending on their share acquisition.
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">The "Power of Ownership" – What You Actually Get</h2>
          <p className="blog-post-paragraph">
            When you become a fractional owner with Raymond Aviation, you are not just buying flight time. You are buying a complete aviation ecosystem.
          </p>
          <ul className="blog-post-list">
            <li><strong>Guaranteed Access, Not Maybe-Access:</strong> Unlike spot charter, where an aircraft might be unavailable during peak seasons, your share comes with a contractually guaranteed fleet position. The aircraft is reserved for you based on your notice period (typically 24–48 hours).</li>
            <li><strong>Uniform Standards, Every Time:</strong> You fly on the same make and model of aircraft (or an agreed equivalent). The cabin configuration, Wi-Fi speed, catering, and crew are all consistent. No surprises.</li>
            <li><strong>Priority Across a Global Fleet:</strong> Why own just one jet when you can have access to a world-class fleet? Our fractional program often includes interchangeability: if your primary aircraft is down for maintenance, you step into another without losing your schedule.</li>
            <li><strong>Asset Appreciation Shared:</strong> You share in the residual value of the aircraft. If the market for pre-owned jets performs well, your buy-back or resale value reflects that. You are not throwing money into endless rental fees.</li>
          </ul>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">What You Do NOT Have to Worry About</h2>
          <p className="blog-post-paragraph">
            This is where fractional ownership shines. You enjoy the benefits of ownership; we handle the burden. When you buy a share through Raymond Aviation, we take full responsibility for:
          </p>
          <ul className="blog-post-list">
            <li><strong>Crew Management:</strong> Pilots, copilots, and cabin crew are hired, trained, bonded, and scheduled by us. You do not manage sick days or vacation requests.</li>
            <li><strong>Maintenance & Repairs:</strong> Scheduled inspections, unscheduled fixes, engine overhauls—all covered under the program. No surprise six-figure repair bills.</li>
            <li><strong>Regulatory Compliance:</strong> DGCA (India) and international regulations are complex. We handle every filing, every safety audit, every renewal.</li>
            <li><strong>Hangarage & Parking:</strong> Whether the aircraft is based in Mumbai, Delhi, Bengaluru, or Dubai, we pay for and manage its physical home.</li>
            <li><strong>Scheduling & Dispatch:</strong> One call to our 24/7 operations center, and your flight is built, filed, and confirmed.</li>
          </ul>
          <p className="blog-post-paragraph"><em>You get in, fly, and get out. That is the entire user experience.</em></p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">Who is Fractional Ownership For?</h2>
          <div className="blog-post-table-wrapper">
            <table className="blog-post-table">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Typical Needs</th>
                  <th>Why Fractional Works</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HNI/UHNI Families</td>
                  <td>200+ hours/year, multi-city, leisure+business mix</td>
                  <td>Lower capital than whole ownership, consistent cabin comfort</td>
                </tr>
                <tr>
                  <td>Corporate Houses</td>
                  <td>300–400 hours/year, multiple executives</td>
                  <td>Guaranteed availability, predictable budgeting</td>
                </tr>
                <tr>
                  <td>Celebrities & Dignitaries</td>
                  <td>Privacy, security, unpredictable routing</td>
                  <td>No charter broker visibility; dedicated asset with vetted crews</td>
                </tr>
                <tr>
                  <td>Corporate Flight Departments</td>
                  <td>Supplement existing fleet</td>
                  <td>Use fractional share as "peak overflow" capacity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">Full Ownership vs. Fractional vs. Jet Card</h2>
          <p className="blog-post-paragraph">
            Where does fractional sit in the broader aviation landscape?
          </p>
          <ul className="blog-post-list">
            <li><strong>Jet Card (25–100 hours/year):</strong> Prepaid block hours, fixed rate, zero commitment. Best for moderate flyers who want flexibility without asset exposure.</li>
            <li><strong>Fractional Ownership (150–400 hours/year):</strong> You own a share of a specific asset. Lower hourly operating cost at high volumes. Best for frequent flyers who want predictability and asset value participation.</li>
            <li><strong>Full Ownership (400+ hours/year):</strong> You own 100% of the asset. Maximum control, maximum responsibility. Best for those flying almost daily.</li>
          </ul>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">How Raymond Aviation Facilitates Fractional Ownership</h2>
          <p className="blog-post-paragraph">
            Raymond Aviation is more than a broker; we are an operator and manager. We do three things uniquely well in the Indian market:
          </p>
          <ol className="blog-post-list">
            <li><strong>Aircraft Selection & Acquisition:</strong> We help you choose the right airframe (Gulfstream, Bombardier, Embraer, or Dassault) based on your mission lengths and passenger loads.</li>
            <li><strong>Shared Ownership Legal Framework:</strong> We draft clear, enforceable fractional agreements covering capital contributions, management fees, and exit clauses.</li>
            <li><strong>Turnkey Operations:</strong> From day one, the aircraft is on our AOC (Air Operator Certificate). You never need to hire a single employee.</li>
          </ol>
        </section>

        <footer className="blog-post-conclusion">
          <h2>The Bottom Line</h2>
          <p>
            Fractional ownership is not for everyone. But if you are flying 150 hours or more per year, and you value consistency, priority access, and capital efficiency, it is likely the smartest aviation decision you can make. 
            You stop renting. You start owning without the sleepless nights about engines, crews, or DGCA audits.
          </p>
          <p>
            Let Raymond Aviation build your fractional solution. We will analyze your travel patterns and model the exact share size and aircraft type that minimizes your cost-per-hour while maximizing your convenience.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default PowerOfOwnershipContent;
