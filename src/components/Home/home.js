import React from 'react';
import Slider from '../partials/slider'

export default function Home() {
    return (
        <div>
            <div id="slider" className="main container-fluid px-0">
                <Slider />
            </div>
            <div id="home" className="main container p-0">
                <div className="section">
                    <div className="content w-75 py-5 m-auto">
                        <h1>Home</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}