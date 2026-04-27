import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { gsap } from "gsap";
import './ContactSection.css'
import { FlowButton } from "../FlowButton/FlowButton";


const ContactSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const leftColRef = useRef(null);
    const midColRef = useRef(null);
    const formRef = useRef(null);
    const dividerRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        service: "Charter on Demand",
        message: "",
    });

    const services = [
        "Charter on Demand",
        "Jet Card Program",
        "Fractional Ownership",
        "Aircraft Acquisition & Sales",
        "Aircraft Management",
        "Helipad Infrastructure"
    ];

    const countryCodes = [
        { code: "+1", country: "US" },
        { code: "+91", country: "IN" },
        { code: "+31", country: "NL" },
        { code: "+44", country: "GB" },
        { code: "+49", country: "DE" },
        { code: "+33", country: "FR" },
        { code: "+81", country: "JP" },
        { code: "+86", country: "CN" },
        { code: "+61", country: "AU" },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                titleRef.current,
                { y: -60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.1 }
            )
                .fromTo(
                    dividerRef.current,
                    { scaleX: 0, opacity: 0 },
                    { scaleX: 1, opacity: 1, duration: 0.7, transformOrigin: "left" },
                    "-=0.5"
                )
                .fromTo(
                    leftColRef.current,
                    { x: -50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.9 },
                    "-=0.4"
                )
                .fromTo(
                    midColRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.9 },
                    "-=0.6"
                )
                .fromTo(
                    formRef.current,
                    { x: 50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.9 },
                    "-=0.6"
                );

            // Subtle float for the form
            gsap.to(formRef.current, {
                y: -8,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1.5,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleInputFocus = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1.012,
            duration: 0.2,
            ease: "power2.out",
        });
    };
    const handleInputBlur = (e) => {
        gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: "power2.out" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        gsap.fromTo(
            e.currentTarget.querySelector(".submit-btn"),
            { scale: 0.95 },
            { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" }
        );
    };

    return (
        <>
            <section className="contact-section" ref={sectionRef}>
                {/* ── Background Video ── */}
                <video
                    className="bg-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/assets/videos/contact-bg-2.webm"
                />
                <div className="bg-overlay" />

                <div className="contact-inner">
                    {/* Title */}
                    <div className="text-center " ref={titleRef}>
                        <h1 className="hero-title contact-hero-title text-white " >
                            Contact our Team
                        </h1>
                    </div>
                    <div className="title-divider mx-auto mb-5" ref={dividerRef} />

                    {/* Three-column layout */}
                    <div className="container px-0">
                        <div className="row g-0 align-items-start justify-content-center">

                            {/* Left — copy */}
                            <div className="col-md-6 px-3 mb-4 mb-lg-0" ref={leftColRef}>
                                <p className="copy-label">More sustainable flying at your service</p>
                                <p className="copy-body">
                                    We are committed to providing an unparalleled flying experience
                                    that harmonizes comfort and more sustainable flying. Our dedicated team is here
                                    to assist with any inquiries, ensuring your journey with us is as smooth and
                                    enjoyable as possible. Whether you're looking to book a flight, have questions
                                    about our services, or need personalized assistance.
                                </p>

                                <div className="contact-info-card">
                                    <p className="info-label">Contact our team</p>
                                    <p className="info-body">
                                        Please reach out to us through the contact form our contact us at{" "} <br />
                                        <span className="info-phone">+31 85 026 1636</span> and let us elevate your
                                        travel experience.
                                    </p>
                                </div>
                            </div>

                            

                            

                            {/* Right — Form */}
                            <div className="col-md-6 px-3">
                                <div className="form-glass">
                                    <form onSubmit={handleSubmit}>

                                        {/* Name */}
                                        <div className="mb-3">
                                            <label className="form-field-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control form-ctrl"
                                                placeholder="Your name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                onFocus={handleInputFocus}
                                                onBlur={handleInputBlur}
                                                required
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="mb-3">
                                            <label className="form-field-label">Email address</label>
                                            <input
                                                type="email"
                                                className="form-control form-ctrl"
                                                placeholder="Email address"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                onFocus={handleInputFocus}
                                                onBlur={handleInputBlur}
                                                required
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="mb-3">
                                            <label className="form-field-label">Phone number</label>
                                            <div className="phone-wrapper">
                                                <select
                                                    className="form-select form-ctrl country-select" style={{width : "70px"}}
                                                    value={formData.countryCode}
                                                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                                    onFocus={handleInputFocus}
                                                    onBlur={handleInputBlur}
                                                >
                                                    {countryCodes.map((c) => (
                                                        <option key={c.code} value={c.code} className="country-option">
                                                            {c.code}
                                                        </option>
                                                    ))}
                                                </select>
                                                <input
                                                    type="tel"
                                                    className="form-control form-ctrl phone-input"
                                                    placeholder="Your number"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    onFocus={handleInputFocus}
                                                    onBlur={handleInputBlur}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Service Dropdown */}
                                        <div className="mb-3">
                                            <label className="form-field-label">Interested Service</label>
                                            <select
                                                className="form-select form-ctrl"
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                onFocus={handleInputFocus}
                                                onBlur={handleInputBlur}
                                                required
                                            >
                                                {services.map((service) => (
                                                    <option key={service} value={service}>
                                                        {service}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div className="mb-4">
                                            <label className="form-field-label">Message</label>
                                            <textarea
                                                className="form-control form-ctrl"
                                                placeholder="Message"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                onFocus={handleInputFocus}
                                                onBlur={handleInputBlur}
                                            />
                                        </div>

                                        {/* Submit */}
                                        <div className="d-flex justify-content-start">
                                            <FlowButton text="Submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactSection;