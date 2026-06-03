import styles from './styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Brand */}
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="18" fill="#40916c" />
                            <path d="M18 8c0 0-8 5-8 12s8 8 8 8 8-1 8-8-8-12-8-12z" fill="#fff" opacity="0.3" />
                            <path d="M14 20l3 3 6-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>
                            <p className={styles.brandName}>Dr. Meenakshi Jain</p>
                            <p className={styles.brandTag}>Nutrition Expert</p>
                        </div>
                    </div>
                    <p className={styles.brandDesc}>
                        Empowering you with the right nutrition to transform health and change your life.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialBtn}>f</a>
                        <a href="#" className={styles.socialBtn}>in</a>
                        <a href="#" className={styles.socialBtn}>yt</a>
                        <a href="#" className={styles.socialBtn}>ig</a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className={styles.column}>
                    <h4 className={styles.colTitle}>Quick Links</h4>
                    <ul className={styles.colLinks}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Dr. Meenakshi</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#programs">Programs</a></li>
                        <li><a href="#success">Success Stories</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>

                {/* Programs */}
                <div className={styles.column}>
                    <h4 className={styles.colTitle}>Our Programs</h4>
                    <ul className={styles.colLinks}>
                        <li><a href="#">Weight Loss Programs</a></li>
                        <li><a href="#">Diabetes Reversal</a></li>
                        <li><a href="#">PCOD & Hormonal Health</a></li>
                        <li><a href="#">Sports Nutrition</a></li>
                        <li><a href="#">Child Nutrition</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className={styles.column}>
                    <h4 className={styles.colTitle}>Contact Us</h4>
                    <ul className={styles.contactList}>
                        <li>📞 +91 98765 43210</li>
                        <li>✉️ hello@drmeenakshijain.com</li>
                        <li>📍 New Delhi, India</li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>© 2026 Dr. Meenakshi Jain. All rights reserved.</p>
                <div className={styles.bottomLinks}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
