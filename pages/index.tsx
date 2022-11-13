import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jin-hyeok Bang</title>
        <meta name="description" content="Jin-hyeok Bang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Image src="/profile.jpg" alt="profile" width="200" height="200" className={styles.profileImage}/>
          <h1 className={styles.profileName}>방진혁</h1>
          <h2 className={styles.profileEnglishName}>Jin-hyeok Bang</h2>
          <span>github.com/jinhyeokfang</span>
        </div>
      </main>
    </div>
  )
}

export default Home
