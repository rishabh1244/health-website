import styles from './styles/HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.container}>
                {/* Left Content */}
                <div className={styles.leftContent}>
                    <div className={styles.badge}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        STARTS FROM 5TH JUNE 2026
                    </div>

                    <h1 className={styles.heading}>
                        <span className={styles.days}>21 Days</span>
                        <span className={styles.cursive}>Weight Loss</span>
                        <span className={styles.cursive}>Challenge</span>
                    </h1>

                    <p className={styles.subtext}>
                        A guided, science-backed program to help you lose weight, boost energy and build lifelong
                        healthy habits in just 21 days!
                    </p>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <span className={styles.featureIcon}>📋</span>
                            <span>Personalised<br />Diet Plan</span>
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.featureIcon}>✅</span>
                            <span>Daily<br />Accountability</span>
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.featureIcon}>🏅</span>
                            <span>Expert<br />Guidance</span>
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.featureIcon}>📊</span>
                            <span>Visible<br />Results</span>
                        </div>
                    </div>

                    <div className={styles.ctaRow}>
                        <a href="#join" className={styles.primaryBtn}>Join the Challenge Now →</a>
                        <a href="#video" className={styles.watchBtn}>
                            <span className={styles.playIcon}>▶</span> Watch Video
                        </a>
                    </div>
                </div>

                {/* Center Image */}
                <div className={styles.centerImage}>
                    <img src="/hero_woman.png" alt="21 Days Weight Loss Challenge" />
                    <div className={styles.daysBadge}>
                        <span className={styles.bigNum}>21</span>
                        <span className={styles.daysLabel}>days to a<br />better you</span>
                    </div>
                </div>

                {/* Right panel */}
                <div className={styles.rightPanel}>
                    <div className={styles.highlights}>
                        <h3 className={styles.highlightTitle}>CHALLENGE HIGHLIGHTS</h3>
                        <ul className={styles.highlightList}>
                            <li>✅ No Crash Diets</li>
                            <li>✅ Balanced Nutrition</li>
                            <li>✅ Expert Guidance</li>
                            <li>✅ Daily Motivation</li>
                            <li>✅ Sustainable Weight Loss</li>
                            <li>✅ Lifetime Habit Building</li>
                        </ul>
                    </div>

                    <div className={styles.timerBox}>
                        <p className={styles.timerLabel}>CHALLENGE STARTS IN</p>
                        <div className={styles.timer}>
                            <div className={styles.timeUnit}><span>12</span><small>days</small></div>
                            <div className={styles.timeUnit}><span>08</span><small>hrs</small></div>
                            <div className={styles.timeUnit}><span>45</span><small>min</small></div>
                            <div className={styles.timeUnit}><span>20</span><small>sec</small></div>
                        </div>
                        <a href="#join" className={styles.limitedBtn}>🔥 Limited Seats Available!</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
