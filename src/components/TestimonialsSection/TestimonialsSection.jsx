import { useState } from 'react';
import styles from './styles/TestimonialsSection.module.css';

const testimonials = [
    {
        name: 'Anita S.',
        result: 'Lost 18 kg in 5 months',
        detail: 'Better energy & confidence',
        tag: '-18 kg',
    },
    {
        name: 'Rohit M.',
        result: 'Reversed Pre-Diabetes',
        detail: '& reduced belly fat',
        tag: '-12 kg',
    },
    {
        name: 'Neha R.',
        result: 'Balanced Hormones,',
        detail: 'regular periods & weight loss',
        tag: '-11 kg',
    },
    {
        name: 'Vikram K.',
        result: 'Lowered BP & cholesterol',
        detail: 'naturally',
        tag: '-20 kg',
    },
];

const avatarColors = ['#a8d5b5', '#f4c97f', '#f2a5a5', '#a8c8e8'];

const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? 0 : c - 1));
    const next = () => setCurrent((c) => (c >= testimonials.length - 1 ? c : c + 1));

    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>— REAL PEOPLE, REAL RESULTS —</h2>
            <div className={styles.carouselWrapper}>
                <button className={styles.navBtn} onClick={prev} disabled={current === 0}>‹</button>
                <div className={styles.cardsGrid}>
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`${styles.card} ${i === current ? styles.active : ''}`}
                            style={{ display: Math.abs(i - current) <= 1 ? 'flex' : 'none' }}
                        >
                            <div className={styles.transformImg} style={{ background: avatarColors[i] }}>
                                <img src="/transformation.png" alt={t.name} className={styles.transformPhoto} />
                                <div className={styles.weightTag}>{t.tag}</div>
                            </div>
                            <div className={styles.cardInfo}>
                                <p className={styles.clientName}>{t.name}</p>
                                <p className={styles.clientResult}>{t.result}</p>
                                <p className={styles.clientDetail}>{t.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.navBtn} onClick={next} disabled={current >= testimonials.length - 1}>›</button>
            </div>

            {/* All 4 cards visible on large screens */}
            <div className={styles.allCards}>
                {testimonials.map((t, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.transformImg} style={{ background: avatarColors[i] }}>
                            <img src="/transformation.png" alt={t.name} className={styles.transformPhoto} />
                            <div className={styles.weightTag}>{t.tag}</div>
                        </div>
                        <div className={styles.cardInfo}>
                            <p className={styles.clientName}>{t.name}</p>
                            <p className={styles.clientResult}>{t.result}</p>
                            <p className={styles.clientDetail}>{t.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
