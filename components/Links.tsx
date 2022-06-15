import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faStackOverflow,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

import { linkType } from '@/lib/types'

const openInNewTab = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const Link = ({ icon, title, url, color }: linkType) => {
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
      className="relative flex cursor-pointer items-center justify-center rounded-lg border-4 bg-black/75 px-6 py-4"
      style={{ borderColor: color }}
    >
      <div className="absolute left-12 mx-4 w-10">
        <FontAwesomeIcon icon={icon} color={color} size="2x" className="mx-auto w-10" />
      </div>
      <span className="select-none text-white">{title}</span>
    </motion.div>
  )
}

export default function Links() {
  const LinksArr: linkType[] = [
    {
      icon: faGlobe,
      title: '小康 Blog',
      url: 'https://honghong.me',
      color: '#ff0000',
    },
    {
      icon: faYoutube,
      title: 'YouTube',
      url: 'https://www.youtube.com/channel/UC2hMWOaOlk9vrkvFVaGmn0Q',
      color: '#ef4444',
    },
    {
      icon: faFacebook,
      title: 'Facebook',
      url: 'https://www.facebook.com/tszhonglai.0411/',
      color: '#1299f5',
    },
    {
      icon: faInstagram,
      title: 'Instagram',
      url: 'https://instagram.com/tszhong0411/',
      color: '#f80067',
    },
    {
      icon: faGithub,
      title: 'Github',
      url: 'https://github.com/TszHong0411',
      color: '#f1f1f1',
    },
    {
      icon: faDiscord,
      title: '小康#4229',
      url: 'https://discord.com',
      color: '#5662f6',
    },
    {
      icon: faTwitter,
      title: 'Twitter',
      url: 'https://twitter.com/TszhongLai0411',
      color: '#1da1f2',
    },
    {
      icon: faStackOverflow,
      title: 'Stack overflow',
      url: 'https://stackoverflow.com/users/15166428',
      color: '#e87921',
    },
  ]

  return (
    <div className="flex flex-col gap-y-4">
      {LinksArr.map((item, index) => (
        <Link icon={item.icon} title={item.title} url={item.url} color={item.color} key={index} />
      ))}
    </div>
  )
}
