import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { emptyLegFlights } from '../../data/emptyLegData';
import './EmptyLegNotification.css';

const EmptyLegNotification = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Only trigger popup if there are available empty leg flights
        if (!emptyLegFlights || emptyLegFlights.length === 0) {
            return;
        }

        // Check if dismissed in this session
        const isDismissed = sessionStorage.getItem('dismissed_empty_leg_popup');
        if (isDismissed) {
            return;
        }

        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = (e) => {
        e.stopPropagation();
        setIsVisible(false);
        sessionStorage.setItem('dismissed_empty_leg_popup', 'true');
    };

    const handleViewFlights = () => {
        setIsVisible(false);
        sessionStorage.setItem('dismissed_empty_leg_popup', 'true');
        navigate('/empty-leg-flights');
    };

    // Don't display on empty leg flights page itself if user is already there
    if (!isVisible || location.pathname === '/empty-leg-flights') {
        return null;
    }

    const availableCount = emptyLegFlights.length;
    const featuredFlight = emptyLegFlights[0];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    className="el-popup-container"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="el-popup-card">
                        <button 
                            className="el-popup-close" 
                            onClick={handleClose}
                            aria-label="Close notification"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="el-popup-header">
                            <div className="el-popup-badge">
                                <span className="el-badge-dot"></span>
                                <span>Exclusive Opportunity</span>
                            </div>
                        </div>

                        <div className="el-popup-body">
                            <div className="el-popup-icon-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M6.428 1.151C6.708.527 7.265 0 8 0s1.292.527 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                                </svg>
                            </div>
                            <div className="el-popup-text">
                                <h4 className="el-popup-title">
                                    {availableCount === 1 ? '1 Empty Leg Available' : `${availableCount} Empty Leg Flights Available`}
                                </h4>
                                <p className="el-popup-desc">
                                    {featuredFlight?.route 
                                        ? `Featured: ${featuredFlight.route} & more at exceptional rates.` 
                                        : 'Repositioning private jet charters available at exceptional value.'}
                                </p>
                            </div>
                        </div>

                        <div className="el-popup-actions">
                            <button className="el-popup-btn" onClick={handleViewFlights}>
                                <span>Explore Flights</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default EmptyLegNotification;
