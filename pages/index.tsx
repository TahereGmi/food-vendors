import Head from 'next/head'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, selectedValue } from '../store/reducers/counterReducer'
import { getVendors } from '../store/reducers/vendorsReducer'
import type {} from 'redux-thunk/extend-redux';

import styles from '../styles/Home.module.css'

const Home = () => {
  const count = useSelector(selectedValue)
  const dispatch = useDispatch()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Home Page
        </h1>

        <p className={styles.description}>
          <Link 
            href='/vendors'>
            Vendors
          </Link>
        </p>
        <div>
          <h1>redux test</h1>
          <span>the counter value is {count}</span>
          <br />
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <br />
          <button onClick={() => dispatch(getVendors({ page: 0, page_size:10, lat: 35.754, long: 51.328 }))}>get snapp food vendors list</button>
        </div>
      </main>

    </div>
  )
}

export default Home
