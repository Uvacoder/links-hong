import useStyles from './Footer.styles'
import Logo from './Logo'

export default function Footer() {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <Logo size={35} />
      <span className={classes.name}>小康</span>
    </div>
  )
}
