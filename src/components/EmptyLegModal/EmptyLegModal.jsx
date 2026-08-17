import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Users, Phone, Mail, User, Plane, MapPin, Calendar, Loader2, CheckCircle, XCircle } from 'lucide-react';
import './EmptyLegModal.css';
import { useModal } from '../../context/ModalContext';
import CountryCodePicker from '../ContactSection/CountryCodePicker';
import { SendFormData } from '../../services/sendFormData/SendFormData';


const EmptyLegModal = () => {
    const { isEmptyLegModalOpen, closeEmptyLegModal, selectedEmptyLeg } = useModal();
    const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

    const [formData, setFormData] = useState({
        formType: 'Empty Leg',
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        passengers: "1",
        description: "",
        emptyLegDto : {
            route: "",
            date: "",
            aircraft: "",
        }
    });

    // console.log("this is the selected empty leg", formData)

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        if (name === 'phone') {
            newValue = value.replace(/\D/g, '');
        }
        setFormData(prev => ({ ...prev, [name]: newValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalData = {
            ...formData,
            emptyLegDto:{
                aircraft:selectedEmptyLeg.aircraft,
            route:selectedEmptyLeg.route,
            date:selectedEmptyLeg.date
            }
        };
        setSubmitStatus('loading');
        SendFormData(finalData)
        .then((res)=> {
            console.log(res);
            setSubmitStatus('success');
            setTimeout(() => {
                setFormData({
                    formType: 'Empty Leg',
                    name: "",
                    email: "",
                    countryCode: "+91",
                    phone: "",
                    passengers: "1",
                    description: "",
                    emptyLegDto : {
                        route: "",
                        date: "",
                        aircraft: "",
                    }
                });
                closeEmptyLegModal();
                setSubmitStatus('idle');
            }, 2000);
        })
        .catch((error)=>{
            console.error(error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
        });
        const aircraftName = selectedEmptyLeg ? selectedEmptyLeg.aircraft : 'Empty Leg flights';
        // alert('Your enquiry for ' + aircraftName + ' has been sent successfully!');
        
    };



    return (
        <AnimatePresence>
            {isEmptyLegModalOpen && (
                <div className="booking-modal-overlay">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-backdrop"
                        onClick={closeEmptyLegModal}
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="booking-modal-content"
                        data-lenis-prevent
                    >
                        <button className="close-btn" onClick={closeEmptyLegModal}>
                            <X size={24} />
                        </button>

                        <div className="modal-header d-flex flex-column align-items-start">
                            <h2>Empty Leg Enquiry</h2>
                            <p>{selectedEmptyLeg ? `Requesting details for ${selectedEmptyLeg.route} flight` : "Enquire about upcoming empty leg opportunities"}</p>
                        </div>

                        {selectedEmptyLeg && (
                            <div className="empty-leg-details-summary mb-4">
                                <div className="details-grid">
                                    <div className="detail-item">
                                        <Plane size={16} />
                                        <span>{selectedEmptyLeg.aircraft}</span>
                                    </div>
                                    <div className="detail-item">
                                        <MapPin size={16} />
                                        <span>{selectedEmptyLeg.route}</span>
                                    </div>
                                    <div className="detail-item">
                                        <Calendar size={16} />
                                        <span>{selectedEmptyLeg.date}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="booking-form">
                            <div className="form-grid">
                                <div className="form-group span-3">
                                    <label><User size={14} /> Full Name <span className="required-star">*</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group span-3">
                                    <label><Mail size={14} /> Email <span className="required-star">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group span-3">
                                    <label><Phone size={14} /> Phone <span className="required-star">*</span></label>
                                    <div className="el-phone-row">
                                        <CountryCodePicker
                                            value={formData.countryCode}
                                            onChange={(dial) =>
                                                setFormData(prev => ({ ...prev, countryCode: dial }))
                                            }
                                        />
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Enter your phone number"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            maxLength={15}
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group span-3">
                                    <label><Users size={14} /> Number of Passengers <span className="required-star">*</span></label>
                                    <input
                                        type="number"
                                        name="passengers"
                                        placeholder="Count"
                                        required
                                        value={formData.passengers}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group span-3">
                                    <label>Additional Requirements</label>
                                    <textarea
                                        name="description"
                                        placeholder="Any specific requests or preferences?"
                                        rows="3"
                                        value={formData.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                className={`modal-submit-btn ${submitStatus === 'success' ? 'success' : submitStatus === 'error' ? 'error' : ''}`}
                                disabled={submitStatus === 'loading' || submitStatus === 'success'}
                            >
                                {submitStatus === 'loading' ? (
                                    <>Sending... <Loader2 size={18} className="animate-spin" /></>
                                ) : submitStatus === 'success' ? (
                                    <>Sent Successfully <CheckCircle size={18} /></>
                                ) : submitStatus === 'error' ? (
                                    <>Failed to Send <XCircle size={18} /></>
                                ) : (
                                    <>Send Enquiry <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EmptyLegModal;
