import styles from './Rocket.module.css'

export function Rocket(){
    return(
        <div className={styles.draw_container}>
          <div className={styles.draw}>
            <div className={styles.rocket}>
              <div className={styles.window} />
            </div>
            
            <div className={styles.smoke}>
              <div className={styles.one}></div>
              <div className={styles.two}></div>
            </div>

            <div className={styles.stars}>
              <div className={[styles.star, styles.one].join(" ")}></div>
              <div className={[styles.star, styles.two, styles.small].join(" ")}></div>
              <div className={[styles.star, styles.three, styles.small].join(" ")}></div>
              <div className={[styles.star, styles.four, styles.small].join(" ")}></div>
              <div className={[styles.star, styles.five].join(" ")}></div>
              <div className={[styles.star, styles.six, styles.small].join(" ")}></div>
              <div className={[styles.star, styles.seven].join(" ")}></div>
              <div className={[styles.star, styles.eight, styles.small].join(" ")}></div>
            </div>
          </div>
        </div>
    )
}