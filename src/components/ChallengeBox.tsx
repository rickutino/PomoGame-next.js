import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  return (
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeNotActive}>
        <strong>
          スタートしてクエストを<br/>
          挑戦しましょう。
          </strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          クエストをクリアすると<br/>レベル上げます。
        </p>
      </div>
    </div>
  )
}