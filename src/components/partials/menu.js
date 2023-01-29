import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div id="header-menu">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ttt" className="nav-link">Tic-Tac-Toe</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}