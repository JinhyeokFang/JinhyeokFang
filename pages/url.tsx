import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Url.module.css'

const UrlPage: NextPage = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [showCreatedText, setShowCreatedText] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false);

  const buttonClicked = async () => {
    try {
      await axios.post(`https://bang.jinhy.uk/api/url`, {
        siteName: shortUrl,
        url: longUrl,
      });
      setShowCreatedText(true);
      setShowErrorText(false);
    } catch (error) {
      setShowCreatedText(false);
      setShowErrorText(true);
    }
  }

  return (
    <div>
      <Head>
        <title>Jin-hyeok Bang</title>
        <meta name="description" content="Jin-hyeok Bang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h1>Create Short Url</h1>
          <input 
            type="text"
            placeholder='long url ex)https://google.com'
            className={`${styles.input} ${styles.longInput}`}
            onChange={
              e => {
                setLongUrl(e.target.value);
              }
            }
          />
          <div>
            <span className={styles.urlText}>https://jinhy.uk/</span>
            <input 
              type="text" 
              placeholder='url ex) google' 
              className={styles.input}
              onChange={
                e => {
                  setShortUrl(e.target.value);
                }
              }
            />
          </div>
          <button className={styles.createButton} onClick={buttonClicked}>Create</button>
          {
            showCreatedText && <span className={styles.createdText}>Created!</span>
          }
          {
            showErrorText && <span className={styles.errorText}>에러가 발생했습니다. 이미 존재하는 URL은 아닌지 확인해주세요.</span>
          }
        </div>
      </main>
    </div>
  )
}

export default UrlPage
