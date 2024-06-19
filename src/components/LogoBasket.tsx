import React from 'react';
import SrcLogo from '../assets/shopping-cart.png';

const Logo: React.FC = () => {
    return (
        <>
            <img 
                className="p-0 m-0 w-7 h-auto object-contain"
                src={SrcLogo} 
                alt="logo"
            />
        </>
    );
}
export default Logo;