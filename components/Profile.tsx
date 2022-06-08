import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Profile() {
  return (
    <div className="mx-auto mt-3 mb-8 flex h-full w-full select-none flex-col items-center">
      <div className="mb-4 h-24 w-24">
        <motion.div
          transition={{
            duration: 0.5,
          }}
          whileHover={{
            rotate: '360deg',
          }}
          className="h-24 w-24"
        >
          <Image
            src="/static/images/avatar.png"
            width={3850}
            height={3850}
            alt="Avatar"
            className="rounded-full"
          />
        </motion.div>
      </div>
      <div className="mx-3 text-center">
        <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-white">小康</h1>
      </div>
      <div className="mx-10 text-center">
        <h2 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-white/60">
          Front-end developer
        </h2>
      </div>
    </div>
  )
}
