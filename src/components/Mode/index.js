import React, { useState } from 'react';
import './index.scss'; 

const ToggleMode = () => {
    // State to track the mode (light or dark)
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [buttonText, setButtonText] = useState('Light');
    
    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark-mode');
        setButtonText(prevText => (prevText === 'Dark' ? 'Light' : 'Dark'));
    };
    return (
        <div className="mode">
             <button onClick={toggleMode}>{buttonText}</button>
        </div>
    );
};

export default ToggleMode;
