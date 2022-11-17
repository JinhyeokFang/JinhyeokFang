import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AiFillGithub } from 'react-icons/ai'

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
          <h3 className={styles.developer}>Web Developer</h3>
          <AiFillGithub size='50' className={styles.githubIcon} title='Github Profile' onClick={() => location.href = 'https://github.com/jinhyeokfang'} />
        </div>
      </main>
    </div>
  )
}

export default Home
