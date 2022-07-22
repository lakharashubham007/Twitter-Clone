import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sideabar from '../components/Sideabar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className='lg:max-w-6xl mx-auto max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter-clone</title>
      </Head>

      <main className='grid grid-cols-9 '>
        {/* Sidebar */}
        <Sideabar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets />
      </main>
      
    </div>
  )
}

export default Home
