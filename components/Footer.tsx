import Logo from './Logo'

export default function Footer() {
  return (
    <div className="mx-auto flex select-none flex-row items-center justify-center text-left text-lg font-bold text-white">
      <Logo size={35} />
      <span className="block leading-5">小康</span>
    </div>
  )
}
