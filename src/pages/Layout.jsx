import '../styling/Layout.css';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../assets/Footer.jsx';
import { useState, useRef, useEffect } from 'react';

export default function Layout() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown if click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <>
            <nav id="topBar">
                <img id="left-logo" src="/ImperialGuard/Images/IG_icon.png" alt="Imperial Guard Logo" />
                <div className="nav-links nav-left">
                    <Link to="/">Home</Link>
                    <div 
                        className='nav-dropdown'
                        ref={dropdownRef}
                    >
                        <button
                            className='dropbtn'
                            onClick={() => setDropdownOpen(open => !open)}
                            aria-expanded={dropdownOpen}
                            aria-haspopup="true"
                            type="button"
                        >
                            Regiments
                        </button>
                        <div 
                            className={`dropdown-content${dropdownOpen ? " show" : ""}`}
                            role="menu"
                        >
                            <Link to="/Paladins" onClick={() => setDropdownOpen(false)}>Paladins Unit</Link>
                            <Link to="/MountedSentinels" onClick={() => setDropdownOpen(false)}>Mounted Sentinels</Link>
                            <Link to="/ScharfrichterOrder" onClick={() => setDropdownOpen(false)}>Scharfrichter Order</Link>
                        </div>
                    </div>
                </div>
                <div id="IG-ul-title">
                    <h1>The Imperial Guard</h1>
                </div>
                <div className="nav-links nav-right">
                    <Link to="/Ranks">Ranks & Members</Link>
                    <Link to="/Gallery">Gallery</Link>
                </div>
                <img id="right-logo" src="/ImperialGuard/Images/IG_icon.png" alt="Imperial Guard Logo" />
            </nav>
            <div style={{ paddingTop: "10vh" }}>
                <Outlet />
            </div>
            <Footer/>
        </>
    );
}