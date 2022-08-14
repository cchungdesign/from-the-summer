import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/home.module.css'
import Layout from '../components/layout.js';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>from the summer</title>
        <meta name="description" content="a collection of creative works exploring summer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          from the summer
        </h1> */}
        <div className={styles.gallery}>
          <Image src="/photography/DSCF3301.jpeg" width="4000" height="6000" />
        </div>
      </main>
    </Layout>
  )
}
