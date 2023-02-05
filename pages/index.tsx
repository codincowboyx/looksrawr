import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Looks RAWR</title>
        <meta
          name="description"
          content="Looks RAWR meme cards"
        />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>
          Welcome to Looks RAWR
        </h1>
      </main>
    </div>
  );
};

export default Home;
