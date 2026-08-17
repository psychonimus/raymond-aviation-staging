import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../Footer/Footer';
import './AllBlogs.css';
import { FlowButton } from '../FlowButton/FlowButton';
import { FlowButtonDark } from '../FlowButton/FlowButtonDark';


gsap.registerPlugin(ScrollTrigger);

const dummyBlogs = [
  {
    id: 1,
    title: 'The Future of Private Aviation: Trends to Watch in 2026',
    date: 'April 15, 2026',
    description: 'Explore the latest innovations shaping luxury air travel, from sustainable aviation fuels to revolutionary cabin designs that redefine comfort up in the air.',
    image: '/assets/images/charter-on-demand-banner.jpg'
  },
  {
    id: 2,
    title: 'Maximizing Efficiency: Why Chartering a Helicopter Makes Sense',
    date: 'March 28, 2026',
    description: 'Discover how point-to-point helicopter charters can save you valuable time by bypassing traffic and accessing remote locations with unparalleled ease.',
    image: '/assets/images/cod-helicopter.jpg'
  },
  {
    id: 3,
    title: 'Navigating Aircraft Acquisition: A Comprehensive Buyers Guide',
    date: 'March 10, 2026',
    description: 'Purchasing a private jet is a significant investment. Read our expert tips on selecting the right aircraft that matches your travel needs and financial goals. We cover pre-owned versus new, maintenance considerations, and financing options.',
    image: '/assets/images/aircraft-blog-3.jpg'
  },
  {
    id: 4,
    title: 'The Third Way: Why Raymond Aviation’s Jet Card is the Smartest Option for 25–100 Hour Flyers',
    date: 'February 21, 2026',
    description: 'Ditch the long-term contracts and spot-charter surprises. Welcome to guaranteed access, fixed rates, and seamless flight.',
    image: '/assets/images/banner-blog-5.png'
  },
  {
    id: 5,
    title: 'The Power of Ownership, Without the Weight: Fractional Ownership Explained',
    date: 'February 05, 2026',
    description: 'Why own just one jet when you can access a global fleet at a fraction of the cost?',
    image: '/assets/images/banner-blog-4.png'
  },
  {
    id: 6,
    title: 'Empty Leg Flights: What You Need to Know',
    date: 'January 18, 2026',
    description: 'Unlock incredible value in private aviation by taking advantage of empty leg flights. Understand the pros, cons, and how to find the best deals.',
    image: '/assets/images/banner-blog-6.jpg'
  }
];

const AllBlogs = () => {
  const pageRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      // Cards Stagger Animation
      if (cardsRef.current.length > 0) {
        gsap.fromTo(cardsRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.blogs-grid',
              start: 'top 85%',
            }
          }
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Aviation Insights & News | Raymond Aviation Blog</title>
        <meta name="description" content="Stay updated with the latest trends, news, and insights from the world of private aviation on the Raymond Aviation blog." />
      </Helmet>
      <div className="all-blogs-page" ref={pageRef}>
        <div className="all-blogs-container">
          <div className="all-blogs-header" ref={titleRef}>
            <h1 className="all-blogs-title">Blogs</h1>
            <p className="all-blogs-subtitle">Insights, updates, and perspectives from the world of premium aviation.</p>
          </div>

          <div className="blogs-grid">
            {dummyBlogs.map((blog, index) => (
              <article 
                className="blog-card" 
                key={blog.id} 
                ref={el => cardsRef.current[index] = el}
              >
                <div className="blog-image-wrapper">
                  <img src={blog.image} alt={blog.title} className="blog-image" />
                </div>
                <div className="blog-content">
                  {/* <span className="blog-meta-date">{blog.date}</span> */}
                  <h2 className="blog-item-title">{blog.title}</h2>
                  <p className="blog-item-desc">{blog.description}</p>
                  
                  <div>
                    <FlowButtonDark 
                      text='Read Full Blog' 
                      onClick={() => {
                        if (blog.id === 1) navigate('/blogs/the-future-of-private-aviation');
                        if (blog.id === 2) navigate('/blogs/maximizing-efficiency');
                        if (blog.id === 3) navigate('/blogs/navigating-aircraft-acquisition');
                        if (blog.id === 4) navigate('/blogs/the-third-way-jet-card');
                        if (blog.id === 5) navigate('/blogs/power-of-ownership');
                        if (blog.id === 6) navigate('/blogs/empty-leg-flights');
                      }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer 
        FooterHeader="INSIGHTS THAT MOVE AVIATION FORWARD"
        FooterTaglineOne="Trends"
        FooterTaglineTwo="Expertise"
        FooterTaglineThree="Industry Perspectives"
        btnTxt="Enquire Now"
      />
    </>
  );
};

export default AllBlogs;
