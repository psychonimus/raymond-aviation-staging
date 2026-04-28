import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BlogStyles.css';

gsap.registerPlugin(ScrollTrigger);

const NavigatingAircraftAcquisition = () => {
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
          src="/assets/images/aircraft-sales.webp" 
          alt="Navigating Aircraft Acquisition" 
          className="blog-post-hero-image"
          ref={heroRef}
        />
        <div className="blog-post-hero-overlay"></div>
        <div className="blog-post-hero-content">
          <span className="blog-post-category">Buyer's Guide</span>
          <h1 className="blog-post-title">Navigating Aircraft Acquisition: A Comprehensive Buyer‘s Guide</h1>
          <div className="blog-post-meta">
            <span className="blog-post-date">March 10, 2026</span>
            <span className="blog-post-author">By Raymond Aviation</span>
            <span className="blog-post-read-time">15 min read</span>
          </div>
        </div>
      </header>

      <article className="blog-post-body container" ref={contentRef}>
        <div className="back-to-blogs">
          <a href="/blogs" onClick={(e) => { e.preventDefault(); window.history.back(); }}>
            ← Back to Blogs
          </a>
        </div>
        
        <p className="blog-post-intro">
          Purchasing an aircraft, whether a jet, turboprop, or helicopter, is one of the most significant capital investments an individual or business can make. It is also one of the most complex. Unlike buying a car, an aircraft acquisition involves regulatory compliance, specialized financing, technical inspections, and ongoing operational considerations that can easily overwhelm a first‑time buyer. This guide walks you through the essential steps, helping you navigate the process with confidence and avoid costly pitfalls.
        </p>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">Step 1: Define Your Mission Before You Define the Aircraft</h2>
          <p className="blog-post-paragraph">
            The single biggest mistake in aircraft acquisition is falling in love with a specific model before understanding what you actually need. Start with a clear mission profile:
          </p>
          <ul className="blog-post-list" style={{ color: '#ccc', marginBottom: '2rem', paddingLeft: '2rem' }}>
            <li>Typical passenger count: Small team or full family?</li>
            <li>Stage length: Regional hops or transoceanic trips?</li>
            <li>Runway requirements: Short, soft, or high-altitude?</li>
            <li>Payload needs: Heavy luggage or bulky cargo?</li>
            <li>Annual utilization: How many hours per year?</li>
          </ul>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">Step 2: New vs. Pre‑Owned – The Trade‑Offs</h2>
          <p className="blog-post-paragraph">
            Every buyer faces this decision. New aircraft offer full factory warranties, latest avionics, and lower initial maintenance. However, they come with a significant price premium and long lead times.
          </p>
          <p className="blog-post-paragraph">
            Pre-owned aircraft provide lower purchase prices and immediate availability but carry higher near-term maintenance risk. A common "sweet spot" is a pre-owned aircraft that is three to seven years old with a well-documented history.
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">Step 3: Assemble Your Acquisition Team</h2>
          <p className="blog-post-paragraph">
            You should not navigate an aircraft purchase alone. A competent team typically includes an aviation attorney, a qualified broker, an independent maintenance advisor, and an escrow agent. Attempting to bypass professionals to save fees is often a false economy.
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">Step 4: The Search and Pre‑Purchase Evaluation</h2>
          <p className="blog-post-paragraph">
            Once you find a suitable aircraft, the Letter of Intent (LOI) should always include a contingency for a satisfactory Pre-Purchase Inspection (PPI). Never waive a PPI. It is conducted by an independent facility and serves as your final safeguard before closing.
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">Step 5: Financing and Ownership Structures</h2>
          <p className="blog-post-paragraph">
            Aircraft financing is specialized. Typical terms for pre-owned jets might be 10-15 years with 15-25% down. Ownership structures like LLCs or fractional programs can isolate liability and provide tax advantages, so early planning with a tax advisor is essential.
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">Step 6: Post‑Purchase – Management and Operations</h2>
          <p className="blog-post-paragraph">
            Most owners choose a third-party management company to handle crew hiring, maintenance planning, and insurance. Managing an aircraft is a full-time job; a professional partner ensures safety and compliance while protecting the asset's value.
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">Step 7: Ongoing Costs – The Real Budget Picture</h2>
          <p className="blog-post-paragraph">
            The purchase price is just the entry fee. Budget for fuel, crew, maintenance reserves, hangarage, and insurance. A rule of thumb: annual operating costs often fall between 10% and 15% of the aircraft‘s market value.
          </p>
        </section>

        <footer className="blog-post-conclusion">
          <h2>Final Thoughts: Patience and Discipline Pay Off</h2>
          <p>
            A successful aircraft acquisition is a process, not an event. Stick to your mission profile, rely on your professional team, and do not skip the due diligence. Done correctly, owning an aircraft can be a source of extraordinary productivity and flexibility.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default NavigatingAircraftAcquisition;
