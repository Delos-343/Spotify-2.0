import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Spotify 2.0 (Clone)</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
        {/*   Center    */}
      </main>

      <div> {/*   Player    */} </div>
    </div>
  )
}
