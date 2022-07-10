import { ReactNode } from 'react'

import useStyles from './Layout.styles'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const { classes } = useStyles()

  return <div className={classes.layout}>{children}</div>
}
