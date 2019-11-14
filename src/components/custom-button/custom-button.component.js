import React from 'react';
import './custom-button.styles.scss';

const CustomButton =({children, isGoogleSignIn,inverted, ...othterProps})=>(
    <button className = {`${inverted? 'inverted':''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...othterProps}>
        {children}
    </button>
);

export default CustomButton;