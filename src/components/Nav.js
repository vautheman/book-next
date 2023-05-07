import Link from "next/link";
import { ProgressBar } from "@nadfri/react-scroll-progress-bar";

export default function Nav() {
  return (
  <nav className="py-8 fixed w-full left-0 top-0 text-xl z-40 bg-background/50 backdrop-blur-lg">
    <ProgressBar color1="#29263C00" color2="#A277FF"/>
    <div className="container flex justify-between font-body px-10">
      <Link href="/"><p>Victor</p></Link>
      <ul className="inline-flex gap-6">
        <li><Link href="works" className="hover:text-primary transition-colors">Works</Link></li>
        <li><Link href="experience" className="hover:text-primary transition-colors">Experience</Link></li>
    {/*<li className="group relative cursor-pointer hover:text-primary transition-colors">More
          <ul className="absolute hidden group-hover:flex flex-col gap-4 w-max mt-2">
            <li><Link href={""} className="hover:text-primary transition-colors">Knowledge base</Link></li>
          </ul>
        </li>*/}
        <li><Link href="contact" className="hover:text-primary transition-colors">Contact me</Link></li>
      </ul>
    </div>
  </nav>
  )
}
