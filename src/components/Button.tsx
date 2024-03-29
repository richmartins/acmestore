import React from 'react';

type ButtonProps = {
    text: string;
    onClick: (param: any) => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button 
            className='bg-[#1FB6EA] p-1 rounded text-white hover:bg-[#0E6BA8] transition-colors duration-300'
            onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;