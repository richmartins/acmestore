import React from 'react';
import Button from '../components/Button';

const Home: React.FC = () => {
    return (
        <>
            <h1>Hello, World!</h1>
            <Button type="button" text="Click me" onClick={() => console.log('Button clicked!')} />
        </>
    );
};

export default Home;