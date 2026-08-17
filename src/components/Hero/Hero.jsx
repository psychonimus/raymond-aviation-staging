import { useEffect, useState, useRef } from "react";
import "./Hero.css";
import { FlowButton } from "../FlowButton/FlowButton";
import { Link } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";

// ── Sound Preference Popup ──
function SoundPopup({ onChoice }) {
    return (
        <div className="ac-sound-overlay">
            <div className="ac-sound-popup">
                {/* Decorative top line */}
                <div className="ac-sound-popup-line" />

                {/* Logo / Brand mark */}
                <div className="ac-sound-popup-brand">
                    <img
                        src="/assets/images/raymond-aviation-logo.svg"
                        alt="Raymond Aviation"
                        className="ac-sound-popup-logo"
                        
                    />
                </div>

                {/* Icon */}
                <div className="ac-sound-popup-icon-wrap">
                    <Volume2 size={32} color="#D3A95B" strokeWidth={1.4} />
                </div>

                {/* Heading */}
                <h2 className="ac-sound-popup-title">Experience the Skies</h2>
                <p className="ac-sound-popup-sub">
                    This site features an immersive audio experience.<br />
                    Would you like to enable sound?
                </p>

                {/* Divider */}
                <div className="ac-sound-popup-divider" />

                {/* Actions */}
                <div className="ac-sound-popup-actions">
                    <button
                        className="ac-sound-btn ac-sound-btn--primary"
                        onClick={() => onChoice(false)}
                        aria-label="Enable sound"
                    >
                        <Volume2 size={16} strokeWidth={1.8} />
                        <span>Enable Sound</span>
                    </button>
                    <button
                        className="ac-sound-btn ac-sound-btn--ghost"
                        onClick={() => onChoice(true)}
                        aria-label="Stay muted"
                    >
                        <VolumeX size={16} strokeWidth={1.8} />
                        <span>Stay Muted</span>
                    </button>
                </div>

                {/* Bottom decorative line */}
                <div className="ac-sound-popup-line ac-sound-popup-line--bottom" />
            </div>
        </div>
    );
}

// Icon SVGs for services
const icons = {
    charter: (
        <img src="/assets/images/aircraft.svg" alt="" style={{ width: "50px" }} />


    ),
    sales: (
        <img src="/assets/images/aircraft-2.svg" alt="" style={{ width: "45px" }} />

    ),
    design: (
        <img src="/assets/images/Concierge-services.svg" alt="" style={{ width: "45px" }} />

    ),
    mgmt1: (
        <img src="/assets/images/aircraft-management.svg" alt="" style={{ width: "50px" }} />

    ),
    mgmt2: (
        <img src="/assets/images/aviation-consultancy.svg" alt="" style={{ width: "50px" }} />
    ),
    design2: (
        <img src="/assets/images/plane-design.svg" alt="" style={{ width: "50px" }} />
    ),
    partnership: (
        <img src="/assets/images/helipad-infra.svg" alt="" style={{ width: "50px" }} />
    ),
};

const services = [
    { icon: "charter", title: "Charter \n On-Demand", desc: "Bespoke charter services and expert brokerage connecting clients to the finest aircraft worldwide.", path: "/charter-on-demand" },
    { icon: "sales", title: "Fractional \n Ownership", desc: "Expert guidance through every stage of aircraft acquisition and remarketing with full market access.", path: "/fractional-ownership" },
    { icon: "design", title: "Jet Card \n Program", desc: "Tailored interior design and completion management for the most discerning aviation clients.", path: "/jet-card-program" },
    { icon: "mgmt1", title: "Aircraft \n Management", desc: "Comprehensive aircraft management ensuring safety, compliance, and operational excellence.", path: "/aircraft-management" },
    { icon: "mgmt2", title: "Aircraft sales \n & Acquisitions", desc: "Premium crew management and operational support for private and corporate fleet owners.", path: "/aircraft-sales-and-aquisition" },
    { icon: "partnership", title: "Helipad \n Infrastructure", desc: "Tailored interior design and completion management for the most discerning aviation clients.", path: "/helipad-infrastructure" },
];



