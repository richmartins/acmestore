import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import NavBar from './NavBar';

const Header: React.FC = () => {
    return (
        <header 
            className='w-full 
                        bg-[#323232] 
                        text-white 
                        p-2 
                        flex
                        justify-between
                        items-center'
        >
            <Link to="/"><Logo /></Link>
            <NavBar></NavBar>
        </header>
    );
}

export default Header;