import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { gsap } from "gsap";
import './ContactSection.css';
import { Phone, Mail, User, Plane, MessageSquare, Send, Lock, ChevronDown } from "lucide-react";
import CountryCodePicker from "./CountryCodePicker";

const ContactSection = () => {
    const sectionRef = useRef(null);
    const leftColRef = useRef(null);
    const formRef = useRef(null);
    const dividerRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        service: "",
        heardAbout: "",
        message: "",
    });

    const services = [
        "Charter on Demand",
        "Fractional Ownership",
        "Helishare",
        "Jet Card Program",
        "Aircraft Management",
        "Aircraft Sales & Acquisition",
        "Helipad Infrastructure"
    ];



    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                leftColRef.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.1 }
            )
            .fromTo(
                dividerRef.current,
                { scaleX: 0, opacity: 0 },
                { scaleX: 1, opacity: 1, duration: 0.8, transformOrigin: "left" },
                "-=0.6"
            )
            .fromTo(
                formRef.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.1 },
                "-=0.8"
            );

            // Subtle float for the form
            gsap.to(formRef.current, {
                y: -6,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1.2,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleInputFocus = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1.008,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    const handleInputBlur = (e) => {
        gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: "power2.out" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Visual submit feedback
        gsap.fromTo(
            formRef.current.querySelector(".custom-submit-btn"),
            { scale: 0.97 },
            { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.4)" }
        );
        console.log("Form Submitted:", formData);
    };

    return (
        <section className="contact-section" ref={sectionRef}>
            {/* Background Video */}
            <video
                className="bg-video"
                autoPlay
                muted
                loop
                playsInline
                src="/assets/videos/contact-bg-2.webm"
            />
            <div className="bg-overlay" />

            <div className="contact-inner container">
                <div className="row g-5 align-items-center justify-content-between">
                    
                    {/* Left Column — Text & Info Cards */}
                    <div className="col-lg-6 col-md-12 px-lg-4" ref={leftColRef}>
                        <p className="contact-title-pre">GET IN TOUCH</p>
                        <h1 className="contact-hero-title text-white">
                            Contact our Team
                        </h1>
                        
                        {/* Custom divider with rotated airplane */}
                        <div className="title-divider-container" ref={dividerRef}>
                            <div className="title-divider-line" />
                            <Plane className="divider-plane" size={14} />
                        </div>

                        <p className="contact-description">
                            We're here to help with all your private aviation needs. Reach out and our team will get back to you shortly.
                        </p>

                        <div className="contact-info-cards-stack mt-4">
                            {/* Card 1: CALL US */}
                            <div className="contact-info-card-v2 d-flex align-items-center mb-4">
                                <div className="info-icon-circle me-4">
                                    <Phone size={22} />
                                </div>
                                <div className="info-text-box">
                                    <p className="info-card-label">CALL US</p>
                                    <h4 className="info-card-value">
                                        <a href="tel:+919820570000">+91 9820570000</a>
                                    </h4>
                                    {/* <p className="info-card-sub">Mon - Sat, 09:00 AM - 06:00 PM IST</p> */}
                                </div>
                            </div>

                            {/* Card 2: EMAIL US */}
                            <div className="contact-info-card-v2 d-flex align-items-center">
                                <div className="info-icon-circle me-4">
                                    <Mail size={22} />
                                </div>
                                <div className="info-text-box">
                                    <p className="info-card-label">EMAIL US</p>
                                    <h4 className="info-card-value">
                                        <a href="mailto:charter@raymond.in">charter@raymond.in</a>
                                    </h4>
                                    <p className="info-card-sub">We reply within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column — Form Glassmorphism */}
                    <div className="col-lg-5 col-md-12 px-lg-3 mt-5 mt-lg-0">
                        <div className="form-glass-v2" ref={formRef}>
                            <form onSubmit={handleSubmit}>
                                <p className="form-glass-title">SEND US A MESSAGE</p>

                                {/* Name */}
                                <div className="mb-4">
                                    <label className="form-field-label">Name</label>
                                    <div className="input-icon-wrapper">
                                        <User className="input-icon" size={18} />
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
                                </div>

                                {/* Email Address */}
                                <div className="mb-4">
                                    <label className="form-field-label">Email Address</label>
                                    <div className="input-icon-wrapper">
                                        <Mail className="input-icon" size={18} />
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
                                </div>

                                {/* Phone Number */}
                                <div className="mb-4">
                                    <label className="form-field-label">Phone Number</label>
                                    <div className="phone-row-wrapper d-flex gap-3">
                                        <CountryCodePicker
                                            value={formData.countryCode}
                                            onChange={(dial) => setFormData({ ...formData, countryCode: dial })}
                                        />
                                        <div className="input-icon-wrapper flex-grow-1">
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
                                </div>

                                {/* Interested Service */}
                                <div className="mb-4">
                                    <label className="form-field-label">Interested Service</label>
                                    <div className="input-icon-wrapper">
                                        <Plane className="input-icon select-plane-icon" size={18} />
                                        <select
                                            className="form-select form-ctrl custom-select-el"
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                            required
                                        >
                                            <option value="" disabled hidden>Select a service</option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="select-chevron-icon" size={14} />
                                    </div>
                                </div>

                                {/* How did you hear about us */}
                                <div className="mb-4">
                                    <label className="form-field-label">How did you hear about us?</label>
                                    <div className="input-icon-wrapper">
                                        <ChevronDown className="select-chevron-icon" size={14} />
                                        <select
                                            className="form-select form-ctrl custom-select-el"
                                            value={formData.heardAbout}
                                            onChange={(e) => setFormData({ ...formData, heardAbout: e.target.value })}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                        >
                                            <option value="" disabled hidden>Select an option</option>
                                            {[
                                                "Google / Search Engine",
                                                "Social Media",
                                                "Word of Mouth",
                                                "News / Press",
                                                "Event or Exhibition",
                                                "Email Newsletter",
                                                "Partner / Agent",
                                                "Other",
                                            ].map((opt) => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="mb-4">
                                    <label className="form-field-label">Message</label>
                                    <div className="input-icon-wrapper textarea-wrapper">
                                        <MessageSquare className="input-icon textarea-icon" size={18} />
                                        <textarea
                                            className="form-control form-ctrl"
                                            placeholder="Type your message here..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                            rows={4}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="custom-submit-btn w-100 mb-3 d-flex align-items-center justify-content-center">
                                    <Send size={16} className="me-2 text-white" />
                                    <span>SEND MESSAGE</span>
                                </button>

                                {/* Confidential Footer */}
                                <div className="confidential-footer d-flex align-items-center justify-content-center gap-2">
                                    <Lock size={12} className="lock-icon" />
                                    <span>Your information is secure and confidential.</span>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
