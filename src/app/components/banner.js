import styles from "./banner.module.css";

const Banner = () => {

    return (
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <li className={styles.navItems}> <a>Pomodoro</a> </li>
                <li className={styles.navItems}> <a> To Do </a> </li>
                <li className={styles.navItems}> <a> Completed </a> </li>
            </ul>
        </nav>
    );
}

export default Banner;