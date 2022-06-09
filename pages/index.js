import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Music Page</title>
        <meta name="description" content="Relaxing music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='min-h-screen flex flex-col items-center justify-center gap-2'>
          <h1 className='text-3xl mb-3'>MUSIC PAGE</h1>
          <Link href="/focus">
            <div className='btn btn-primary'>Focus</div>
          </Link>
          <Link href="/relax">
            <div className='btn btn-secondary'>Relax</div>
          </Link>
          <Link href="/sleep">
            <div className='btn btn-accent'>Sleep</div>
          </Link>
        </div>
      </main>
    </div>
  )
}
