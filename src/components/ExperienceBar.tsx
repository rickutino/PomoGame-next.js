import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel
  return (
    <header className={styles.experienceBar}>
      <span>0</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%`}} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel}</span>
    </header>
  )
}

export default ExperienceBar;