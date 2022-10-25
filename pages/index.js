import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airyfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='p-6 text-4xl font-bold'>
        DabAZ
      </h1>
    </div>
  )
}
