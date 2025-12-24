import React from 'react';

const Logo = ({ className = "" }) => {
    return (
        <div className={`logo-text ${className}`}>
            <span style={{ 
                color: '#61DAFB', 
                fontSize: '24px', 
                fontWeight: 'bold',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
            }}>
                CodeMate
            </span>
        </div>
    );
};

export default Logo;
