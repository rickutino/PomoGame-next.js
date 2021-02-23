import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/rickutino.png" alt="Ricardo Utino"/>
      <div>
        <strong>Ricardo Utino</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}