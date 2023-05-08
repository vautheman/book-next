import Link from "next/link";
import { ProgressBar } from "@nadfri/react-scroll-progress-bar";
import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false)
  return (
  <nav className="py-8 fixed w-full left-0 top-0 text-xl z-40 bg-background/50 backdrop-blur-lg">
    <ProgressBar color1="#29263C00" color2="#A277FF"/>
    <div className="container flex justify-between font-body px-10 items-center">
      <Link href="/"><p>Victor</p></Link>
      <ul className="gap-6 hidden md:inline-flex">
        <li><Link href="works" className="hover:text-primary transition-colors">Works</Link></li>
        <li><Link href="experience" className="hover:text-primary transition-colors">Experience</Link></li>
        <li><Link href="contact" className="hover:text-primary transition-colors">Contact me</Link></li>
      </ul>

      <div onClick={() => setMenu(value => !value)} className="cursor-pointer flex md:hidden flex-col border border-white/30 rounded-md p-2 gap-[6px] scale-90 group aspect-square justify-center">
        <span className={`h-[3px] w-6 block transition-all ${menu && menu ? 'rotate-45 absolute bg-secondary' : 'bg-white '}`} />
        <span className={`h-[3px] w-6 bg-white block transition-all ${menu && menu ? 'opacity-0' : ''}`} />
        <span className={`h-[3px] w-6 block transition-all ${menu && menu ? '-rotate-45 absolute bg-secondary' : 'bg-white '}`} />
      </div>

      <div className={`gap-6 ${menu && menu ? 'flex' : 'hidden'} md:hidden absolute flex-col bottom-0 right-10 translate-y-full bg-purple-dark/50 border border-primary shadow-xl backdrop-blur-lg px-4 py-2 rounded-md`}>
        <ul className="text-right text-3xl flex-col flex gap-5">
          <li><Link href="works" className="hover:text-primary transition-colors">Works</Link></li>
          <li><Link href="experience" className="hover:text-primary transition-colors">Experience</Link></li>
          <li><Link href="contact" className="hover:text-primary transition-colors">Contact me</Link></li>
        </ul>
      </div>

    </div>
  </nav>
  )
}
