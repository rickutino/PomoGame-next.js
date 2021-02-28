import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>クリア報酬： {activeChallenge.amount}</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>New Challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              リタイヤ
            </button>
            <button 
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
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