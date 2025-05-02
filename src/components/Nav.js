import Link from "next/link";
import { ProgressBar } from "@nadfri/react-scroll-progress-bar";
import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false)
  return (
  <nav className="py-8 fixed w-full left-0 top-0 text-xl z-40 bg-background/50 backdrop-blur-lg">
    <ProgressBar color1="#29263C00" color2="#A277FF"/>
    <div className="container flex justify-between font-body px-10 items-center">
      <Link href="/" className="flex gap-3 items-baseline">
        <svg className="w-14 fill-primary" viewBox="0 0 2087 1180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2086.85 966.295H0.85498V1180H2086.85V966.295Z"/>
          <path d="M88.6155 629.087L902.003 1112.26L1016.03 1180H1431.46L1251.57 1073.18L1071.68 966.295L1043.88 949.73L1005.82 927.208L192.487 444.032L88.6155 629.087Z"/>
          <path d="M432.453 197.196L902.003 1034.03L923.901 1073.12L940.012 1101.77L967.809 1151.35L983.92 1180H1223.77L1163.81 1073.12L1147.7 1044.53L1119.9 994.887L1081.84 927.151L1043.88 859.414L612.285 90.3154L432.453 197.196Z"/>
          <path d="M1147.76 0H940.012V1180H1147.76V0Z" />
          <path d="M1043.88 859.414L1005.82 927.208L983.92 966.295L967.809 994.944L940.012 1044.53L923.901 1073.18L902.003 1112.26L863.994 1180H1103.85L1147.7 1101.77L1163.81 1073.18L1655.31 197.139L1475.42 90.3154L1043.88 859.414Z"/>
          <path d="M1081.89 927.208L1043.88 949.73L967.809 994.944L902.003 1034.03L656.307 1180H1071.68L1119.9 1151.41L1147.7 1134.84L1251.57 1073.18L1999.09 629.087L1895.28 444.032L1081.89 927.208Z" />
          <path d="M2086.85 966.295H0.85498V1180H2086.85V966.295Z" />
          <path d="M88.6155 629.087L902.003 1112.26L1016.03 1180H1431.46L1251.57 1073.18L1071.68 966.295L1043.88 949.73L1005.82 927.208L192.487 444.032L88.6155 629.087Z" />
          <path d="M432.453 197.196L902.003 1034.03L923.901 1073.12L940.012 1101.77L967.809 1151.35L983.92 1180H1223.77L1163.81 1073.12L1147.7 1044.53L1119.9 994.887L1081.84 927.151L1043.88 859.414L612.285 90.3154L432.453 197.196Z" />
          <path d="M1147.76 0H940.012V1180H1147.76V0Z" />
          <path d="M1043.88 859.414L1005.82 927.208L983.92 966.295L967.809 994.944L940.012 1044.53L923.901 1073.18L902.003 1112.26L863.994 1180H1103.85L1147.7 1101.77L1163.81 1073.18L1655.31 197.139L1475.42 90.3154L1043.88 859.414Z" />
          <path d="M1081.89 927.208L1043.88 949.73L967.809 994.944L902.003 1034.03L656.307 1180H1071.68L1119.9 1151.41L1147.7 1134.84L1251.57 1073.18L1999.09 629.087L1895.28 444.032L1081.89 927.208Z" />
        </svg>
        <p className="text-base">Victor Autheman</p>
      </Link>
      <ul className="gap-8 hidden md:inline-flex">
        <li><Link href="works" className="hover:text-primary text-base transition-colors">Réalisations</Link></li>
        <li><Link href="experience" className="hover:text-primary text-base transition-colors">Compétences</Link></li>
        <li><Link href="contact" className="hover:text-primary text-base transition-colors">Contact</Link></li>
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
