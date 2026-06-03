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
                        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="20" fill="#2d6a4f" />
                            <ellipse cx="20" cy="16" rx="6" ry="8" fill="#fff" opacity="0.25" />
                            <path d="M20 8 C14 12 12 18 12 22 C12 28 16 32 20 32 C24 32 28 28 28 22 C28 18 26 12 20 8Z" fill="none" stroke="#fff" strokeWidth="1.5" />
                            <path d="M16 22l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className={styles.logoText}>
                        <span className={styles.logoName}>Dr. Meenakshi Jain</span>
                        <span className={styles.logoTagline}>Nutrition Expert</span>
                    </div>
                </div>

                {/* Nav Links */}
                <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                    <li><a href="#home" className={styles.activeLink}>Home</a></li>
                    <li><a href="#about">About Dr. Meenakshi</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#programs">Programs</a></li>
                    <li><a href="#success">Success Stories</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* Right side: CTA + Hamburger */}
                <div className={styles.right}>
                    <a href="#book" className={styles.bookBtn}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Book Appointment
                    </a>
                    <button
                        className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <ul>
                        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setMenuOpen(false)}>About Dr. Meenakshi</a></li>
                        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                        <li><a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a></li>
                        <li><a href="#success" onClick={() => setMenuOpen(false)}>Success Stories</a></li>
                        <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
                        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                        <li><a href="#book" onClick={() => setMenuOpen(false)} className={styles.mobileBookBtn}>Book Appointment</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
