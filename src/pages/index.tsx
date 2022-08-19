import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import { Favicons } from '@/lib/Favicons'

import Footer from '@/components/Footer'
import useStyles from '@/components/index.styles'
import Links from '@/components/Links'
import Profile from '@/components/Profile'

const Home: NextPage = () => {
  const { classes } = useStyles()
  const router = useRouter()

  return (
    <>
      <NextSeo
        titleTemplate='%s | 小康'
        defaultTitle='小康'
        description='A teenager who want to become a frontend developer'
        canonical={`https://link.honghong.me${router.asPath}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@TszhongLai0411',
          handle: '@TszhongLai0411',
        }}
        openGraph={{
          url: `https://link.honghong.me${router.asPath}`,
          type: 'website',
          title: '小康',
          description: 'A teenager who want to become a frontend developer',
          images: [
            {
              url: 'https://honghong.me/static/images/banner.png',
              width: 1920,
              height: 929,
              alt: 'A teenager who want to become a frontend developer',
            },
          ],
        }}
        additionalLinkTags={[...Favicons]}
      />
      <div className={classes.wrapper}>
        <div className={classes.inner}>
          <div className={classes.bg}></div>
          <div className={classes.bgImage}></div>
          <Profile />
          <Links />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
