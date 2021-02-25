import { CompletedChallenges } from '../components/CompletedChallenges';
import ExperienceBar from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { Countdown } from '../components/Countdown';

import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | PomoGame</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges/>
          <Countdown />
        </div>
      </section>
    </div>
  )
}
