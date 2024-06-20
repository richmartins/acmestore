import React from "react";

type ButtonProps = {
    customClassName?: string;
    text: string;
    type: "button" | "submit" | "reset" | undefined;
    onClick: (param: any) => void;
};

const Button: React.FC<ButtonProps> = ({
    customClassName,
    type,
    text,
    onClick,
}) => {
    return (
        <>
            <button
                className={`bg-[#1FB6EA] p-1 rounded text-white hover:bg-[#0E6BA8] transition-colors duration-300 ${customClassName}`}
                type={type}
                onClick={onClick}
            >
                {text}
            </button>
        </>
    );
};

export default Button;
