import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    X, 
    Send, 
    User, 
    Mail, 
    Phone, 
    MapPin, 
    Calendar, 
    Clock, 
    DollarSign, 
    Shield, 
    Loader2, 
    CheckCircle, 
    AlertCircle, 
    FileText 
} from 'lucide-react';
import CountryCodePicker from '../ContactSection/CountryCodePicker';
import { SendFormData } from '../../services/sendFormData/SendFormData';

const MIN_WORDS = 10;
const MAX_WORDS = 100;

export const countWords = (text) => {
    if (!text) return 0;
    const matches = text.trim().match(/\S+/g);
    return matches ? matches.length : 0;
};

const InventoryEnquiryModal = ({ isOpen, onClose, item }) => {
    const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        location: '',
        timeline: 'Immediate Acquisition (< 30 days)',
        message: ''
    });

    // Reset state when modal opens for an item
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setSubmitStatus('idle');
            setErrorMessage('');
            setErrors({});
            setFormData({
                name: '',
                email: '',
                countryCode: '+91',
                phone: '',
                location: '',
                timeline: 'Immediate Acquisition (< 30 days)',
                message: ''
            });
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Handle Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!item) return null;

    const currentWordCount = countWords(formData.message);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        if (name === 'phone') {
            newValue = value.replace(/\D/g, '');
        }

        setFormData(prev => ({ ...prev, [name]: newValue }));

        if (errors[name]) {
            setErrors(prev => {
                const next = { ...prev };
                delete next[name];
                return next;
            });
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (formData.phone.replace(/\D/g, '').length < 6) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.location.trim()) {
            newErrors.location = 'City / Country is required';
        }

        const words = countWords(formData.message);
        if (!formData.message.trim()) {
            newErrors.message = `Acquisition message is required (minimum ${MIN_WORDS} words)`;
        } else if (words < MIN_WORDS) {
            newErrors.message = `Please enter at least ${MIN_WORDS} words outlining your requirements (currently ${words} words)`;
        } else if (words > MAX_WORDS) {
            newErrors.message = `Word limit exceeded: maximum ${MAX_WORDS} words allowed (currently ${words} words)`;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setSubmitStatus('loading');
        setErrorMessage('');

        const words = countWords(formData.message);
        const payload = {
            formType: 'Inventory Enquiry',
            name: formData.name.trim(),
            email: formData.email.trim(),
            countryCode: formData.countryCode,
            phone: formData.phone.trim(),
            location: formData.location.trim(),
            description: `[Inventory Enquiry - ${item.category}]
Asset: ${item.name} (${item.year})
Manufacturer: ${item.details?.manufacturer || 'N/A'}
Model: ${item.details?.model || item.name}
Airframe Hours: ${item.details?.hours || 'N/A'}
Asking Price: ${item.price}
Asset Location: ${item.details?.location || 'N/A'}
Acquisition Timeline: ${formData.timeline}
Client Location: ${formData.location.trim()}

Enquiry Message (${words} words):
${formData.message.trim()}`,
            inventoryDto: {
                assetId: item.id,
                assetName: item.name,
                category: item.category,
                year: item.year,
                price: item.price,
                hours: item.details?.hours || '',
                assetLocation: item.details?.location || '',
                timeline: formData.timeline,
                clientLocation: formData.location.trim(),
                userMessage: formData.message.trim(),
                wordCount: words
            }
        };

        try {
            await SendFormData(payload);
            setSubmitStatus('success');
            setTimeout(() => {
                onClose();
                setSubmitStatus('idle');
            }, 2500);
        } catch (error) {
            console.error('Failed to submit inventory enquiry:', error);
            setSubmitStatus('error');
            setErrorMessage('Unable to submit enquiry at this moment. Please try again or contact us directly.');
            setTimeout(() => setSubmitStatus('idle'), 4000);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="inv-modal-overlay">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inv-modal-backdrop"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ scale: 0.92, opacity: 0, y: 24 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.92, opacity: 0, y: 24 }}
                        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                        className="inv-modal-content"
                        data-lenis-prevent
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            type="button" 
                            className="inv-modal-close-btn" 
                            onClick={onClose} 
                            aria-label="Close modal"
                        >
                            <X size={22} />
                        </button>

                        {/* Modal Header */}
                        <div className="inv-modal-header">
                            <span className="inv-modal-badge">{item.category} Acquisition</span>
                            <h2>Acquisition Enquiry</h2>
                            <p>Direct private consultation & technical review for this asset</p>
                        </div>

                        {/* Auto-filled Asset Summary Box */}
                        <div className="inv-asset-summary-box">
                            {item.image && (
                                <div className="inv-asset-thumb">
                                    <img src={item.image} alt={item.name} />
                                </div>
                            )}
                            <div className="inv-asset-meta">
                                <div className="inv-asset-title-row">
                                    <h3 className="inv-asset-name">{item.name}</h3>
                                    <span className="inv-asset-price">{item.price}</span>
                                </div>
                                <div className="inv-asset-tags">
                                    <span className="inv-tag">
                                        <Calendar size={13} /> Year: <strong>{item.year}</strong>
                                    </span>
                                    {item.details?.hours && (
                                        <span className="inv-tag">
                                            <Clock size={13} /> Hours: <strong>{item.details.hours}</strong>
                                        </span>
                                    )}
                                    {item.details?.location && (
                                        <span className="inv-tag">
                                            <MapPin size={13} /> Based: <strong>{item.details.location}</strong>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Form Submission States */}
                        {submitStatus === 'success' ? (
                            <div className="inv-success-state">
                                <div className="inv-success-icon">
                                    <CheckCircle size={46} />
                                </div>
                                <h3>Enquiry Received</h3>
                                <p>
                                    Thank you, <strong>{formData.name}</strong>. Your enquiry for the <strong>{item.year} {item.name}</strong> has been forwarded directly to our acquisition desk. Our senior advisor will reach out to you shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="inv-enquiry-form" noValidate>
                                <div className="inv-form-grid">
                                    {/* Full Name */}
                                    <div className="inv-form-group span-2">
                                        <label htmlFor="inv-name">
                                            <User size={14} /> Full Name <span className="required-star">*</span>
                                        </label>
                                        <input
                                            id="inv-name"
                                            type="text"
                                            name="name"
                                            placeholder="Enter your full name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={errors.name ? 'error-input' : ''}
                                            required
                                        />
                                        {errors.name && <span className="inv-field-error">{errors.name}</span>}
                                    </div>

                                    {/* Email */}
                                    <div className="inv-form-group span-2">
                                        <label htmlFor="inv-email">
                                            <Mail size={14} /> Email Address <span className="required-star">*</span>
                                        </label>
                                        <input
                                            id="inv-email"
                                            type="email"
                                            name="email"
                                            placeholder="name@company.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? 'error-input' : ''}
                                            required
                                        />
                                        {errors.email && <span className="inv-field-error">{errors.email}</span>}
                                    </div>

                                    {/* Phone with Country Code */}
                                    <div className="inv-form-group span-2">
                                        <label htmlFor="inv-phone">
                                            <Phone size={14} /> Contact Number <span className="required-star">*</span>
                                        </label>
                                        <div className="inv-phone-row">
                                            <CountryCodePicker
                                                value={formData.countryCode}
                                                onChange={(dial) =>
                                                    setFormData(prev => ({ ...prev, countryCode: dial }))
                                                }
                                            />
                                            <input
                                                id="inv-phone"
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone number"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                maxLength={15}
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={errors.phone ? 'error-input' : ''}
                                                required
                                            />
                                        </div>
                                        {errors.phone && <span className="inv-field-error">{errors.phone}</span>}
                                    </div>

                                    {/* Client Location */}
                                    <div className="inv-form-group span-2">
                                        <label htmlFor="inv-location">
                                            <MapPin size={14} /> Your City & Country <span className="required-star">*</span>
                                        </label>
                                        <input
                                            id="inv-location"
                                            type="text"
                                            name="location"
                                            placeholder="e.g. Mumbai, India or London, UK"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className={errors.location ? 'error-input' : ''}
                                            required
                                        />
                                        {errors.location && <span className="inv-field-error">{errors.location}</span>}
                                    </div>

                                    {/* Acquisition Timeline */}
                                    <div className="inv-form-group span-full">
                                        <label htmlFor="inv-timeline">
                                            <Calendar size={14} /> Acquisition Timeline / Intent
                                        </label>
                                        <select
                                            id="inv-timeline"
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            className="inv-select"
                                        >
                                            <option value="Immediate Acquisition (< 30 days)">Immediate Acquisition (&lt; 30 days)</option>
                                            <option value="Planning within 1 - 3 months">Planning within 1 - 3 months</option>
                                            <option value="Schedule Private Viewing / Technical Inspection">Schedule Private Viewing / Technical Inspection</option>
                                            <option value="Trade-in / Financing Consultation">Trade-in / Financing Consultation</option>
                                            <option value="General Asset Information Request">General Asset Information Request</option>
                                        </select>
                                    </div>

                                    {/* Message with strict word limit */}
                                    <div className="inv-form-group span-full">
                                        <div className="inv-label-row">
                                            <label htmlFor="inv-message">
                                                <FileText size={14} /> Requirements & Notes <span className="required-star">*</span>
                                            </label>
                                            <span 
                                                className={`inv-word-counter ${
                                                    currentWordCount > MAX_WORDS 
                                                        ? 'limit-exceeded' 
                                                        : currentWordCount >= MIN_WORDS 
                                                            ? 'limit-valid' 
                                                            : 'limit-pending'
                                                }`}
                                            >
                                                {currentWordCount} / {MAX_WORDS} words (Min {MIN_WORDS})
                                            </span>
                                        </div>

                                        <textarea
                                            id="inv-message"
                                            name="message"
                                            rows="4"
                                            placeholder={`Please outline your acquisition timeline, operational base, or specific technical queries regarding this ${item.name} (${MIN_WORDS} - ${MAX_WORDS} words required)...`}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={errors.message ? 'error-input' : ''}
                                            required
                                        />

                                        <div className="inv-word-hints">
                                            {errors.message ? (
                                                <span className="inv-field-error d-flex align-items-center gap-1">
                                                    <AlertCircle size={13} /> {errors.message}
                                                </span>
                                            ) : currentWordCount < MIN_WORDS ? (
                                                <span className="inv-hint-text">
                                                    Required word limit: Minimum {MIN_WORDS} words, Maximum {MAX_WORDS} words.
                                                </span>
                                            ) : currentWordCount > MAX_WORDS ? (
                                                <span className="inv-field-error d-flex align-items-center gap-1">
                                                    <AlertCircle size={13} /> Please reduce your message by {currentWordCount - MAX_WORDS} words.
                                                </span>
                                            ) : (
                                                <span className="inv-hint-text success">
                                                    ✓ Word count requirement met ({currentWordCount} words).
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {errorMessage && (
                                    <div className="inv-submit-error">
                                        <AlertCircle size={16} />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className={`inv-submit-btn ${submitStatus}`}
                                    disabled={submitStatus === 'loading'}
                                >
                                    {submitStatus === 'loading' ? (
                                        <>
                                            <Loader2 size={18} className="inv-spinner" />
                                            <span>Submitting Enquiry...</span>
                                        </>
                                    ) : submitStatus === 'error' ? (
                                        <>
                                            <AlertCircle size={18} />
                                            <span>Try Again</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            <span>Submit Acquisition Enquiry</span>
                                        </>
                                    )}
                                </button>

                                <div className="inv-privacy-note">
                                    <Shield size={13} />
                                    <span>
                                        Strict confidentiality assured. Raymond Aviation adheres to rigorous privacy and non-disclosure protocols.
                                    </span>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default InventoryEnquiryModal;