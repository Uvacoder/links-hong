import { Box } from '@mantine/core'
import { motion } from 'framer-motion'
import {
  Book2,
  BrandDiscord,
  BrandFacebook,
  BrandGithub,
  BrandInstagram,
  BrandStackoverflow,
  BrandTwitter,
  BrandYoutube,
} from 'tabler-icons-react'

import { linkType } from '@/lib/types'

import useStyles from './Links.styles'

const openInNewTab = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const Link = ({ icon, title, url, color }: linkType) => {
  const { classes } = useStyles({ color })

  return (
    <motion.div
      transition={{
        duration: 0.3,
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={() => openInNewTab(url)}
      className={classes.link}
      style={{ borderColor: color }}
    >
      <div className={classes.icon}>{icon}</div>
      <span className={classes.title}>{title}</span>
    </motion.div>
  )
}

export default function Links() {
  const LinksArr: linkType[] = [
    {
      icon: <Book2 color="#ff0000" />,
      title: '小康 Blog',
      url: 'https://honghong.me',
      color: '#ff0000',
    },
    {
      icon: <BrandYoutube color="#ef4444" />,
      title: 'YouTube',
      url: 'https://www.youtube.com/channel/UC2hMWOaOlk9vrkvFVaGmn0Q',
      color: '#ef4444',
    },
    {
      icon: <BrandFacebook color="#1299f5" />,
      title: 'Facebook',
      url: 'https://www.facebook.com/tszhonglai.0411/',
      color: '#1299f5',
    },
    {
      icon: <BrandInstagram color="#f80067" />,
      title: 'Instagram',
      url: 'https://instagram.com/tszhong0411/',
      color: '#f80067',
    },
    {
      icon: <BrandGithub color="#f1f1f1" />,
      title: 'Github',
      url: 'https://github.com/TszHong0411',
      color: '#f1f1f1',
    },
    {
      icon: <BrandDiscord color="#5662f6" />,
      title: '小康#4229',
      url: 'https://discord.com',
      color: '#5662f6',
    },
    {
      icon: <BrandTwitter color="#1da1f2" />,
      title: 'Twitter',
      url: 'https://twitter.com/TszhongLai0411',
      color: '#1da1f2',
    },
    {
      icon: <BrandStackoverflow color="#e87921" />,
      title: 'Stack overflow',
      url: 'https://stackoverflow.com/users/15166428',
      color: '#e87921',
    },
  ]

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        margin: '44px 0',
      }}
    >
      {LinksArr.map((item, index) => (
        <Link icon={item.icon} title={item.title} url={item.url} color={item.color} key={index} />
      ))}
    </Box>
  )
}
