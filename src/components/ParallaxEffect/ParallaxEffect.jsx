import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./ParallaxEffect.css";
import { FlowButton } from "../FlowButton/FlowButton";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxEffect() {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: true,
        },
      })
      .to(imgRef.current, {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
      })
      .to(
        heroRef.current,
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      );
  }, { scope: wrapperRef });

  return (
    <>


      <div className="wrapper" ref={wrapperRef}>
        <div className="content">
          <section className="section hero" ref={heroRef}>

            <div className="hero-content">
              <video
                className="ac-hero-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/assets/videos/window-scene.webm" type="video/webm" />
              </video>

              <div className="container hero-content-text">
                <h5>Redefining</h5>
                <h2>Private Aviation in India</h2>
                <p>Raymond Aviation is a premium charter service offering personalized helicopter and private jet travel solutions.</p>
               
              </div>
            </div>

           
          </section>
        </div>
        <div className="image-container">
          <img
            ref={imgRef}
            src="../assets/images/window 3.png"
            alt="image"
          />
        </div>
      </div>
    </>
  );
}