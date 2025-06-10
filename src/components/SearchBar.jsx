// TravelSearch.js
import React, { useState } from 'react';
import './SearchBar.css'; // Import custom CSS file

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const popularQuestions = [
    'What is my zodiac sign based on my birth date?',
    'How will my career be according to astrology?',
    'When will I get married as per my horoscope?',
    'Is there any dosha in my kundli?',
    'Which gemstone is suitable for me?',
    'Can astrology help in improving my financial situation?',
    'What are the effects of Saturn in my chart?',
    'How will the upcoming year be for me astrologically?'
];


    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);

        if (value.length > 0) {
            const filtered = popularQuestions.filter(dest =>
                dest.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filtered.slice(0, 5));
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (Questions) => {
        setSearchQuery(Questions);
        setSuggestions([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Searching Question is : ${searchQuery}`);
    };

    return (
        <div className="travel-search-container">
            

            <form onSubmit={handleSubmit} className="search-form">
                <div className="search-input-wrapper">
                    <div className="search-icon">🔍</div>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="How my Kundli can help me"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="search-button">
                        Ask Question →
                    </button>
                </div>

                {suggestions.length > 0 && (
                    <div className="suggestions-dropdown">
                        {suggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                className="suggestion-item"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </form>

        
        </div>
    );
};

export default SearchBar;

