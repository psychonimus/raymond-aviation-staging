import { useEffect, useRef } from "react";
import "./Footer.css";
import { FlowButton } from "../FlowButton/FlowButton";
import { FlowButtonDark } from "../FlowButton/FlowButtonDark";
import SocialIcons from "../SocialIcons/SocialIcons";

const RaymondAviationFooter = () => {
  const footerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const btnRef = useRef(null);
  const socialsRef = useRef(null);
  const bottomBarRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
      script.onload = () => {
        const scrollScript = document.createElement("script");
        scrollScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
        scrollScript.onload = () => {
          const gsap = window.gsap;
          const ScrollTrigger = window.ScrollTrigger;
          gsap.registerPlugin(ScrollTrigger);

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });

          tl.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
          )
            .fromTo(
              titleRef.current,
              { opacity: 0, y: 40, skewY: 2 },
              {
                opacity: 1,
                y: 0,
                skewY: 0,
                duration: 0.9,
                ease: "power3.out",
              },
              "-=0.3"
            )
            .fromTo(
              taglineRef.current,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
              "-=0.4"
            )
            .fromTo(
              btnRef.current,
              { opacity: 0, scale: 0.88 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
              },
              "-=0.3"
            )
            .fromTo(
              socialsRef.current,
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
              "-=0.2"
            )
            .fromTo(
              bottomBarRef.current,
              { opacity: 0 },
              { opacity: 1, duration: 0.5 },
              "-=0.1"
            );
        };
        document.body.appendChild(scrollScript);
      };
      document.body.appendChild(script);
    };

    loadGSAP();
  }, []);

  return (
    <>
      <footer ref={footerRef} className="ra-footer mt-auto">
        <div className="container">
          <div className="ra-footer-main text-center">
            {/* <div ref={subtitleRef} className="ra-reach-label">
              Reach Out Anytime
            </div> */}

            <h2 ref={titleRef} className="ra-title">
              OWN YOUR FLIGHT EXPERIENCE
            </h2>

            <p ref={taglineRef} className="ra-tagline">
              Fractional Ownership <span style={{color:"var(--primary)", fontWeight:"600"}}>|</span> Guaranteed Hours <span style={{color:"var(--primary)", fontWeight:"600"}}>|</span> Flexible Access  
            </p>

            <div className="d-flex justify-content-center" ref={btnRef}>
              <FlowButtonDark text="Enquire Now"/>
            </div>

            {/* <div ref={socialsRef} className="ra-socials">
              
              <a href="#" className="ra-social-link" aria-label="Instagram">
                <img src="/assets/images/instagram.svg" alt=""  />
              </a>
              
              <a href="#" className="ra-social-link" aria-label="Facebook">
                <img src="/assets/images/facebook.svg" alt=""  />
              </a>
             
              <a href="mailto:info@raymondaviation.com" className="ra-social-link" aria-label="Email">
                <img src="/assets/images/mail.svg" alt=""  />
              </a>
              
              <a href="tel:+919999999999" className="ra-social-link" aria-label="Phone">
                <img src="/assets/images/call.svg" alt=""  />
              </a>
            </div> */}

            <div className="mt-4">

            <SocialIcons />
            </div>

          </div>

          <div ref={bottomBarRef} className="ra-bottom-bar">
            <div className="row align-items-center">
              <div className="col-12 col-sm-6">
                <p className="ra-copyright">©2026 Raymond Aviation</p>
              </div>
              <div className="col-12 col-sm-6">
                <ul className="ra-legal-links">
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default RaymondAviationFooter;