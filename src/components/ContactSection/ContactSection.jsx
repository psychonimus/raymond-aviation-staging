import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { gsap } from "gsap";
import './ContactSection.css';
import { Phone, Mail, User, Plane, MessageSquare, Send, Lock, ChevronDown, AlertCircle, Loader2, CheckCircle, XCircle } from "lucide-react";
import CountryCodePicker from "./CountryCodePicker";
import { SendFormData } from "../../services/sendFormData/SendFormData";

const ContactSection = () => {
    const sectionRef = useRef(null);
    const leftColRef = useRef(null);
    const formRef = useRef(null);
    const dividerRef = useRef(null);

    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        formType: 'Contact',
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        service: "",
        heardRef: "",
        description: "",
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

    const clearError = (fieldKey) => {
        if (errors[fieldKey]) {
            setErrors(prev => {
                const updated = { ...prev };
                delete updated[fieldKey];
                return updated;
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Name
        if (!formData.name || !formData.name.trim()) {
            newErrors.name = 'Full name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        } else if (!/^[A-Za-z\s'\-]+$/.test(formData.name.trim())) {
            newErrors.name = 'Name can only contain letters and spaces';
        }

        // Email
        if (!formData.email || !formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone
        if (!formData.phone || !formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else {
            const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
            if (!/^\d{7,15}$/.test(cleanPhone)) {
                newErrors.phone = 'Please enter a valid 7–15 digit phone number';
            }
        }

        // Service
        if (!formData.service || !formData.service.trim()) {
            newErrors.service = 'Please select a service';
        }

        // Description / Message
        if (formData.description && formData.description.trim().length > 0 && formData.description.trim().length < 5) {
            newErrors.description = 'Message should be at least 5 characters';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setSubmissionStatus('sending');
        setErrorMessage('');

        SendFormData(formData)
            .then(() => {
                setSubmissionStatus('success');
                setTimeout(() => {
                    setSubmissionStatus('idle');
                    setFormData({
                        formType: 'Contact',
                        name: "",
                        email: "",
                        countryCode: "+91",
                        phone: "",
                        service: "",
                        heardRef: "",
                        description: "",
                    });
                }, 1800);
            })
            .catch((err) => {
                console.error(err);
                setSubmissionStatus('error');
                setErrorMessage(err?.response?.data?.message || err?.message || 'Failed to submit form. Please check your connection and try again.');
            });

        if (formRef.current && formRef.current.querySelector(".custom-submit-btn")) {
            gsap.fromTo(
                formRef.current.querySelector(".custom-submit-btn"),
                { scale: 0.97 },
                { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.4)" }
            );
        }
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
                            <form onSubmit={handleSubmit} noValidate>
                                <p className="form-glass-title">SEND US A MESSAGE</p>

                                {/* Name */}
                                <div className="mb-4">
                                    <label className="form-field-label">Name <span className="text-danger">*</span></label>
                                    <div className="input-icon-wrapper">
                                        <User className="input-icon" size={18} />
                                        <input
                                            type="text"
                                            className={`form-control form-ctrl ${errors.name ? 'cs-input-error' : ''}`}
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={(e) => {
                                                setFormData({ ...formData, name: e.target.value });
                                                clearError('name');
                                            }}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                        />
                                    </div>
                                    {errors.name && <span className="cs-error-text"><AlertCircle size={12} /> {errors.name}</span>}
                                </div>

                                {/* Email Address */}
                                <div className="mb-4">
                                    <label className="form-field-label">Email Address <span className="text-danger">*</span></label>
                                    <div className="input-icon-wrapper">
                                        <Mail className="input-icon" size={18} />
                                        <input
                                            type="email"
                                            className={`form-control form-ctrl ${errors.email ? 'cs-input-error' : ''}`}
                                            placeholder="Email address"
                                            value={formData.email}
                                            onChange={(e) => {
                                                setFormData({ ...formData, email: e.target.value });
                                                clearError('email');
                                            }}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                        />
                                    </div>
                                    {errors.email && <span className="cs-error-text"><AlertCircle size={12} /> {errors.email}</span>}
                                </div>

                                {/* Phone Number */}
                                <div className="mb-4">
                                    <label className="form-field-label">Phone Number <span className="text-danger">*</span></label>
                                    <div className="phone-row-wrapper d-flex gap-3">
                                        <CountryCodePicker
                                            value={formData.countryCode}
                                            onChange={(dial) => setFormData({ ...formData, countryCode: dial })}
                                        />
                                        <div className="input-icon-wrapper flex-grow-1">
                                            <input
                                                type="tel"
                                                className={`form-control form-ctrl phone-input ${errors.phone ? 'cs-input-error' : ''}`}
                                                placeholder="Your number"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                maxLength={15}
                                                value={formData.phone}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') });
                                                    clearError('phone');
                                                }}
                                                onFocus={handleInputFocus}
                                                onBlur={handleInputBlur}
                                            />
                                        </div>
                                    </div>
                                    {errors.phone && <span className="cs-error-text"><AlertCircle size={12} /> {errors.phone}</span>}
                                </div>

                                {/* Interested Service */}
                                <div className="mb-4">
                                    <label className="form-field-label">Interested Service <span className="text-danger">*</span></label>
                                    <div className="input-icon-wrapper">
                                        <Plane className="input-icon select-plane-icon" size={18} />
                                        <select
                                            className={`form-select form-ctrl custom-select-el ${errors.service ? 'cs-input-error' : ''}`}
                                            value={formData.service}
                                            onChange={(e) => {
                                                setFormData({ ...formData, service: e.target.value });
                                                clearError('service');
                                            }}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
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
                                    {errors.service && <span className="cs-error-text"><AlertCircle size={12} /> {errors.service}</span>}
                                </div>

                                {/* How did you hear about us */}
                                <div className="mb-4">
                                    <label className="form-field-label">How did you hear about us?</label>
                                    <div className="input-icon-wrapper">
                                        <ChevronDown className="select-chevron-icon" size={14} />
                                        <select
                                            className="form-select form-ctrl custom-select-el"
                                            value={formData.heardRef}
                                            onChange={(e) => setFormData({ ...formData, heardRef: e.target.value })}
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
                                            className={`form-control form-ctrl ${errors.description ? 'cs-input-error' : ''}`}
                                            placeholder="Type your message here..."
                                            value={formData.description}
                                            onChange={(e) => {
                                                setFormData({ ...formData, description: e.target.value });
                                                clearError('description');
                                            }}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                            rows={4}
                                        />
                                    </div>
                                    {errors.description && <span className="cs-error-text"><AlertCircle size={12} /> {errors.description}</span>}
                                </div>

                                {submissionStatus === 'error' && errorMessage && (
                                    <div className="cs-status-banner error">
                                        <AlertCircle size={16} />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                {submissionStatus === 'success' && (
                                    <div className="cs-status-banner success">
                                        <CheckCircle size={16} />
                                        <span>Your message has been sent successfully!</span>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    className={`custom-submit-btn w-100 mb-3 d-flex align-items-center justify-content-center status-${submissionStatus}`}
                                    disabled={submissionStatus === 'sending' || submissionStatus === 'success'}
                                >
                                    {submissionStatus === 'sending' && (
                                        <>
                                            <Loader2 size={16} className="me-2 bm-spinner text-white" />
                                            <span>SENDING MESSAGE...</span>
                                        </>
                                    )}
                                    {submissionStatus === 'success' && (
                                        <>
                                            <CheckCircle size={16} className="me-2 text-white" />
                                            <span>MESSAGE SENT!</span>
                                        </>
                                    )}
                                    {submissionStatus === 'error' && (
                                        <>
                                            <XCircle size={16} className="me-2 text-white" />
                                            <span>RETRY MESSAGE</span>
                                        </>
                                    )}
                                    {submissionStatus === 'idle' && (
                                        <>
                                            <Send size={16} className="me-2 text-white" />
                                            <span>SEND MESSAGE</span>
                                        </>
                                    )}
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
