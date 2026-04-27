import React, { useState, useCallback, Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition/PageTransition.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Menu from './components/Menu/Menu.jsx'
import SmoothScroll from './components/SmoothScroll/SmoothScroll.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact from './components/Pages/Contact.jsx'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton.jsx'
import Skeleton from "@mui/material/Skeleton";
import { ModalProvider } from './context/ModalContext.jsx';
import BookingModal from './components/BookingModal/BookingModal.jsx';
import About from './components/Pages/About.jsx'
import Services from './components/Pages/Services.jsx'
import CharterOnDemand from './components/Pages/CharterOnDemand.jsx'
import FractionalOwnership from './components/Pages/FractionalOwnership.jsx'
import JetCardProgram from './components/Pages/JetCardProgram.jsx'
import AircraftManagement from './components/Pages/AircraftManagement.jsx'
import AircraftSalesAndAquisition from './components/Pages/AircraftSalesAndAquisition.jsx'
import EmptyLegFligts from './components/Pages/EmptyLegFligts.jsx'
import HelipadInfrastructure from './components/Pages/HelipadInfrastructure.jsx'
import AllBlogs from './components/Pages/AllBlogs.jsx'

const HomePage = lazy(() => import("./components/Pages/Home.jsx"));

function PageSkeleton() {
  return (
    <div className="skel-top">
      <Skeleton variant="rectangular" height={260} sx={{ borderRadius: 2 }} />
      <Skeleton height={48} sx={{ mt: 2 }} />
      <Skeleton height={32} width="60%" />
      <div className="skel-grid">
        <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2 }} />
        <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2 }} />
        <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2 }} />
      </div>
    </div>
  );
}

const MainApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <SmoothScroll>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Navbar toggleMenu={toggleMenu} />
      <Suspense fallback={<PageSkeleton />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/charter-on-demand" element={<PageTransition><CharterOnDemand /></PageTransition>} />
            <Route path="/fractional-ownership" element={<PageTransition><FractionalOwnership /></PageTransition>} />
            <Route path="/jet-card-program" element={<PageTransition><JetCardProgram /></PageTransition>} />
            <Route path="/aircraft-management" element={<PageTransition><AircraftManagement /></PageTransition>} />
            <Route path="/aircraft-sales-and-aquisition" element={<PageTransition><AircraftSalesAndAquisition /></PageTransition>} />
            <Route path="/empty-leg-flights" element={<PageTransition><EmptyLegFligts /></PageTransition>} />
            <Route path="/helipad-infrastructure" element={<PageTransition><HelipadInfrastructure /></PageTransition>} />
            <Route path="/blogs" element={<PageTransition><AllBlogs /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <WhatsAppButton />
      <BookingModal />
    </SmoothScroll>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <MainApp />
      </ModalProvider>
    </BrowserRouter>
  )
}

export default App