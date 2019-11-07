import React from 'react';
import './custom-button.styles.scss';

const CustomButton =({children, ...othterProps})=>(
    <button className = 'custom-button' {...othterProps}>
        {children}
    </button>
)

export default CustomButton;