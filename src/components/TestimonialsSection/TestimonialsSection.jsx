import styles from './styles/TestimonialsSection.module.css';

const people = [
    {
        name: 'Anita S.',
        location: 'Mumbai',
        tag: '-18 kg',
        img: '/transform_anita.png',
        result: 'Lost 18 kg in 5 months',
        detail: 'Better energy & confidence restored',
        quote: '"I reversed my pre-diabetes and my energy levels are through the roof!"',
    },
    {
        name: 'Rohit M.',
        location: 'Delhi',
        tag: '-12 kg',
        img: '/transform_rohit.png',
        result: 'Reversed Pre-Diabetes',
        detail: 'Reduced belly fat & cholesterol',
        quote: '"The personalised diet plan changed everything for me. No starvation!"',
    },
    {
        name: 'Neha R.',
        location: 'Pune',
        tag: '-11 kg',
        img: '/transform_neha.png',
        result: 'Balanced Hormones',
        detail: 'Regular periods & sustainable loss',
        quote: '"Dr. Meenakshi understood my hormonal issues and created a perfect plan."',
    },
    {
        name: 'Vikram K.',
        location: 'Bangalore',
        tag: '-20 kg',
        img: '/transform_vikram.png',
        result: 'Lowered BP & Cholesterol',
        detail: 'Achieved results naturally',
        quote: '"From BP medicines to completely natural health — truly life-changing!"',
    },
];

const TestimonialsSection = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>— REAL PEOPLE, REAL RESULTS —</h2>
            <p className={styles.subtitle}>
                Over 25,000+ transformation stories and counting. Here are a few of our favorites.
            </p>
            <div className={styles.grid}>
                {people.map((p) => (
                    <div key={p.name} className={styles.card}>
                        {/* Before/After image - 1 person per card */}
                        <div className={styles.imgBox}>
                            <img src={p.img} alt={`${p.name} transformation`} />
                            <span className={styles.weightLostTag}>{p.tag}</span>
                            <div className={styles.beforeAfterLabels}>
                                <span>BEFORE</span>
                                <span>AFTER</span>
                            </div>
                        </div>
                        {/* Info */}
                        <div className={styles.info}>
                            <p className={styles.quote}>{p.quote}</p>
                            <div className={styles.divider} />
                            <div className={styles.nameRow}>
                                <div className={styles.avatar}>{p.name.charAt(0)}</div>
                                <div>
                                    <p className={styles.name}>{p.name}</p>
                                    <p className={styles.locationText}>📍 {p.location}</p>
                                </div>
                                <div className={styles.resultBadge}>
                                    <span>{p.result}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
