import { useEffect, useRef } from "react";
import "./AboutSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { FlowButtonDark } from "../FlowButton/FlowButtonDark";

// Inline SVG plane placeholder (red-tinted silhouette)


export default function PilatusSection() {
    const sectionRef = useRef(null);
    const clipRef = useRef(null);
    const imageRef = useRef(null);
    const eyebrowRef = useRef(null);
    const titleLinesRef = useRef([]);
    const bodyRef = useRef(null);
    const ctaRef = useRef(null);
    const badgesRef = useRef([]);
    const tagRef = useRef(null);
    const bracketRef = useRef(null);

    useEffect(() => {
        // Dynamically load GSAP + ScrollTrigger
        const loadGSAP = async () => {
            const gsapScript = document.createElement("script");
            gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
            document.head.appendChild(gsapScript);

            await new Promise((res) => (gsapScript.onload = res));

            const stScript = document.createElement("script");
            stScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
            document.head.appendChild(stScript);

            await new Promise((res) => (stScript.onload = res));

            initAnimations();
        };

        const initAnimations = () => {
            const { gsap } = window;
            const { ScrollTrigger } = window;
            gsap.registerPlugin(ScrollTrigger);

            const section = sectionRef.current;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    end: "top 20%",
                    scrub: false,
                    once: true,
                },
            });

            // — IMAGE REVEAL (clip slides away from right) —
            tl.to(
                clipRef.current,
                {
                    scaleX: 0,
                    duration: 1.2,
                    ease: "expo.inOut",
                    transformOrigin: "right center",
                },
                0
            );

            // — Image subtle zoom in —
            tl.fromTo(
                imageRef.current,
                { scale: 1.5 },
                { scale: 1, duration: 1.6, ease: "power3.out" },
                0.1
            );

            // — Eyebrow —
            tl.fromTo(
                eyebrowRef.current.querySelector("span"),
                { yPercent: 110 },
                { yPercent: 0, duration: 0.7, ease: "power3.out" },
                0.3
            );

            // — Title lines stagger —
            const titleInners = titleLinesRef.current.map((el) =>
                el?.querySelector(".title-line-inner")
            ).filter(Boolean);

            tl.fromTo(
                titleInners,
                { yPercent: 102, skewY: 2 },
                {
                    yPercent: 0,
                    skewY: 0,
                    duration: 1.0,
                    ease: "expo.out",
                    stagger: 0.08,
                },
                0.45
            );

            // — Body text —
            tl.fromTo(
                bodyRef.current,
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" },
                0.85
            );

            // — CTA button —
            tl.fromTo(
                ctaRef.current,
                { opacity: 0, y: 14, scale: 0.96 },
                { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.4)" },
                1.0
            );

            // — Floating tag (top right of image) —
            tl.fromTo(
                tagRef.current,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
                0.9
            );

            // — Corner bracket —
            tl.fromTo(
                bracketRef.current,
                { opacity: 0, scale: 0.7 },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" },
                1.0
            );

            // — Spec badges stagger —
            tl.fromTo(
                badgesRef.current,
                { opacity: 0, x: 20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.65,
                    ease: "power3.out",
                    stagger: 0.12,
                },
                1.05
            );
        };

        loadGSAP();

        return () => {
            if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    const specs = [
        { value: "500 kt", label: "Max Speed" },
        { value: "45,000 ft", label: "Ceiling" },
        { value: "2,000 nm", label: "Range" },
    ];

    return (
        <>
            <div className="pilatus-wrapper">

                {/* HERO */}
                <section className="pilatus-hero" ref={sectionRef}>

                    {/* ── LEFT ── */}
                    <div className="hero-left">

                        <div className="hero-eyebrow" ref={eyebrowRef}>
                            <span>About us</span>
                        </div>

                        <div className="hero-title-block">
                            <h2 className="hero-title">
                                {["Raymond", "Aviation"].map((line, i) => (
                                    <span
                                        className="title-line"
                                        key={i}
                                        ref={(el) => (titleLinesRef.current[i] = el)}
                                    >
                                        <span className="title-line-inner">{line}</span>
                                    </span>
                                ))}
                            </h2>
                        </div>

                        <div className="hero-bottom">
                            {/* <p className="hero-body" ref={bodyRef} style={{ opacity: 0 }}>
                                With over three decades of excellence, Raymond Aviation stands as a pioneer in India&apos;s private air travel sector. One of the first corporate houses to launch non-scheduled charter services in 1996, we have consistently delivered premium flight experiences to a global clientele.
                            </p> */}
                            <p className="hero-body" ref={bodyRef} style={{ opacity: 0 }}>
                                Our extensive operational history spans the entire spectrum of aviation, from single and twin-engine helicopters to turboprops and long-range heavy jets. This deep-rooted expertise allows us to anticipate the unique needs of the Indian high flyer, blending luxury and comfort with an unwavering commitment to safety and reliability. At Raymond Aviation, we don&apos;t just provide a flight; we offer a legacy of trust and value for those who demand the best in the skies.
                            </p>

                            <h4>Key Highlights</h4>

                            <div ref={ctaRef} style={{ opacity: 0 }}>
                                <div className="highlight-parent">

                                    <div className="highlight-card">
                                        <div className="highlight-icon">
                                            <img src="/assets/images/experience.svg" alt="" />
                                        </div>
                                        <div className="highlight-text">
                                            <p className="highlight-title">30+ Years of Excellence</p>
                                            <p className="highlight-desc">Proven experience with trusted performance and industry leadership.</p>
                                        </div>
                                    </div>

                                    <div className="highlight-card">
                                        <div className="highlight-icon">
                                            <img src="/assets/images/experience.svg" alt="" />
                                        </div>
                                        <div className="highlight-text">
                                            <p className="highlight-title">Diverse Fleet Experience</p>
                                            <p className="highlight-desc">Expertise across helicopters and long-range jets.</p>
                                        </div>
                                    </div>

                                    <div className="highlight-card">
                                        <div className="highlight-icon">
                                            <img src="/assets/images/experience.svg" alt="" />
                                        </div>
                                        <div className="highlight-text">
                                            <p className="highlight-title">Tailored Service</p>
                                            <p className="highlight-desc">Personalized solutions for elite Indian and global travellers.</p>
                                        </div>
                                    </div>

                                    <div className="highlight-card">
                                        <div className="highlight-icon">
                                            <img src="/assets/images/experience.svg" alt="" />
                                        </div>
                                        <div className="highlight-text">
                                            <p className="highlight-title">Unmatched Safety Standards</p>
                                            <p className="highlight-desc">Built on reliability and rigorous safety practices.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT (IMAGE) ── */}
                    <div className="hero-right">
                        <div className="image-container" ref={imageRef}>
                            <Swiper
                                modules={[Autoplay, EffectFade, Pagination]}
                                effect="fade"
                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                                pagination={{ clickable: true, dynamicBullets: true }}
                                loop={true}
                                speed={1500}
                                className="about-carousel"
                                style={{ width: "100%", height: "100%" }}
                            >
                                <SwiperSlide>
                                    <img className="jet-image" src="/assets/images/about-img.webp" alt="Raymond Aviation aircraft interior" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="jet-image" src="/assets/images/interior.webp" alt="Aircraft interior" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="jet-image" src="/assets/images/vip-charter.webp" alt="VIP Charter" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="jet-image" src="/assets/images/charter-on-demand.webp" alt="Charter Experience" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}