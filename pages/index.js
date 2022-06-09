import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Music Page</title>
        <meta name="description" content="Relaxing music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* focus, relax, sleep */}
      <main className={styles.main}>
        <Link href="/focus">Focus</Link>
        <Link href="/relax">Relax</Link>
        <Link href="/sleep">Sleep</Link>
      </main>

    </div>
  )
}
