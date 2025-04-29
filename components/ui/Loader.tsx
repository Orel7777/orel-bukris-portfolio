import React from "react";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.boxOfStar1}>
          <div className={`${styles.star} ${styles.starPosition1}`} />
          <div className={`${styles.star} ${styles.starPosition2}`} />
          <div className={`${styles.star} ${styles.starPosition3}`} />
          <div className={`${styles.star} ${styles.starPosition4}`} />
          <div className={`${styles.star} ${styles.starPosition5}`} />
          <div className={`${styles.star} ${styles.starPosition6}`} />
          <div className={`${styles.star} ${styles.starPosition7}`} />
        </div>
        <div className={styles.boxOfStar2}>
          <div className={`${styles.star} ${styles.starPosition1}`} />
          <div className={`${styles.star} ${styles.starPosition2}`} />
          <div className={`${styles.star} ${styles.starPosition3}`} />
          <div className={`${styles.star} ${styles.starPosition4}`} />
          <div className={`${styles.star} ${styles.starPosition5}`} />
          <div className={`${styles.star} ${styles.starPosition6}`} />
          <div className={`${styles.star} ${styles.starPosition7}`} />
        </div>
        <div className={styles.boxOfStar3}>
          <div className={`${styles.star} ${styles.starPosition1}`} />
          <div className={`${styles.star} ${styles.starPosition2}`} />
          <div className={`${styles.star} ${styles.starPosition3}`} />
          <div className={`${styles.star} ${styles.starPosition4}`} />
          <div className={`${styles.star} ${styles.starPosition5}`} />
          <div className={`${styles.star} ${styles.starPosition6}`} />
          <div className={`${styles.star} ${styles.starPosition7}`} />
        </div>
        <div className={styles.boxOfStar4}>
          <div className={`${styles.star} ${styles.starPosition1}`} />
          <div className={`${styles.star} ${styles.starPosition2}`} />
          <div className={`${styles.star} ${styles.starPosition3}`} />
          <div className={`${styles.star} ${styles.starPosition4}`} />
          <div className={`${styles.star} ${styles.starPosition5}`} />
          <div className={`${styles.star} ${styles.starPosition6}`} />
          <div className={`${styles.star} ${styles.starPosition7}`} />
        </div>
        <div data-js="astro" className={styles.astronaut}>
          <div className={styles.head} />
          <div className={`${styles.arm} ${styles.armLeft}`} />
          <div className={`${styles.arm} ${styles.armRight}`} />
          <div className={styles.body}>
            <div className={styles.panel} />
          </div>
          <div className={`${styles.leg} ${styles.legLeft}`} />
          <div className={`${styles.leg} ${styles.legRight}`} />
          <div className={styles.schoolbag} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
