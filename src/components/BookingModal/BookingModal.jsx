import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, Clock, MapPin, Users, Phone, Mail, User, Plus, Trash2, ChevronDown, AlertCircle, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import './BookingModal.css';
import { useModal } from '../../context/ModalContext';
import AirportAutocomplete from './AirportAutocomplete';
import CountryCodePicker from '../ContactSection/CountryCodePicker';
import { SendFormData } from '../../services/sendFormData/SendFormData';

// Helper function to get today's date in YYYY-MM-DD format (local timezone)
const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// Helper function to get current time in HH:mm format (local timezone)
const getCurrentTimeString = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
};

const BookingModal = () => {
    const { isBookingModalOpen, closeBookingModal } = useModal();
    const location = useLocation();

    // Determine which form to show based on current page
    const isQuotePage = location.pathname === '/' || location.pathname === '/charter-on-demand';

    const [tripType, setTripType] = useState('oneWay');
    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        formType: '',
        tripType: 'One Way',
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        charterType: 'Aircraft',
        passengers: '1',
        preferredTime: '',
        description: '',
        service: 'Charter on Demand',
        heardRef: '',
        oneWay: {
            from: '',
            to: '',
            date: ''
        },
        roundTrip: {
            from: '',
            to: '',
            departureDate: '',
            returnDate: '',
            returnTime: ''
        },
        multiLeg: [
            {
                from: '',
                to: '',
                date: '',
                time: ''
            }
        ]
    });

    const charterTypes = ['Aircraft', 'Helicopter', 'Air Ambulance', 'Yacht', 'Cargo Charter', 'Group Charter'];

    const services = [
        "Charter on Demand",
        "Jet Card Program",
        "Fractional Ownership",
        "Helishare",
        "Aircraft Acquisition & Sales",
        "Aircraft Management",
        "Helipad Infrastructure"
    ];

    const heardFrom = [
        "Select",
        "Google / Search Engine",
        "Social Media",
        "Word of Mouth",
        "News / Press",
        "Event or Exhibition",
        "Email Newsletter",
        "Partner / Agent",
        "Other",
    ]

    // Reset errors and status when modal opens or closes, or when trip type changes
    useEffect(() => {
        setErrors({});
        setSubmissionStatus('idle');
        setErrorMessage('');
    }, [isBookingModalOpen, tripType, isQuotePage]);

    const clearError = (fieldKey) => {
        if (errors[fieldKey]) {
            setErrors(prev => {
                const updated = { ...prev };
                delete updated[fieldKey];
                return updated;
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        if (name === 'phone') {
            newValue = value.replace(/\D/g, '');
        }
        setFormData(prev => ({ ...prev, [name]: newValue }));
        clearError(name);
    };

    const handleSegmentChange = (index, field, value) => {
        const newSegments = [...formData.multiLeg];
        newSegments[index][field] = value;

        // Auto-adjust date if previous leg date is now after this leg date
        if (field === 'date' && value) {
            for (let i = index + 1; i < newSegments.length; i++) {
                if (newSegments[i].date && newSegments[i].date < value) {
                    newSegments[i].date = value;
                }
            }
        }

        setFormData(prev => ({ ...prev, multiLeg: newSegments }));
        clearError(`multiLeg.${index}.${field}`);
    };

    const addSegment = () => {
        const prevLeg = formData.multiLeg[formData.multiLeg.length - 1];
        const defaultDate = prevLeg?.date || getTodayString();
        setFormData(prev => ({
            ...prev,
            multiLeg: [...prev.multiLeg, { from: '', to: '', date: defaultDate, time: '' }]
        }));
    };

    const removeSegment = (index) => {
        if (formData.multiLeg.length > 1) {
            setFormData(prev => ({ ...prev, multiLeg: prev.multiLeg.filter((_, i) => i !== index) }));
            setErrors(prev => {
                const newErrors = {};
                Object.keys(prev).forEach(key => {
                    if (!key.startsWith(`multiLeg.${index}`)) {
                        newErrors[key] = prev[key];
                    }
                });
                return newErrors;
            });
        }
    };

    const handleOneWayChange = (field, value) => {
        setFormData(prev => ({ ...prev, oneWay: { ...prev.oneWay, [field]: value } }));
        clearError(`oneWay.${field}`);
    };

    const handleRoundTripChange = (field, value) => {
        setFormData(prev => {
            const updatedRT = { ...prev.roundTrip, [field]: value };
            // If departure date changes, ensure return date is not earlier than departure date
            if (field === 'departureDate' && value) {
                if (updatedRT.returnDate && updatedRT.returnDate < value) {
                    updatedRT.returnDate = value;
                }
            }
            return { ...prev, roundTrip: updatedRT };
        });
        clearError(`roundTrip.${field}`);
    };

    // Thorough Validation Function
    const validateForm = () => {
        const newErrors = {};
        const todayStr = getTodayString();
        const currentTimeStr = getCurrentTimeString();

        // 1. Common Name validation
        if (!formData.name || !formData.name.trim()) {
            newErrors.name = 'Full name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        } else if (!/^[A-Za-z\s'\-]+$/.test(formData.name.trim())) {
            newErrors.name = 'Name can only contain letters and spaces';
        }

        // 2. Common Email validation
        if (!formData.email || !formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address';
        }

        // 3. Common Phone validation
        if (!formData.phone || !formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else {
            const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
            if (!/^\d{7,15}$/.test(cleanPhone)) {
                newErrors.phone = 'Please enter a valid 7–15 digit phone number';
            }
        }

        if (isQuotePage) {
            // Quote Form Specific Validations
            if (!formData.passengers || isNaN(formData.passengers) || parseInt(formData.passengers, 10) < 1) {
                newErrors.passengers = 'Enter at least 1 passenger';
            } else if (parseInt(formData.passengers, 10) > 1000) {
                newErrors.passengers = 'Passenger count cannot exceed 1000';
            }

            // Preferred time validation if date is today
            let primaryDate = '';
            if (tripType === 'oneWay') primaryDate = formData.oneWay.date;
            if (tripType === 'roundTrip') primaryDate = formData.roundTrip.departureDate;

            if (primaryDate === todayStr && formData.preferredTime) {
                if (formData.preferredTime < currentTimeStr) {
                    newErrors.preferredTime = 'Preferred time cannot be in the past';
                }
            }

            // Trip Type Validations
            if (tripType === 'oneWay') {
                if (formData.charterType === 'Aircraft') {
                    if (!formData.oneWay.from || !formData.oneWay.from.trim()) {
                        newErrors['oneWay.from'] = 'Origin airport is required';
                    }
                    if (!formData.oneWay.to || !formData.oneWay.to.trim()) {
                        newErrors['oneWay.to'] = 'Destination airport is required';
                    }
                    if (formData.oneWay.from && formData.oneWay.to && formData.oneWay.from.trim().toLowerCase() === formData.oneWay.to.trim().toLowerCase()) {
                        newErrors['oneWay.to'] = 'Destination cannot be the same as origin';
                    }
                }

                if (!formData.oneWay.date) {
                    newErrors['oneWay.date'] = 'Date is required';
                } else if (formData.oneWay.date < todayStr) {
                    newErrors['oneWay.date'] = 'Date cannot be in the past';
                }
            } else if (tripType === 'roundTrip') {
                if (formData.charterType === 'Aircraft') {
                    if (!formData.roundTrip.from || !formData.roundTrip.from.trim()) {
                        newErrors['roundTrip.from'] = 'Origin airport is required';
                    }
                    if (!formData.roundTrip.to || !formData.roundTrip.to.trim()) {
                        newErrors['roundTrip.to'] = 'Destination airport is required';
                    }
                    if (formData.roundTrip.from && formData.roundTrip.to && formData.roundTrip.from.trim().toLowerCase() === formData.roundTrip.to.trim().toLowerCase()) {
                        newErrors['roundTrip.to'] = 'Destination cannot be the same as origin';
                    }
                }

                if (!formData.roundTrip.departureDate) {
                    newErrors['roundTrip.departureDate'] = 'Departure date is required';
                } else if (formData.roundTrip.departureDate < todayStr) {
                    newErrors['roundTrip.departureDate'] = 'Departure date cannot be in the past';
                }

                if (!formData.roundTrip.returnDate) {
                    newErrors['roundTrip.returnDate'] = 'Return date is required';
                } else if (formData.roundTrip.returnDate < todayStr) {
                    newErrors['roundTrip.returnDate'] = 'Return date cannot be in the past';
                } else if (formData.roundTrip.departureDate && formData.roundTrip.returnDate < formData.roundTrip.departureDate) {
                    newErrors['roundTrip.returnDate'] = 'Return date cannot be before departure date';
                }

                if (formData.roundTrip.returnTime) {
                    if (formData.roundTrip.returnDate === todayStr && formData.roundTrip.returnTime < currentTimeStr) {
                        newErrors['roundTrip.returnTime'] = 'Return time cannot be in the past';
                    } else if (
                        formData.roundTrip.departureDate &&
                        formData.roundTrip.returnDate === formData.roundTrip.departureDate &&
                        formData.preferredTime &&
                        formData.roundTrip.returnTime <= formData.preferredTime
                    ) {
                        newErrors['roundTrip.returnTime'] = 'Return time must be after preferred time';
                    }
                }
            } else if (tripType === 'multiLeg') {
                if (!formData.multiLeg || formData.multiLeg.length === 0) {
                    newErrors['multiLeg'] = 'At least one leg is required';
                } else {
                    formData.multiLeg.forEach((leg, idx) => {
                        if (formData.charterType === 'Aircraft') {
                            if (!leg.from || !leg.from.trim()) {
                                newErrors[`multiLeg.${idx}.from`] = 'Origin is required';
                            }
                            if (!leg.to || !leg.to.trim()) {
                                newErrors[`multiLeg.${idx}.to`] = 'Destination is required';
                            }
                            if (leg.from && leg.to && leg.from.trim().toLowerCase() === leg.to.trim().toLowerCase()) {
                                newErrors[`multiLeg.${idx}.to`] = 'Destination cannot equal origin';
                            }
                        }

                        if (!leg.date) {
                            newErrors[`multiLeg.${idx}.date`] = 'Date is required';
                        } else if (leg.date < todayStr) {
                            newErrors[`multiLeg.${idx}.date`] = 'Date cannot be in the past';
                        } else if (idx > 0 && formData.multiLeg[idx - 1].date && leg.date < formData.multiLeg[idx - 1].date) {
                            newErrors[`multiLeg.${idx}.date`] = `Leg ${idx + 1} date cannot be before Leg ${idx} date`;
                        }

                        if (!leg.time) {
                            newErrors[`multiLeg.${idx}.time`] = 'Time is required';
                        } else {
                            if (leg.date === todayStr && leg.time < currentTimeStr) {
                                newErrors[`multiLeg.${idx}.time`] = 'Time cannot be in the past';
                            }
                            if (idx > 0 && formData.multiLeg[idx - 1].date === leg.date && formData.multiLeg[idx - 1].time && leg.time <= formData.multiLeg[idx - 1].time) {
                                newErrors[`multiLeg.${idx}.time`] = `Leg ${idx + 1} time must be after Leg ${idx} time`;
                            }
                        }
                    });
                }
            }
        } else {
            // Contact Form Specific Validations
            if (formData.description && formData.description.trim().length > 0 && formData.description.trim().length < 5) {
                newErrors.description = 'Message should be at least 5 characters';
            }
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
                    closeBookingModal();
                    setSubmissionStatus('idle');
                    setFormData({
                        formType: '',
                        tripType: 'One Way',
                        name: '',
                        email: '',
                        countryCode: '+91',
                        phone: '',
                        charterType: 'Aircraft',
                        passengers: '1',
                        preferredTime: '',
                        description: '',
                        service: 'Charter on Demand',
                        oneWay: { from: '', to: '', date: '' },
                        roundTrip: { from: '', to: '', departureDate: '', returnDate: '', returnTime: '' },
                        multiLeg: [{ from: '', to: '', date: '', time: '' }]
                    });
                }, 1800);
            })
            .catch((err) => {
                console.error(err);
                setSubmissionStatus('error');
                setErrorMessage(err?.response?.data?.message || err?.message || 'Failed to submit form. Please check your connection and try again.');
            });
    };

    const todayStr = getTodayString();
    const currentTimeStr = getCurrentTimeString();

    return (
        <AnimatePresence>
            {isBookingModalOpen && (
                <div className="booking-modal-overlay">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-backdrop"
                        onClick={closeBookingModal}
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="booking-modal-content"
                        data-lenis-prevent
                    >
                        <button className="close-btn" onClick={closeBookingModal}>
                            <X size={24} />
                        </button>

                        <div className="modal-header">
                            <h2>{isQuotePage ? "Request a Quote" : "Contact Us"}</h2>
                        </div>

                        {isQuotePage ? (
                            <div className="quote-form-container">
                                <div className="trip-type-tabs">
                                    <button
                                        type="button"
                                        className={tripType === 'oneWay' ? 'active' : ''}
                                        onClick={() => { setTripType('oneWay'); setFormData(prev => ({ ...prev, tripType: 'One Way' })); }}
                                    >One Way</button>
                                    <button
                                        type="button"
                                        className={tripType === 'roundTrip' ? 'active' : ''}
                                        onClick={() => { setTripType('roundTrip'); setFormData(prev => ({ ...prev, tripType: 'Round Trip' })); }}
                                    >Round Trip</button>
                                    <button
                                        type="button"
                                        className={tripType === 'multiLeg' ? 'active' : ''}
                                        onClick={() => { setTripType('multiLeg'); setFormData(prev => ({ ...prev, tripType: 'Multi Legs' })); }}
                                    >Multi Legs</button>
                                </div>

                                {/* Main Big Enquiry Form */}
                                <form onSubmit={handleSubmit} noValidate className="booking-form mt-4">
                                    <div className="form-grid">
                                        {/* Full Name */}
                                        <div className="form-group span-2">
                                            <label><User size={14} /> Full Name <span className="required-star">*</span></label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={errors.name ? 'bm-input-error' : ''}
                                            />
                                            {errors.name && <span className="bm-error-text"><AlertCircle size={12} /> {errors.name}</span>}
                                        </div>

                                        {/* Email */}
                                        <div className="form-group span-1">
                                            <label><Mail size={14} /> Email <span className="required-star">*</span></label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={errors.email ? 'bm-input-error' : ''}
                                            />
                                            {errors.email && <span className="bm-error-text"><AlertCircle size={12} /> {errors.email}</span>}
                                        </div>

                                        {/* Phone */}
                                        <div className="form-group span-1">
                                            <label><Phone size={14} /> Phone <span className="required-star">*</span></label>
                                            <div className="bm-phone-row">
                                                <CountryCodePicker
                                                    value={formData.countryCode}
                                                    onChange={(dial) => setFormData(prev => ({ ...prev, countryCode: dial }))}
                                                />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                    maxLength={15}
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className={`bm-phone-input ${errors.phone ? 'bm-input-error' : ''}`}
                                                />
                                            </div>
                                            {errors.phone && <span className="bm-error-text"><AlertCircle size={12} /> {errors.phone}</span>}
                                        </div>

                                        {/* Passengers */}
                                        <div className="form-group span-1">
                                            <label><Users size={14} /> Passengers <span className="required-star">*</span></label>
                                            <input
                                                type="number"
                                                name="passengers"
                                                placeholder="Count"
                                                min="1"
                                                max="1000"
                                                value={formData.passengers}
                                                onChange={handleChange}
                                                className={errors.passengers ? 'bm-input-error' : ''}
                                            />
                                            {errors.passengers && <span className="bm-error-text"><AlertCircle size={12} /> {errors.passengers}</span>}
                                        </div>

                                        {/* Preferred Time */}
                                        <div className="form-group span-1">
                                            <label><Clock size={14} /> Preferred Time</label>
                                            <input
                                                type="time"
                                                name="preferredTime"
                                                value={formData.preferredTime}
                                                onChange={handleChange}
                                                min={(tripType === 'oneWay' && formData.oneWay.date === todayStr) || (tripType === 'roundTrip' && formData.roundTrip.departureDate === todayStr) ? currentTimeStr : undefined}
                                                className={errors.preferredTime ? 'bm-input-error' : ''}
                                            />
                                            {errors.preferredTime && <span className="bm-error-text"><AlertCircle size={12} /> {errors.preferredTime}</span>}
                                        </div>

                                        {/* Charter Type */}
                                        <div className="form-group span-3">
                                            <label><ChevronDown size={14} /> Charter Type</label>
                                            <select name="charterType" value={formData.charterType} onChange={handleChange} className="form-select-custom">
                                                {charterTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                            </select>
                                        </div>

                                        <div className="divider-line span-3"></div>

                                        {/* Trip Specific Fields: One Way */}
                                        {tripType === 'oneWay' && (
                                            <>
                                                {formData.charterType === 'Aircraft' && (
                                                    <>
                                                        <div className="form-group">
                                                            <label><MapPin size={14} /> From <span className="required-star">*</span></label>
                                                            <AirportAutocomplete
                                                                value={formData.oneWay.from}
                                                                onChange={(val) => handleOneWayChange('from', val)}
                                                                placeholder="Select Origin Airport"
                                                                hasError={!!errors['oneWay.from']}
                                                            />
                                                            {errors['oneWay.from'] && <span className="bm-error-text"><AlertCircle size={12} /> {errors['oneWay.from']}</span>}
                                                        </div>
                                                        <div className="form-group">
                                                            <label><MapPin size={14} /> To <span className="required-star">*</span></label>
                                                            <AirportAutocomplete
                                                                value={formData.oneWay.to}
                                                                onChange={(val) => handleOneWayChange('to', val)}
                                                                placeholder="Select Destination Airport"
                                                                hasError={!!errors['oneWay.to']}
                                                            />
                                                            {errors['oneWay.to'] && <span className="bm-error-text"><AlertCircle size={12} /> {errors['oneWay.to']}</span>}
                                                        </div>
                                                    </>
                                                )}
                                                <div className="form-group">
                                                    <label><Calendar size={14} /> Date <span className="required-star">*</span></label>
                                                    <input
                                                        type="date"
                                                        min={todayStr}
                                                        value={formData.oneWay.date}
                                                        onChange={(e) => handleOneWayChange('date', e.target.value)}
                                                        className={errors['oneWay.date'] ? 'bm-input-error' : ''}
                                                    />
                                                    {errors['oneWay.date'] && <span className="bm-error-text"><AlertCircle size={12} /> {errors['oneWay.date']}</span>}
                                                </div>
                                            </>
                                        )}

                                        {/* Trip Specific Fields: Round Trip */}
                                        {tripType === 'roundTrip' && (
                                            <>
                                                {formData.charterType === 'Aircraft' && (
                                                    <>
                                                        <div className="form-group">
                                                            <label><MapPin size={14} /> From <span className="required-star">*</span></label>
                                                            <AirportAutocomplete
                                                                value={formData.roundTrip.from}
                                                                onChange={(val) => handleRoundTripChange('from', val)}
                                                                placeholder="Select Origin Airport"
                                                                hasError={!!errors['roundTrip.from']}
                                                            />
                                                            {errors['roundTrip.from'] && <span className="bm-error-text"><AlertCircle size={12} /> {errors['roundTrip.from']}</span>}
                                                        </div>
                                                        <div className="form-group">
                                                            <label><MapPin size={14} /> To <span className="required-star">*</span></label>
                                                            <AirportAutocomplete
                                                                value={formData.roundTrip.to}
                                                                onChange={(val) => handleRoundTripChange('to', val)}
                                                                placeholder="Select Destination Airport"
                                                                hasError={!!errors['roundTrip.to']}
                                                            />
                                                            {errors['roundTrip.to'] && <span className="bm-error-text"><AlertCircle size={12} /> {errors['roundTrip.to']}</span>}
                                                        </div>
                                                    </>
                                                )}
                                                <div className="form-group">
                                                    <label><Calendar size={14} /> Departure Date <span className="required-star">*</span></label>
                                                    <input
                                                        type="date"
                                                        min={todayStr}
                                                        value={formData.roundTrip.departureDate}
                                                        onChange={(e) => handleRoundTripChange('departureDate', e.target.value)}
                                                        className={errors['roundTrip.departureDate'] ? 'bm-input-error' : ''}
                                                    />
                                                    {errors['roundTrip.departureDate'] && <span className="bm-error-text"><AlertCircle size={12} /> {errors['roundTrip.departureDate']}</span>}
                                                </div>
                                                <div className="form-group span-2">
                                                    <label><Calendar size={14} /> Return Date <span className="required-star">*</span></label>
                                                    <input
                                                        type="date"
                                                        min={formData.roundTrip.departureDate || todayStr}
                                                        value={formData.roundTrip.returnDate}
                                                        onChange={(e) => handleRoundTripChange('returnDate', e.target.value)}
                                                        className={errors['roundTrip.returnDate'] ? 'bm-input-error' : ''}
                                                    />
                                                    {errors['roundTrip.returnDate'] && <span className="bm-error-text"><AlertCircle size={12} /> {errors['roundTrip.returnDate']}</span>}
                                                </div>
                                                <div className="form-group span-1">
                                                    <label><Clock size={14} /> Return Time</label>
                                                    <input
                                                        type="time"
                                                        value={formData.roundTrip.returnTime}
                                                        onChange={(e) => handleRoundTripChange('returnTime', e.target.value)}
                                                        min={formData.roundTrip.returnDate === todayStr ? currentTimeStr : undefined}
                                                        className={errors['roundTrip.returnTime'] ? 'bm-input-error' : ''}
                                                    />
                                                    {errors['roundTrip.returnTime'] && <span className="bm-error-text"><AlertCircle size={12} /> {errors['roundTrip.returnTime']}</span>}
                                                </div>
                                            </>
                                        )}

                                        {/* Trip Specific Fields: Multi Leg */}
                                        {tripType === 'multiLeg' && (
                                            <div className="multi-leg-container span-3">
                                                {formData.multiLeg.map((seg, idx) => {
                                                    const minLegDate = idx > 0 ? (formData.multiLeg[idx - 1].date || todayStr) : todayStr;
                                                    return (
                                                        <div key={idx} className="leg-item mb-3">
                                                            <div className="leg-header d-flex justify-content-between align-items-center mb-2">
                                                                <span className="leg-label">Leg {idx + 1}</span>
                                                                {formData.multiLeg.length > 1 && (
                                                                    <button type="button" onClick={() => removeSegment(idx)} className="remove-leg-btn"><Trash2 size={14} /></button>
                                                                )}
                                                            </div>
                                                            <div className="leg-grid">
                                                                {formData.charterType === 'Aircraft' && (
                                                                    <>
                                                                        <div>
                                                                            <AirportAutocomplete
                                                                                value={seg.from}
                                                                                onChange={(val) => handleSegmentChange(idx, 'from', val)}
                                                                                placeholder="Origin Airport"
                                                                                hasError={!!errors[`multiLeg.${idx}.from`]}
                                                                            />
                                                                            {errors[`multiLeg.${idx}.from`] && <span className="bm-error-text"><AlertCircle size={12} /> {errors[`multiLeg.${idx}.from`]}</span>}
                                                                        </div>
                                                                        <div>
                                                                            <AirportAutocomplete
                                                                                value={seg.to}
                                                                                onChange={(val) => handleSegmentChange(idx, 'to', val)}
                                                                                placeholder="Destination Airport"
                                                                                hasError={!!errors[`multiLeg.${idx}.to`]}
                                                                            />
                                                                            {errors[`multiLeg.${idx}.to`] && <span className="bm-error-text"><AlertCircle size={12} /> {errors[`multiLeg.${idx}.to`]}</span>}
                                                                        </div>
                                                                    </>
                                                                )}
                                                                <div className="d-flex flex-column gap-1">
                                                                    <div className="d-flex gap-2">
                                                                        <input
                                                                            type="date"
                                                                            min={minLegDate}
                                                                            value={seg.date}
                                                                            onChange={(e) => handleSegmentChange(idx, 'date', e.target.value)}
                                                                            className={errors[`multiLeg.${idx}.date`] ? 'bm-input-error' : ''}
                                                                        />
                                                                        <input
                                                                            type="time"
                                                                            value={seg.time}
                                                                            min={seg.date === todayStr ? currentTimeStr : undefined}
                                                                            onChange={(e) => handleSegmentChange(idx, 'time', e.target.value)}
                                                                            className={errors[`multiLeg.${idx}.time`] ? 'bm-input-error' : ''}
                                                                        />
                                                                    </div>
                                                                    {errors[`multiLeg.${idx}.date`] && <span className="bm-error-text"><AlertCircle size={12} /> {errors[`multiLeg.${idx}.date`]}</span>}
                                                                    {errors[`multiLeg.${idx}.time`] && <span className="bm-error-text"><AlertCircle size={12} /> {errors[`multiLeg.${idx}.time`]}</span>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                                {errors['multiLeg'] && <div className="bm-error-text mb-2"><AlertCircle size={12} /> {errors['multiLeg']}</div>}
                                                <button type="button" onClick={addSegment} className="add-leg-btn mt-2">
                                                    <Plus size={14} /> Add Another Leg
                                                </button>
                                            </div>
                                        )}

                                        <div className="form-group span-3">
                                            <label>Special Requirements</label>
                                            <textarea name="description" placeholder="Any preferences..." rows="2" value={formData.description} onChange={handleChange}></textarea>
                                        </div>
                                    </div>

                                    {submissionStatus === 'error' && errorMessage && (
                                        <div className="bm-status-banner error">
                                            <AlertCircle size={16} />
                                            <span>{errorMessage}</span>
                                        </div>
                                    )}

                                    {submissionStatus === 'success' && (
                                        <div className="bm-status-banner success">
                                            <CheckCircle size={16} />
                                            <span>Your quote request has been sent successfully!</span>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className={`modal-submit-btn status-${submissionStatus}`}
                                        disabled={submissionStatus === 'sending' || submissionStatus === 'success'}
                                        onClick={() => setFormData(prev => ({ ...prev, formType: 'Quote' }))}
                                    >
                                        {submissionStatus === 'sending' && (
                                            <>
                                                <Loader2 size={18} className="bm-spinner" /> Sending Request...
                                            </>
                                        )}
                                        {submissionStatus === 'success' && (
                                            <>
                                                <CheckCircle size={18} /> Request Sent!
                                            </>
                                        )}
                                        {submissionStatus === 'error' && (
                                            <>
                                                <XCircle size={18} /> Retry Request <Send size={18} />
                                            </>
                                        )}
                                        {submissionStatus === 'idle' && (
                                            <>
                                                Send Quote Request <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            /* Contact Us Form */
                            <form onSubmit={handleSubmit} noValidate className="booking-form">
                                <div className="form-grid">
                                    <div className="form-group span-3">
                                        <label><User size={14} /> Full Name <span className="required-star">*</span></label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={errors.name ? 'bm-input-error' : ''}
                                        />
                                        {errors.name && <span className="bm-error-text"><AlertCircle size={12} /> {errors.name}</span>}
                                    </div>
                                    <div className="form-group span-3">
                                        <label><Mail size={14} /> Email <span className="required-star">*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? 'bm-input-error' : ''}
                                        />
                                        {errors.email && <span className="bm-error-text"><AlertCircle size={12} /> {errors.email}</span>}
                                    </div>
                                    <div className="form-group span-3">
                                        <label><Phone size={14} /> Phone <span className="required-star">*</span></label>
                                        <div className="bm-phone-row">
                                            <CountryCodePicker
                                                value={formData.countryCode}
                                                onChange={(dial) => setFormData(prev => ({ ...prev, countryCode: dial }))}
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                maxLength={15}
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`bm-phone-input ${errors.phone ? 'bm-input-error' : ''}`}
                                            />
                                        </div>
                                        {errors.phone && <span className="bm-error-text"><AlertCircle size={12} /> {errors.phone}</span>}
                                    </div>
                                    <div className="form-group span-3">
                                        <label><ChevronDown size={14} /> Interested Service</label>
                                        <select name="service" value={formData.service} onChange={handleChange} className="form-select-custom">
                                            {services.map(service => <option key={service} value={service}>{service}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group span-3">
                                        <label><ChevronDown size={14} /> How did you heard about us?</label>
                                        <select name="heardRef" value={formData.heardRef} onChange={handleChange} className="form-select-custom">
                                            {heardFrom.map(heardFrom => <option key={heardFrom} value={heardFrom}>{heardFrom}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group span-3">
                                        <label>Message</label>
                                        <textarea
                                            name="description"
                                            placeholder="How can we help you?"
                                            rows="3"
                                            value={formData.description}
                                            onChange={handleChange}
                                            className={errors.description ? 'bm-input-error' : ''}
                                        ></textarea>
                                        {errors.description && <span className="bm-error-text"><AlertCircle size={12} /> {errors.description}</span>}
                                    </div>
                                </div>

                                {submissionStatus === 'error' && errorMessage && (
                                    <div className="bm-status-banner error">
                                        <AlertCircle size={16} />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                {submissionStatus === 'success' && (
                                    <div className="bm-status-banner success">
                                        <CheckCircle size={16} />
                                        <span>Your message has been sent successfully!</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className={`modal-submit-btn status-${submissionStatus}`}
                                    disabled={submissionStatus === 'sending' || submissionStatus === 'success'}
                                    onClick={() => setFormData(prev => ({ ...prev, formType: 'Contact' }))}
                                >
                                    {submissionStatus === 'sending' && (
                                        <>
                                            <Loader2 size={18} className="bm-spinner" /> Sending Message...
                                        </>
                                    )}
                                    {submissionStatus === 'success' && (
                                        <>
                                            <CheckCircle size={18} /> Message Sent!
                                        </>
                                    )}
                                    {submissionStatus === 'error' && (
                                        <>
                                            <XCircle size={18} /> Retry Message <Send size={18} />
                                        </>
                                    )}
                                    {submissionStatus === 'idle' && (
                                        <>
                                            Send Message <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
