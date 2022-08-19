import useStyles from './Layout.styles'

import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const { classes } = useStyles()

  return <div className={classes.layout}>{children}</div>
}
