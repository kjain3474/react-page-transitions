import styles from './Stars.module.css'

export function Stars(){
    return(
        <div>
            <div className={styles.stars} />
            <div className={styles.stars2} />
            <div className={styles.stars3} />
        </div>
    )
}