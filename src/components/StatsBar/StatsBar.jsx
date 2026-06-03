import styles from './styles/StatsBar.module.css';

const stats = [
    {
        icon: '👥',
        value: '135M+',
        label: 'Indians are\noverweight or obese',
        sub: '(ICMR-NCD Risk Factor Study)',
    },
    {
        icon: '📈',
        value: '30%',
        label: 'Rise in Obesity\nin last 10 years',
    },
    {
        icon: '❤️',
        value: '75%',
        label: 'Lifestyle diseases\nlinked to obesity',
    },
    {
        icon: '🚶',
        value: '1 in 3',
        label: 'Urban adults\nare overweight',
    },
    {
        icon: '👶',
        value: '40%',
        label: 'Children may be overweight\nby 2030',
    },
];

const StatsBar = () => {
    return (
        <section className={styles.statsBar}>
            <div className={styles.container}>
                {stats.map((s, i) => (
                    <div key={i} className={styles.statCard}>
                        <span className={styles.icon}>{s.icon}</span>
                        <span className={styles.value}>{s.value}</span>
                        <span className={styles.label}>{s.label}</span>
                        {s.sub && <span className={styles.sub}>{s.sub}</span>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsBar;
