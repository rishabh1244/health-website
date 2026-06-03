import styles from './styles/AboutSection.module.css';

const AboutSection = () => {
    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                {/* Left */}
                <div className={styles.leftContent}>
                    <div className={styles.sectionTag}>ABOUT</div>
                    <h2 className={styles.heading}>
                        Dr. Meenakshi Jain 🌿
                    </h2>
                    <p className={styles.intro}>
                        Dr. Meenakshi Jain is a leading Nutrition Expert helping individuals achieve
                        sustainable weight management, reverse lifestyle diseases, and build a healthier
                        relationship with food.
                    </p>

                    <ul className={styles.credentials}>
                        <li>✅ Ph.D. in Nutrition & Dietetics</li>
                        <li>✅ 25+ Years of Clinical & Lifestyle Nutrition Experience</li>
                        <li>✅ Specialist in Weight Management & Metabolic Health</li>
                        <li>✅ Personalised, Practical & Science-backed Diet Plans</li>
                        <li>✅ Trusted by 12,000+ Clients Worldwide</li>
                    </ul>

                    <a href="#about" className={styles.knowMoreBtn}>
                        Know More About Dr. Meenakshi →
                    </a>
                </div>

                {/* Right Image */}
                <div className={styles.rightImage}>
                    <img src="/dr_about.png" alt="Dr. Meenakshi Jain" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
