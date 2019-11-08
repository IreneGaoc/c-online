import React from 'react';
import './custom-button.styles.scss';

const CustomButton =({children, isGoogleSignIn, ...othterProps})=>(
    <button className = {`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...othterProps}>
        {children}
    </button>
)

export default CustomButton;