// Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>Abes Engineering College</h1>
            <h2 style={subtitleStyle}>Ghaziabad</h2>
        </header>
    );
};

const headerStyle = {
    backgroundColor: '#4CAF50', // Green background
    color: 'white',              // White text
    padding: '10px',            // Padding around the header
    textAlign: 'center'         // Center align text
};

const titleStyle = {
    margin: '0',                // Remove default margin
    fontSize: '2.5em'          // Title font size
};

const subtitleStyle = {
    margin: '0',                // Remove default margin
    fontSize: '1.5em'          // Subtitle font size
};

export default Header;