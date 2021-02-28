import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>クリア報酬： 400XP</header>

          <main>
            <img src="icons/body.svg"/>
            <strong>New Challenge</strong>
            <p>軽く３分間ウォーキングをしましょう。</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
            >
              リタイヤ
            </button>
            <button 
              type="button"
              className={styles.challengeSucceededButton}
            >
              コンプリート
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            クエストを<br/>
            挑戦しましょう。
            </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            クエストをクリアすると<br/>レベル上げます。
          </p>
        </div>
        ) }
    </div>
  )
}