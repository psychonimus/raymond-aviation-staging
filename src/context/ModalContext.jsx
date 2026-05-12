import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [isEmptyLegModalOpen, setIsEmptyLegModalOpen] = useState(false);
    const [selectedEmptyLeg, setSelectedEmptyLeg] = useState(null);

    const openBookingModal = () => setIsBookingModalOpen(true);
    const closeBookingModal = () => setIsBookingModalOpen(false);

    const openEmptyLegModal = (flightData) => {
        setSelectedEmptyLeg(flightData);
        setIsEmptyLegModalOpen(true);
    };
    const closeEmptyLegModal = () => {
        setIsEmptyLegModalOpen(false);
        setSelectedEmptyLeg(null);
    };

    return (
        <ModalContext.Provider value={{ 
            isBookingModalOpen, 
            openBookingModal, 
            closeBookingModal,
            isEmptyLegModalOpen,
            openEmptyLegModal,
            closeEmptyLegModal,
            selectedEmptyLeg
        }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
