import type { NextPage } from 'next'
import Head from 'next/head'

import Footer from '@/components/Footer'
import useStyles from '@/components/index.styles'
import Links from '@/components/Links'
import Profile from '@/components/Profile'

const Home: NextPage = () => {
  const { classes } = useStyles()

  return (
    <>
      <Head>
        <title>Link | 小康</title>
      </Head>
      <div className={classes.wrapper}>
        <div className={classes.inner}>
          <div className={classes.bg}></div>
          <div className={classes.bgImage}></div>
          <Profile />
          <Links />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
