import Logo from './Logo'

export default function Footer() {
  return (
    <div className="flex flex-row items-center justify-center mx-auto text-lg font-bold text-left text-white select-none">
      <Logo size={35} />
      <span className="block leading-5">小康</span>
    </div>
  )
}
