import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sideabar from '../components/Sideabar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter-clone</title>
      </Head>

      <main>
        {/* Sidebar */}
        <Sideabar />

        {/* Feed */}

        {/* Widgets */}
      </main>
      
    </div>
  )
}

export default Home
