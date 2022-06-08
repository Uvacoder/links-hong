import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden font-noto">
      {children}
    </div>
  )
}
