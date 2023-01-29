import React from 'react';
import Menu from './menu'

export default function Header() {
    return (
        <div id="top-fold" className="border-bottom">
            <div id="header-menu">
                <Menu />
            </div>
        </div>
    );
}