import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, Clock, MapPin, Users, Phone, Mail, User, Plus, Trash2, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import './BookingModal.css';
import { useModal } from '../../context/ModalContext';

const BookingModal = () => {
    const { isBookingModalOpen, closeBookingModal } = useModal();
    const location = useLocation();
    
    // Determine which form to show based on current page
    const isQuotePage = location.pathname === '/' || location.pathname === '/charter-on-demand';

    const [tripType, setTripType] = useState('oneWay');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        charterType: 'Private Jet',
        passengers: '',
        time: '',
        description: '',
        service: 'Charter on Demand'
    });

    const [segments, setSegments] = useState([
        { from: '', to: '', date: '', time: '' }
    ]);

    const [roundTrip, setRoundTrip] = useState({
        from: '',
        to: '',
        departureDate: '',
        returnDate: '',
        departureTime: '',
        returnTime: ''
    });

    const charterTypes = ['Private Jet', 'Helicopter', 'Air Ambulance', 'Cargo Charter', 'Group Charter'];
    const services = [
        "Charter on Demand",
        "Jet Card Program",
        "Fractional Ownership",
        "Aircraft Acquisition & Sales",
        "Aircraft Management",
        "Helipad Infrastructure"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSegmentChange = (index, field, value) => {
        const newSegments = [...segments];
        newSegments[index][field] = value;
        setSegments(newSegments);
    };

    const addSegment = () => {
        setSegments([...segments, { from: '', to: '', date: '', time: '' }]);
    };

    const removeSegment = (index) => {
        if (segments.length > 1) {
            setSegments(segments.filter((_, i) => i !== index));
        }
    };

    const handleRoundTripChange = (field, value) => {
        setRoundTrip(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalData = {
            ...formData,
            tripType,
            details: tripType === 'multiLeg' ? segments : (tripType === 'roundTrip' ? roundTrip : segments[0])
        };
        console.log('Form Data:', finalData);
        alert('Request sent successfully!');
        closeBookingModal();
    };

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
                                        className={tripType === 'oneWay' ? 'active' : ''} 
                                        onClick={() => setTripType('oneWay')}
                                    >One Way</button>
                                    <button 
                                        className={tripType === 'roundTrip' ? 'active' : ''} 
                                        onClick={() => setTripType('roundTrip')}
                                    >Round Trip</button>
                                    <button 
                                        className={tripType === 'multiLeg' ? 'active' : ''} 
                                        onClick={() => setTripType('multiLeg')}
                                    >Multi Legs</button>
                                </div>

                                <form onSubmit={handleSubmit} className="booking-form mt-4">
                                    <div className="form-grid">
                                        {/* Common Top Fields */}
                                        <div className="form-group span-2">
                                            <label><User size={14} /> Full Name</label>
                                            <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div className="form-group span-1">
                                            <label><Mail size={14} /> Email</label>
                                            <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
                                        </div>

                                        <div className="form-group span-1">
                                            <label><Phone size={14} /> Phone</label>
                                            <input type="tel" name="phone" placeholder="Phone" required value={formData.phone} onChange={handleChange} />
                                        </div>
                                        <div className="form-group span-1">
                                            <label><Users size={14} /> Passengers</label>
                                            <input type="number" name="passengers" placeholder="Count" required value={formData.passengers} onChange={handleChange} />
                                        </div>
                                        <div className="form-group span-1">
                                            <label><Clock size={14} /> Preferred Time</label>
                                            <input type="time" name="time" value={formData.time} onChange={handleChange} />
                                        </div>

                                        <div className="form-group span-3">
                                            <label><ChevronDown size={14} /> Charter Type</label>
                                            <select name="charterType" value={formData.charterType} onChange={handleChange} className="form-select-custom">
                                                {charterTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                            </select>
                                        </div>

                                        <div className="divider-line span-3"></div>

                                        {/* Trip Specific Fields */}
                                        {tripType === 'oneWay' && (
                                            <>
                                                <div className="form-group">
                                                    <label><MapPin size={14} /> From</label>
                                                    <input type="text" placeholder="Origin" required value={segments[0].from} onChange={(e) => handleSegmentChange(0, 'from', e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <label><MapPin size={14} /> To</label>
                                                    <input type="text" placeholder="Destination" required value={segments[0].to} onChange={(e) => handleSegmentChange(0, 'to', e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <label><Calendar size={14} /> Date</label>
                                                    <input type="date" required value={segments[0].date} onChange={(e) => handleSegmentChange(0, 'date', e.target.value)} />
                                                </div>
                                            </>
                                        )}

                                        {tripType === 'roundTrip' && (
                                            <>
                                                <div className="form-group">
                                                    <label><MapPin size={14} /> From</label>
                                                    <input type="text" placeholder="Origin" required value={roundTrip.from} onChange={(e) => handleRoundTripChange('from', e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <label><MapPin size={14} /> To</label>
                                                    <input type="text" placeholder="Destination" required value={roundTrip.to} onChange={(e) => handleRoundTripChange('to', e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <label><Calendar size={14} /> Departure Date</label>
                                                    <input type="date" required value={roundTrip.departureDate} onChange={(e) => handleRoundTripChange('departureDate', e.target.value)} />
                                                </div>
                                                <div className="form-group span-2">
                                                    <label><Calendar size={14} /> Return Date</label>
                                                    <input type="date" required value={roundTrip.returnDate} onChange={(e) => handleRoundTripChange('returnDate', e.target.value)} />
                                                </div>
                                                <div className="form-group span-1">
                                                    <label><Clock size={14} /> Return Time</label>
                                                    <input type="time" value={roundTrip.returnTime} onChange={(e) => handleRoundTripChange('returnTime', e.target.value)} />
                                                </div>
                                            </>
                                        )}

                                        {tripType === 'multiLeg' && (
                                            <div className="multi-leg-container span-3">
                                                {segments.map((seg, idx) => (
                                                    <div key={idx} className="leg-item mb-3">
                                                        <div className="leg-header d-flex justify-content-between align-items-center mb-2">
                                                            <span className="leg-label">Leg {idx + 1}</span>
                                                            {segments.length > 1 && (
                                                                <button type="button" onClick={() => removeSegment(idx)} className="remove-leg-btn"><Trash2 size={14} /></button>
                                                            )}
                                                        </div>
                                                        <div className="leg-grid">
                                                            <input type="text" placeholder="From" required value={seg.from} onChange={(e) => handleSegmentChange(idx, 'from', e.target.value)} />
                                                            <input type="text" placeholder="To" required value={seg.to} onChange={(e) => handleSegmentChange(idx, 'to', e.target.value)} />
                                                            <div className="d-flex gap-2">
                                                                <input type="date" required value={seg.date} onChange={(e) => handleSegmentChange(idx, 'date', e.target.value)} />
                                                                <input type="time" required value={seg.time} onChange={(e) => handleSegmentChange(idx, 'time', e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
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

                                    <button type="submit" className="modal-submit-btn">Send Quote Request <Send size={18} /></button>
                                </form>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="booking-form">
                                <div className="form-grid">
                                    <div className="form-group span-3">
                                        <label><User size={14} /> Full Name</label>
                                        <input type="text" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div className="form-group span-3">
                                        <label><Mail size={14} /> Email</label>
                                        <input type="email" name="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div className="form-group span-3">
                                        <label><Phone size={14} /> Phone</label>
                                        <input type="tel" name="phone" placeholder="+1 234..." required value={formData.phone} onChange={handleChange} />
                                    </div>
                                    <div className="form-group span-3">
                                        <label><ChevronDown size={14} /> Interested Service</label>
                                        <select name="service" value={formData.service} onChange={handleChange} className="form-select-custom">
                                            {services.map(service => <option key={service} value={service}>{service}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group span-3">
                                        <label>Message</label>
                                        <textarea name="description" placeholder="How can we help you?" rows="3" value={formData.description} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="modal-submit-btn">Send Message <Send size={18} /></button>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
