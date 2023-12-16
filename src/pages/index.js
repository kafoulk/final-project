import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import useAppState from '../useHooks/useAppState';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const appState = useAppState();

  
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
        </div>

        <div className={styles.center}>
          <h1>WWW Art Collections</h1>
          <img
            src='/image423.jpg'
            alt="starry night"
            width={800}
            height={600}
            border-radius='300px'
            priority='true'
            
          />
        </div>

        <div className={styles.grid}>
          <a
            href='/gallery'
            className={styles.card}
            content='Load Gallery' icon='sync'
          >
            <h2>
              Gallery <span>-&gt;</span>
            </h2>
            <p>
              View our collection of works from various artists.
            </p>
          </a>

          <a
            href='/about'
            className={styles.card}
            content='Load Gallery' 
            icon='sync' 
          >
            <h2>
              About <span>-&gt;</span>
            </h2>
            <p>
              Read about how we started and our organizations mission.
            </p>
          </a>

          <a
            href='/contact'
            className={styles.card}
          >
            <h2>
              Contact <span>-&gt;</span>
            </h2>
            <p>
              Contact us today with any questions or concerns.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}