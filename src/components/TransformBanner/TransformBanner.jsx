import styles from './styles/TransformBanner.module.css';

const features = [
    { icon: '📋', label: 'Daily\nDiet Plans' },
    { icon: '💬', label: 'WhatsApp\nSupport' },
    { icon: '🎥', label: 'Live\nSessions' },
    { icon: '📊', label: 'Progress\nTracking' },
    { icon: '👥', label: 'Accountability\nGroup' },
    { icon: '⚖️', label: 'Sustainable\nWeight Loss' },
];

const TransformBanner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                {/* Left content */}
                <div className={styles.leftContent}>
                    <h2 className={styles.heading}>
                        🥗 Ready to Transform in Just 21 Days?
                    </h2>
                    <p className={styles.subtext}>
                        Join Dr. Meenakshi Jain's 21 Days Weight Loss Challenge
                        and take the first step towards a healthier, happier you.
                    </p>
                    <div className={styles.featureIcons}>
                        {features.map((f, i) => (
                            <div key={i} className={styles.featureItem}>
                                <span className={styles.featureIcon}>{f.icon}</span>
                                <span>{f.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right CTA */}
                <div className={styles.rightCta}>
                    <div className={styles.challengeInfo}>
                        <div className={styles.infoRow}>
                            <span className={styles.calIcon}>📅</span>
                            <div>
                                <p className={styles.infoLabel}>Challenge Starts</p>
                                <p className={styles.infoValue}>5th June 2026</p>
                            </div>
                        </div>
                        <div className={styles.seatsBox}>
                            <span className={styles.seatsLabel}>Seats Left</span>
                            <span className={styles.seatsCount}>Only 50 Seats</span>
                        </div>
                    </div>
                    <div className={styles.ctaButtons}>
                        <a href="#join" className={styles.registerBtn}>Register Now →</a>
                        <a href="tel:+919876543210" className={styles.callBtn}>📞 Call Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransformBanner;
