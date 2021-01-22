import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Head from '../components/general/Head'
import Footer from '../components/general/Footer'
import { useSelector } from 'react-redux'

export default function Home() {


  return (
    <div className={styles.container}>
      <Head />
        <main className={styles.main}>
          <h1>Hello next11</h1>
        </main>
      <Footer />
    </div>
  )
}
