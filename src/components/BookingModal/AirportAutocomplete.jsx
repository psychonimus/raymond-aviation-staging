import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Fuse from 'fuse.js';
import airportsRaw from 'airport-codes/airports.json';
import './AirportAutocomplete.css';

// Pre-process the full airport dataset once (8,107 airports globally)
const allAirports = airportsRaw
    .filter((a) => a.iata && a.iata.trim() !== '' && a.name && a.city)
    .map((a) => ({
        iata: a.iata.trim(),
        name: a.name.trim(),
        city: a.city.trim(),
        country: a.country ? a.country.trim() : '',
        displayText: `${a.city.trim()}, ${a.country ? a.country.trim() : ''} (${a.iata.trim()})`,
        subText: a.name.trim(),
    }));

// Configure Fuse.js for fuzzy multi-field airport search
const fuse = new Fuse(allAirports, {
    keys: [
        { name: 'iata', weight: 0.5 },
        { name: 'city', weight: 0.35 },
        { name: 'name', weight: 0.1 },
        { name: 'country', weight: 0.05 },
    ],
    threshold: 0.35,
    includeScore: true,
    minMatchCharLength: 1,
    ignoreLocation: true,
});

const OTHER_OPTION = { isOther: true };

const AirportAutocomplete = ({ value, onChange, placeholder, required = false, hasError = false }) => {
    const [inputValue, setInputValue] = useState(value || '');
    const [suggestions, setSuggestions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isOtherMode, setIsOtherMode] = useState(false);

    const containerRef = useRef(null);
    const debounceTimeout = useRef(null);

    // Sync input value with the parent prop
    useEffect(() => {
        setInputValue(value || '');
    }, [value]);

    // Handle clicks outside the component to close the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
                // If in "other" mode, keep the user's typed value
                if (!isOtherMode) {
                    setInputValue(value || '');
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [value, isOtherMode]);

    // Search using Fuse.js on the local dataset
    const searchAirports = (term) => {
        if (!term || term.trim().length < 1) {
            setSuggestions([]);
            return;
        }
        const results = fuse.search(term.trim(), { limit: 10 });
        setSuggestions(results.map((r) => r.item));
    };

    // Handle input change with debounce
    const handleInputChange = (e) => {
        const val = e.target.value;
        setInputValue(val);
        setIsOpen(true);

        if (isOtherMode) {
            // In free-text mode, propagate every keystroke directly
            onChange(val);
            return;
        }

        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        debounceTimeout.current = setTimeout(() => {
            searchAirports(val);
        }, 150);
    };

    const handleSelectSuggestion = (sug) => {
        if (sug.isOther) {
            // Switch to free-text mode, clear the field so user can type
            setIsOtherMode(true);
            setInputValue('');
            onChange('Other');
            setSuggestions([]);
            setIsOpen(false);
            return;
        }

        setInputValue(sug.displayText);
        onChange(sug.displayText);
        setIsOtherMode(false);
        setSuggestions([]);
        setIsOpen(false);
    };

    const handleFocus = () => {
        if (!isOtherMode) {
            setIsOpen(true);
            if (inputValue.length >= 1) searchAirports(inputValue);
        }
    };

    const showDropdown = isOpen && !isOtherMode && inputValue.length >= 1;

    return (
        <div className="airport-autocomplete-container" ref={containerRef}>
            <div className="autocomplete-input-wrapper">
                <MapPin className="input-icon-pin" size={14} />
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    placeholder={isOtherMode ? 'Type your airport or location...' : (placeholder || 'Search airport or city...')}
                    required={required}
                    className={`form-select-custom autocomplete-input${isOtherMode ? ' other-mode' : ''}${hasError ? ' bm-input-error' : ''}`}
                    autoComplete="off"
                />
                {isOtherMode && (
                    <button
                        type="button"
                        className="clear-other-btn"
                        title="Back to airport search"
                        onMouseDown={(e) => {
                            e.preventDefault();
                            setIsOtherMode(false);
                            setInputValue('');
                            onChange('');
                        }}
                    >✕</button>
                )}
            </div>

            <AnimatePresence>
                {showDropdown && (
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="autocomplete-dropdown"
                    >
                        {suggestions.length > 0 ? (
                            <ul className="suggestions-list">
                                {suggestions.map((sug, idx) => (
                                    <li
                                        key={sug.iata + idx}
                                        onMouseDown={() => handleSelectSuggestion(sug)}
                                        className="suggestion-item"
                                    >
                                        <div className="suggestion-main">
                                            <span className="suggestion-city">{sug.city}</span>
                                            <span className="suggestion-country">, {sug.country}</span>
                                            <span className="suggestion-code">{sug.iata}</span>
                                        </div>
                                        <div className="suggestion-sub">{sug.subText}</div>
                                    </li>
                                ))}
                                {/* Always show "Other" at the bottom */}
                                <li
                                    onMouseDown={() => handleSelectSuggestion(OTHER_OPTION)}
                                    className="suggestion-item suggestion-other"
                                >
                                    <div className="suggestion-main">
                                        <span className="suggestion-city">Other</span>
                                    </div>
                                    <div className="suggestion-sub">My airport isn't listed — enter manually</div>
                                </li>
                            </ul>
                        ) : (
                            <ul className="suggestions-list">
                                <li className="dropdown-status-text">No airports found for "{inputValue}"</li>
                                <li
                                    onMouseDown={() => handleSelectSuggestion(OTHER_OPTION)}
                                    className="suggestion-item suggestion-other"
                                >
                                    <div className="suggestion-main">
                                        <span className="suggestion-city">Other</span>
                                    </div>
                                    <div className="suggestion-sub">Enter your location manually</div>
                                </li>
                            </ul>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AirportAutocomplete;
