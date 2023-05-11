import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'

export default function Footer() {
  return (
    <footer className="bg-background w-full mt-80">
      <div className="container px-10 py-32">
        <div className="flex flex-wrap gap-20">
          <ul className="font-body text-lg text-body-secondary">
            <h4 className="font-title text-3xl text-white mb-5 w-max">Latest project</h4>
            <Link href={'#'} className='hover:text-secondary transition-colors' ><li>Totor & Jadou</li></Link>
            <Link href={'#'} className='hover:text-secondary transition-colors' ><li>Fabulous</li></Link>
            <Link href={'#'} className='hover:text-secondary transition-colors' ><li>Book 2023</li></Link>
          </ul>

          <ul className="font-body text-lg text-body-secondary">
            <h4 className="font-title text-3xl text-white mb-5 w-max">About me</h4>
            <Link href={'contact'} className='hover:text-secondary transition-colors' ><li>Contact me</li></Link>
            <Link href={'#'} className='hover:text-secondary transition-colors' ><li>Lynkfire</li></Link>
          </ul>
          
          <ul className="font-body text-lg text-body-secondary">
            <h4 className="font-title text-3xl text-white mb-5 w-max">Ressources</h4>
            <Link href={'base'} className='hover:text-secondary transition-colors' ><li>Knowledge base</li></Link>
            <Link target='_blank' href={'https://autheman-victor.notion.site/Boite-outils-a4bb44b1e62b423d91133b79680cbeb4'} className='hover:text-secondary transition-colors' ><li>Useful links</li></Link>
          </ul>
       </div>


        <hr className="w-full bg-white/10 border-none h-[1px] my-16" />


        <div className="flex flex-wrap gap-5 justify-between items-center">
          <div className="inline-flex gap-4">
            <Link target='_blank' href={'https://github.com/vautheman'} className="group hover:scale-110 hover:-rotate-3 transition-all"><i className="ri-github-fill ri-2x group-hover:text-primary transition-colors"></i></Link>
            <Link target='_blank' href={'https://www.behance.net/victorautheman'} className="group hover:scale-110 hover:-rotate-3 transition-all"><i className="ri-behance-fill ri-2x group-hover:text-primary transition-colors"></i></Link>
            <Link target='_blank' href={'https://www.instagram.com/victor_autheman/'} className="group hover:scale-110 hover:-rotate-3 transition-all"><i className="ri-instagram-fill ri-2x group-hover:text-primary transition-colors"></i></Link>
            <Link target='_blank' href={'https://www.linkedin.com/victorautheman'} className="group hover:scale-110 hover:-rotate-3 transition-all"><i className="ri-linkedin-box-fill ri-2x group-hover:text-primary transition-colors"></i></Link>
          </div>
          <p className="font-body text-sm text-body-secondary/50">Copyright © 2023 Victor Autheman | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
