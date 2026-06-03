import styles from './styles/TestimonialsSection.module.css';

const people = [
    { name: 'Anita S.', tag: '-18 kg', result: 'Lost 18 kg in 5 months', detail: 'Better energy & confidence' },
    { name: 'Rohit M.', tag: '-12 kg', result: 'Reversed Pre-Diabetes', detail: '& reduced belly fat' },
    { name: 'Neha R.', tag: '-11 kg', result: 'Balanced Hormones,', detail: 'regular periods & weight loss' },
    { name: 'Vikram K.', tag: '-20 kg', result: 'Lowered BP & cholesterol', detail: 'naturally' },
];

const TestimonialsSection = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>— REAL PEOPLE, REAL RESULTS —</h2>
            <div className={styles.grid}>
                {people.map((p) => (
                    <div key={p.name} className={styles.card}>
                        <div className={styles.imgBox}>
                            <img src="/transformation.png" alt={p.name} />
                            <span className={styles.tag}>{p.tag}</span>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.name}>{p.name}</p>
                            <p className={styles.result}>{p.result}</p>
                            <p className={styles.detail}>{p.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
