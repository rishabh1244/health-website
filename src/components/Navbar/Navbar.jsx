import { useState } from 'react';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="18" fill="#2d6a4f" />
                            <path d="M18 8c0 0-8 5-8 12s8 8 8 8 8-1 8-8-8-12-8-12z" fill="#fff" opacity="0.3" />
                            <path d="M14 20l3 3 6-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className={styles.logoText}>
                        <span className={styles.logoName}>Dr. Meenakshi Jain</span>
                        <span className={styles.logoTagline}>Nutrition Expert</span>
                    </div>
                </div>

                {/* Nav Links */}
                <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                    <li><a href="#home" className={styles.active}>Home</a></li>
                    <li><a href="#about">About Dr. Meenakshi</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#programs">Programs</a></li>
                    <li><a href="#success">Success Stories</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* CTA */}
                <a href="#book" className={styles.bookBtn}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Book Appointment
                </a>

                {/* Hamburger */}
                <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
