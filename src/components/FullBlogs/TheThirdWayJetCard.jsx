import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BlogStyles.css';

gsap.registerPlugin(ScrollTrigger);

const TheThirdWayJetCard = () => {
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
          src="/assets/images/banner-blog-5.png" 
          alt="The Third Way: Why Raymond Aviation’s Jet Card is the Smartest Option" 
          className="blog-post-hero-image"
          ref={heroRef}
        />
        <div className="blog-post-hero-overlay"></div>
        <div className="blog-post-hero-content">
          <span className="blog-post-category">Membership & Access</span>
          <h1 className="blog-post-title">The Third Way: Why Raymond Aviation’s Jet Card is the Smartest Option for 25–100 Hour Flyers</h1>
          <div className="blog-post-meta">
            <span className="blog-post-date">February 21, 2026</span>
            <span className="blog-post-author">By Raymond Aviation</span>
            <span className="blog-post-read-time">6 min read</span>
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
          Ditch the long-term contracts and spot-charter surprises. Welcome to guaranteed access, fixed rates, and seamless flight. For the modern business leader or frequent traveler, private aviation has traditionally felt like a choice between two extremes.
        </p>

        <section className="blog-post-section">
          <p className="blog-post-paragraph">
            On one side, you have on-demand chartering, which is flexible but often unpredictable. Prices fluctuate wildly based on seasonality and repositioning fees. On the other side, you have full ownership or fractional shares, which is luxurious but laden with capital depreciation, management fees, and the hassle of asset responsibility.
          </p>
          <p className="blog-post-paragraph">
            <strong>But what if there was a third way?</strong>
          </p>
          <p className="blog-post-paragraph">
            At Raymond Aviation, we designed our Jet Card Programme specifically for the traveler who lives in the middle: those with committed flying requirements between 25 and 100 hours per year. You don’t need the headache of owning a hangar. But you also shouldn’t have to refresh a charter app ten times to find a consistent rate. You need guaranteed access, service standards, and transparency.
          </p>
          <p className="blog-post-paragraph">
            Here is why the Jet Card is the most powerful tool in your travel arsenal.
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">What is a Jet Card?</h2>
          <p className="blog-post-paragraph">
            Think of it as a premium prepaid fuel card for the skies. A Jet Card is a prepaid block of flying hours loaded onto a single account. You purchase a defined number of hours upfront at a <strong>fixed, all-inclusive hourly rate</strong>. When you need to travel, you make one call. The hours are deducted from your balance. No invoices to review after landing. No surprise surcharges.
          </p>
          <p className="blog-post-paragraph">
            At Raymond Aviation, we’ve stripped away the complexity. Our philosophy is simple: <strong>One Call, One Rate, One Departure</strong>.
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">The Math of "Zero Surprises"</h2>
          <p className="blog-post-paragraph">
            The biggest pain point in private aviation today is volatility. Spot charter rates can skyrocket during peak demand or major sporting events. You pay for deadheading (empty legs) whether you like it or not. The Raymond Aviation Jet Card eliminates that volatility.
          </p>
          <p className="blog-post-paragraph">
            When you load a Jet Card, you lock in a pre-agreed rate of utilization. Regardless of market conditions, fuel prices, or high-demand seasons, your rate remains fixed. It is a <strong>prepaid commitment</strong> that protects you from price spikes.
          </p>
          <p className="blog-post-paragraph">
            We operate with an "all-inclusive" ethos. There are no hidden fees. The rate you agree to is the rate you pay. This turns a variable operating expense into a predictable, fixed budget line item—something your finance department will appreciate immensely.
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">The Flexibility You Deserve</h2>
          <p className="blog-post-paragraph">
            One of the common myths about prepaid cards is that you get locked into a single, boring aircraft type. That is not the case here. Our program offers flexibility in aircraft type with a pre-defined conversion rate. Need a Light Jet for a quick 45-minute business hop? Covered. Need a Heavy Jet for a transcontinental family vacation next month? That is simply a conversion of hours.
          </p>
          <p className="blog-post-paragraph">
            You get the guaranteed service standard of an aircraft management company without the rigidity of a specific asset.
          </p>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">Why "One Call" Matters</h2>
          <p className="blog-post-paragraph">
            Time is the only asset you cannot buy back. When you are ready to fly, you don’t want to negotiate rates or verify safety credentials. With the Raymond Aviation Jet Card, you have guaranteed access to a global fleet. You pick up the phone (or send one message). You tell us where you are, where you are going, and when. We handle the rest.
          </p>
          <ul className="blog-post-list">
            <li><strong>No long-term contracts.</strong> Pay for what you use, preloaded at a discount.</li>
            <li><strong>No repositioning games.</strong> We manage the logistics so you don't pay for empty legs.</li>
            <li><strong>Pure, seamless flight.</strong> From the tarmac to 41,000 feet, it is simply easier.</li>
          </ul>
        </section>

        <section className="blog-post-section">
          <h2 className="blog-post-section-title">Is the Jet Card Right for You?</h2>
          <p className="blog-post-paragraph">
            Ask yourself these three questions:
          </p>
          <ol className="blog-post-list">
            <li>Do you fly between 25 and 100 hours annually?</li>
            <li>Are you tired of the "sticker shock" on spot charter invoices?</li>
            <li>Do you want the access of ownership without the liability?</li>
          </ol>
          <p className="blog-post-paragraph">
            If you answered yes, the Jet Card is your solution. It bridges the gap between sporadic charter and full ownership.
          </p>
        </section>

        <footer className="blog-post-conclusion">
          <h2>Experience the Third Way</h2>
          <p>
            At Raymond Aviation, we believe that booking a jet should be as easy as using a credit card—predictable, secure, and universally accepted. Unlock guaranteed access today. Whether you need a light jet for a day trip or a heavy jet for an international journey, your card is ready.
          </p>
          <p>
            <strong>Contact Raymond Aviation to load your hours. Fly with zero surprises.</strong>
          </p>
        </footer>
      </article>
    </div>
  );
};

export default TheThirdWayJetCard;