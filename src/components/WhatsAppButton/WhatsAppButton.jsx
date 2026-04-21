import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = "31850261636"; // Optimized for wa.me
    const message = "Hello, I would like to inquire about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappUrl} 
            className="whatsapp-float" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
        >
            <div className="whatsapp-pulse"></div>
            <FaWhatsapp className="whatsapp-icon" />
            <span className="tooltip-text">Chat with us</span>
        </a>
    );
};

export default WhatsAppButton;
