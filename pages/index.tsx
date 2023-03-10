import Head from 'next/head'
import Link from 'next/link'
import type {} from 'redux-thunk/extend-redux';
import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.homeBg}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.logoWrap}>
          <img src="/images/logo.png" alt="logo" />
        </h1>
        <Link 
          href='/vendors'
          className={styles.goToVendorBtn}>
          سفارش دهید
        </Link>
      </main>

    </div>
  )
}

export default Home
