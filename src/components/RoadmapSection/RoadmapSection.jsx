import styles from './styles/RoadmapSection.module.css';

const weeks = [
    {
        week: 'WEEK 1',
        title: 'RESET YOUR BODY',
        days: 'Day 1 – 7',
        color: '#e8f5e9',
        border: '#2d6a4f',
        items: ['Detox Nutrition', 'Hydration Plan', 'Activity Tracking', 'Habit Building'],
        result: 'Expected Result\n-1 to -2 KG',
    },
    {
        week: 'WEEK 2',
        title: 'ACCELERATE FAT LOSS',
        days: 'Day 8 – 14',
        color: '#fff8e1',
        border: '#f9a825',
        items: ['Customised Diet', 'Daily Accountability', 'Progress Reviews', 'Metabolism Boost'],
        result: 'Expected Result\n-2 to -4 KG',
    },
    {
        week: 'WEEK 3',
        title: 'TRANSFORM YOUR LIFE',
        days: 'Day 15 – 21',
        color: '#e3f2fd',
        border: '#1976d2',
        items: ['Fat Loss Optimization', 'Lifestyle Coaching', 'Final Assessment', 'Long-Term Plan'],
        result: 'Expected Result\n-3 to -7 KG',
    },
];

const whatYouGet = [
    '✅ Personalised Diet Plan',
    '✅ Daily Motivation',
    '✅ WhatsApp Support',
    '✅ Weekly Review',
    '✅ Healthy Recipes',
    '✅ Workout Guidance',
    '✅ Lifetime Habits',
    '✅ Certificate of Completion',
];

const RoadmapSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>🗺️ 21 Days Transformation Roadmap</h2>

                <div className={styles.grid}>
                    {/* Weeks */}
                    <div className={styles.weeksGrid}>
                        {weeks.map((w, i) => (
                            <div
                                key={i}
                                className={styles.weekCard}
                                style={{ background: w.color, borderTop: `4px solid ${w.border}` }}
                            >
                                <div className={styles.weekLabel} style={{ color: w.border }}>{w.week}</div>
                                <div className={styles.weekTitle}>{w.title}</div>
                                <div className={styles.weekDays}>{w.days}</div>
                                <ul className={styles.weekItems}>
                                    {w.items.map((item, j) => (
                                        <li key={j}>• {item}</li>
                                    ))}
                                </ul>
                                <div className={styles.weekResult}>{w.result}</div>
                            </div>
                        ))}
                    </div>

                    {/* Center image */}
                    <div className={styles.centerImage}>
                        <div className={styles.bigDays}>
                            <span className={styles.bigNum}>21</span>
                            <span className={styles.bigText}>DAYS<br />TO A<br />NEW YOU</span>
                        </div>
                        <p className={styles.imageCaption}>BEFORE</p>
                    </div>

                    {/* What you get */}
                    <div className={styles.whatYouGet}>
                        <h3 className={styles.wyuTitle}>What You'll Get</h3>
                        <ul className={styles.wyuList}>
                            {whatYouGet.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom stats bar */}
                <div className={styles.bottomBar}>
                    <div className={styles.statItem}>
                        <span>📅</span>
                        <div>
                            <p>5th June 2026</p>
                            <small>Batch Starting Soon</small>
                        </div>
                    </div>
                    <div className={styles.statItem}>
                        <span>👥</span>
                        <div>
                            <p>25,000+</p>
                            <small>Lives Transformed</small>
                        </div>
                    </div>
                    <div className={styles.statItem}>
                        <span>⭐</span>
                        <div>
                            <p>4.9/5</p>
                            <small>Client Rating</small>
                        </div>
                    </div>
                    <a href="#join" className={styles.registerBtn}>Register Now →</a>
                    <a href="#consult" className={styles.consultBtn}>Book Consultation</a>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