export default function Hero() {
    // Show popup only on first visit per session
    const [showSoundPopup, setShowSoundPopup] = useState(() => {
        return sessionStorage.getItem("soundChoiceMade") !== "true";
    });

    const [isMuted, setIsMuted] = useState(() => {
        // Force muted if they have already navigated away and returned
        return sessionStorage.getItem("hasNavigatedFromHome") === "true";
    });
    const [wasAutoMuted, setWasAutoMuted] = useState(false);

    const handleSoundChoice = (muted) => {
        // Reset video to beginning so it always starts fresh after the choice
        const video = videoRef.current;
        if (video) {
            video.currentTime = 0;
            video.muted = muted;
        }
        sessionStorage.setItem("soundChoiceMade", "true");
        setIsMuted(muted);
        setShowSoundPopup(false);
    };
    const videoRef = useRef(null);

    // Track navigation to other pages
    useEffect(() => {
        return () => {
            sessionStorage.setItem("hasNavigatedFromHome", "true");
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Keep video fully paused while the popup is visible
        if (showSoundPopup) {
            video.pause();
            return;
        }

        // Sync the DOM element's muted state with React state
        video.muted = isMuted;

        if (!isMuted) {
            // Attempt to play with sound (user gesture from popup satisfies browser policy)
            video.play().catch((error) => {
                console.log("Autoplay with sound blocked. Falling back to muted autoplay.");
                setIsMuted(true);
                setWasAutoMuted(true);
                video.muted = true;
                video.play().catch((playError) => {
                    console.error("Muted autoplay also failed:", playError);
                });
            });
        } else {
            // Play muted
            video.play().catch((playError) => {
                console.error("Playing muted video failed:", playError);
            });
        }
    }, [isMuted, showSoundPopup]);

    useEffect(() => {
        if (!wasAutoMuted) return;

        const handleUserInteraction = () => {
            setIsMuted(false);
            setWasAutoMuted(false);
        };

        window.addEventListener("click", handleUserInteraction, { once: true });
        window.addEventListener("touchstart", handleUserInteraction, { once: true });

        return () => {
            window.removeEventListener("click", handleUserInteraction);
            window.removeEventListener("touchstart", handleUserInteraction);
        };
    }, [wasAutoMuted]);

    return (
        <>
            {/* Sound Preference Popup */}
            {showSoundPopup && <SoundPopup onChoice={handleSoundChoice} />}

            <div className="ac-hero-wrapper">
                <video
                    ref={videoRef}
                    className="ac-hero-video"
                    muted={isMuted}
                    loop
                    playsInline
                >
                    <source src="/assets/videos/bg-vid-audio.mp4" type="video/mp4" />
                </video>
                <button
                    className="ac-mute-button"
                    onClick={() => setIsMuted(!isMuted)}
                    aria-label="Toggle Audio"
                >
                    {isMuted ? <VolumeX size={24} color="#fff" /> : <Volume2 size={24} color="#fff" />}
                </button>
                <div className="ac-hero-bg" />
                <div className="ac-hero-content">

                    <div className="d-flex flex-column justify-content-between h-100">
                        {/* Headline */}
                        <div className="ac-hero-text ">
                            {/* <p className="ac-hero-overline">Our Expert Services</p> */}
                            <h1 className="ac-hero-headline mt-2">Your Gateway to <br /> Reliable Charter Services</h1>
                        </div>
                        <div>
                            {/* Services */}
                            <div className="ac-services">
                                <div className="ac-services-grid">
                                    {services.map((svc, i) => (
                                        <div className="ac-service-item-wrapper" key={svc.title + i}>
                                            <Link style={{textDecoration:"none"}} to={svc.path}>
                                            <div className="ac-service-item">
                                                <div className="ac-service-icon">{icons[svc.icon]}</div>
                                                <div className="ac-service-title">
                                                    {svc.title.split("\n").map((line, j) => (
                                                        <span key={j}>
                                                            {line}
                                                            {j === 0 && svc.title.includes("\n") ? <br /> : ""}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="ac-cta-wrap d-flex flex-column align-items-center justify-content-center">

                                <FlowButton text="Request Charter Quote" />

                                {/* <div className="ac-scroll-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <h6 className="text-white mt-3">Scroll Down</h6>
                                </div> */}
                            </div>
                        </div>
                    </div>







                </div>
            </div>




        </>
    );
}