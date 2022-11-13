import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jin-hyeok Bang</title>
        <meta name="description" content="Jin-hyeok Bang" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        My Profile Here
      </main>
    </div>
  )
}

export default Home
