import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
const Landing = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Hero />
                <Feature />
            </div>
        </>
    )
}

export default Landing