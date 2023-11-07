import styles from './footer.module.css'
export default function Footer({completedTasks,totalTasks,remainingTasks})
{
    return(
        <div className={styles.footerStyling}>
            <span className={styles.itemStyle}>Completed Tasks: {completedTasks}</span>
            <span className={styles.itemStyle}>Total Tasks: {totalTasks}</span>
            <span className={styles.itemStyle}>Remaining Tasks: {remainingTasks}</span>
        </div>
    )
}