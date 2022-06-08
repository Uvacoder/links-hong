import type { NextPage } from 'next'
import Head from 'next/head'

import Footer from '@/components/Footer'
import Links from '@/components/Links'
import Profile from '@/components/Profile'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Link | 小康</title>
      </Head>
      <div className="flex h-full w-full flex-1 flex-col justify-between px-3 py-6">
        <div className="mx-auto h-full w-full max-w-[680px] pb-[80px]">
          <div className="fixed inset-0 -z-10 bg-black bg-cover bg-center bg-no-repeat"></div>
          <div
            className={`before:fixed before:inset-0 before:-z-10 before:h-full before:w-full before:bg-[url('/static/images/background.png')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-20 before:content-['']`}
          ></div>
          <Profile />
          <Links />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
