import Nav from "@/components/Nav";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion, useIsPresent } from 'framer-motion'

import malt from '../../public/icons/malt.png'
import herbe from '../../public/icons/herbe.png'
import building from '../../public/icons/building.png'
import instic from '../../public/icons/instic.png'
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Head from "next/head";

import react from '../../public/icons/react.png'
import css from '../../public/icons/css.png'
import git from '../../public/icons/git.png'
import js from '../../public/icons/js.png'
import nextjs from '../../public/icons/nextjs.png'
import nodejs from '../../public/icons/nodejs.png'
import npm from '../../public/icons/npm.png'
import tailwind from '../../public/icons/tailwind.png'
import photoshop from '../../public/icons/photoshop.png'
import illustrator from '../../public/icons/illustrator.png'
import indesign from '../../public/icons/indesign.png'
import figma from '../../public/icons/figma.svg'
import spline from '../../public/icons/spline.png'

export default function Experience() {
  const isPresent = useIsPresent()
  return (
    <>
      <Head>
        <title>Experience - Victor Autheman</title>
        <meta property="og:title" content={'Experience - Victor Autheman'} key="title" />
        <meta name='description' content={'Every day, I’m honing my skills on the most in-demand technologies, such as JavaScript, React.js, Next.js, Tailwind CSS, Node.js, MariaDB, PHP, and much more! My flexibility allows me to choose the technologies I want to use in my projects.'} />
        <meta name='keywords' content='graphic design developer front end graphiste designer victor autheman' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Nav />
       
      <section>
      
        <header className="mb-28 max-w-7xl mx-auto container px-10">
          <h1 className="mt-52 font-title font-bold text-7xl md:text-8xl mb-5">The <span className="text-primary">tech stack</span> that I master</h1>
          <p className='font-body text-xl text-body-secondary'>Every day, I&rsquo;m honing my skills on the most in-demand technologies, such as JavaScript, React.js, Next.js, Tailwind CSS, Node.js, MariaDB, PHP, and much more! My flexibility allows me to choose the technologies I want to use in my projects.</p>
        </header>
        
        <div className="flex gap-10 flex-col relative z-0">
          <Marquee direction={'right'}>
            <div className="flex flex-row flex-nowrap">
              <div className="rounded-xl bg-purple-dark/30 border-primary border px-8 py-6 flex flex-row flex-nowrap h-fit gap-5 items-center max-w-md w-auto mx-5">
                <Image alt="logo react" src={react} sizes="100%" />
                <div className="flex-1">
                  <h4 className="font-title text-3xl">React</h4>
                  <p className="font-body text-sm text-body-secondary">A JavaScript library that is used for building user interfaces</p> 
                </div>
              </div>
    
              <div className="rounded-xl bg-purple-dark/30 border-primary border px-8 py-6 flex flex-row flex-nowrap h-fit gap-5 items-center max-w-md mx-5">
                <Image src={js} alt="logo javascript" sizes="100%" />
                <div className="flex-1">
                  <h4 className="font-title text-3xl">JavaScript</h4>
                  <p className="font-body text-sm text-body-secondary">JavaScript is a programming language that drives the web.</p> 
                </div>
              </div>
    
              <div className="rounded-xl bg-purple-dark/30 border-primary border px-8 py-6 flex flex-row flex-nowrap h-fit gap-5 items-center max-w-md mx-5">
                <Image src={nextjs} alt="logo next.js" sizes="100%" />
                <div className="flex-1">
                  <h4 className="font-title text-3xl">Next.js</h4>
                  <p className="font-body text-sm text-body-secondary">Next.js is a famework built on top of React.js</p> 
                </div>
              </div>

              <div className="rounded-xl bg-purple-dark/30 border-primary border px-8 py-6 flex flex-row flex-nowrap h-fit gap-5 items-center max-w-md mx-5">
                <Image src={tailwind} alt="logo tailwindcss" sizes="100%" />
                <div className="flex-1">
                  <h4 className="font-title text-3xl">Tailwind CSS</h4>
                  <p className="font-body text-sm text-body-secondary">Next.js is a famework built on top of React.js</p> 
                </div>
              </div>

              <div className="rounded-xl bg-purple-dark/30 border-primary border px-8 py-6 flex flex-row flex-nowrap h-fit gap-5 items-center max-w-md mx-5">
                <Image src={npm} alt="logo npm" sizes="100%" />
                <div className="flex-1">
                  <h4 className="font-title text-3xl">NPM</h4>
                  <p className="font-body text-sm text-body-secondary">It’s package manager for the JavaScript language.</p> 
                </div>
              </div>

              <div className="rounded-xl bg-purple-dark/30 border-primary border px-8 py-6 flex flex-row flex-nowrap h-fit gap-5 items-center max-w-md w-auto mx-5">
                <Image src={css} alt="logo css" sizes="100%" />
                <div className="flex-1">
                  <h4 className="font-title text-3xl">CSS</h4>
                  <p className="font-body text-sm text-body-secondary">Cascading Style Sheets is a style sheet language</p> 
                </div>
              </div>
    
              <div className="rounded-xl bg-purple-dark/30 border-primary border px-8 py-6 flex flex-row flex-nowrap h-fit gap-5 items-center max-w-md mx-5">
                <Image src={git} alt="logo git" sizes="100%" />
                <div className="flex-1">
                  <h4 className="font-title text-3xl">Git & Github</h4>
                  <p className="font-body text-sm text-body-secondary">Free & Open source distributed version control system</p> 
                </div>
              </div>
    
              <div className="rounded-xl bg-purple-dark/30 border-primary border px-8 py-6 flex flex-row flex-nowrap h-fit gap-5 items-center max-w-md mx-5">
                <Image src={nodejs} alt="logo node.js" sizes="100%" />
                <div className="flex-1">
                  <h4 className="font-title text-3xl">Node.js</h4>
                  <p className="font-body text-sm text-body-secondary">A server-side JavaScript runtime environment.</p> 
                </div>
              </div>

            </div>
          </Marquee>


          <Marquee direction={'left'}>
            <div className="flex flex-row flex-nowrap">
              
              <div className="rounded-xl bg-purple-dark/30 border-primary border px-8 py-6 flex flex-row flex-nowrap h-fit gap-5 items-center max-w-md mx-5">
                <Image src={photoshop} alt="logo photoshop" width={'60'} height={'60'} />
                <div className="flex-1">
                  <h4 className="font-title text-3xl">Photoshop</h4>
                  <p className="font-body text-sm text-body-secondary">Photoshop is a professional photo editing software</p> 
                </div>
              </div>

              <div className="rounded-xl bg-purple-dark/30 border-primary border px-8 py-6 flex flex-row flex-nowrap h-fit gap-5 items-center max-w-md mx-5">
                <Image src={illustrator} alt="logo illustrator" width={'60'} height={'60'} />
                <div className="flex-1">
                  <h4 className="font-title text-3xl">Illustrator</h4>
                  <p className="font-body text-sm text-body-secondary">Illustrator is a vector drawing software</p> 
                </div>
              </div>

              <div className="rounded-xl bg-purple-dark/30 border-primary border px-8 py-6 flex flex-row flex-nowrap h-fit gap-5 items-center max-w-md mx-5">
                <Image src={indesign} alt="logo indesign" width={'60'} height={'60'} />
                <div className="flex-1">
                  <h4 className="font-title text-3xl">Indesign</h4>
                  <p className="font-body text-sm text-body-secondary">Indesign is a page layout software for printing</p> 
                </div>
              </div>

              <div className="rounded-xl bg-purple-dark/30 border-primary border px-8 py-6 flex flex-row flex-nowrap h-fit gap-5 items-center max-w-md mx-5">
                <Image src={figma} alt="logo figma" width={'30'} height={'60'} />
                <div className="flex-1">
                  <h4 className="font-title text-3xl">Figma</h4>
                  <p className="font-body text-sm text-body-secondary">Figma is a cloud-based collaborative graphic Design tool</p> 
                </div>
              </div>

              <div className="rounded-xl bg-purple-dark/30 border-primary border px-8 py-6 flex flex-row flex-nowrap h-fit gap-5 items-center max-w-md mx-5">
                <Image src={spline} alt="logo spline" width={'50'} height={'60'} />
                <div className="flex-1">
                  <h4 className="font-title text-3xl">Spline</h4>
                  <p className="font-body text-sm text-body-secondary">Spline is a 3D design tool easily integrated in javascript</p> 
                </div>
              </div>

            </div>
          </Marquee>
        </div>
      </section>

      <section className="container px-10">
        <header className="flex flex-col gap-5 max-w-5xl mx-auto text-center">
          <h1 className="mt-52 font-title font-bold text-7xl md:text-8xl">My <span className="text-primary">journey</span> and <span className="text-secondary">training</span></h1>
          <p className='font-body text-xl text-body-secondary'>Every day, I&rsquo;m honing my skills on the most in-demand technologies, such as JavaScript, React.js, Next.js, Tailwind CSS, Node.js, MariaDB, PHP, and much more! My flexibility allows me to choose the technologies I want to use in my projects.</p>
        </header>

        <div className="flex flex-col gap-20 mx-auto w-fit mt-32">
          <aside className="max-w-4xl w-auto flex flex-col gap-5">
            <header className="inline-flex gap-6 items-center">
              <Image src={malt} width={'50'} height={'100'}  />
              <h3 className="font-title text-3xl sm:text-5xl ">Freelance on Malt</h3>
            </header>
          
            <div className="border-l-2 border-secondary pl-12 ml-6">
              <p className="font-body text-xl text-body-secondary w-fit">From a set of specifications I created the website, from the model to the online version, listing all the books of their library with an online reservation system.</p>
              <p className="font-body font-bold mt-5 text-secondary">Today</p>
            </div>
          </aside>
      
          <aside className="max-w-4xl flex flex-col gap-5">
            <header className="inline-flex gap-6 items-center">
              <Image src={herbe} width={'50'} height={'100'} />
              <h3 className="font-title text-3xl sm:text-5xl ">Freelance at le passe jardins</h3>
            </header>
          
            <div className="border-l-2 border-secondary pl-12 ml-6">
              <p className="font-body text-xl text-body-secondary">From a set of specifications I created the website, from the model to the online version, listing all the books of their library with an online reservation system.</p>
              <p className="font-body font-bold mt-5 text-secondary">2022 - 2023</p>
            </div>
          </aside>

          <aside className="max-w-4xl flex flex-col gap-5">
            <header className="inline-flex gap-6 items-center">
              <Image src={building} width={'50'} height={'100'} />
              <h3 className="font-title text-3xl sm:text-5xl ">Apprenticeship at DRIM France</h3>
            </header>
          
            <div className="border-l-2 border-secondary pl-12 ml-6">
              <p className="font-body text-xl text-body-secondary">From a set of specifications I created the website, from the model to the online version, listing all the books of their library with an online reservation system.</p>
              <p className="font-body font-bold mt-5 text-secondary">2020 - 2022</p>
            </div>
          </aside>
  
          <aside className="max-w-4xl flex flex-col gap-5">
            <header className="inline-flex gap-6 items-center">
              <Image src={instic} width={'50'} height={'100'} />
              <h3 className="font-title text-3xl sm:text-5xl ">INSTIC, Web Design Training</h3>
            </header>
          
            <div className="border-l-2 border-secondary pl-12 ml-6">
              <p className="font-body text-xl text-body-secondary">From a set of specifications I created the website, from the model to the online version, listing all the books of their library with an online reservation system.</p>
              <p className="font-body font-bold mt-5 text-secondary">2020 - 2022</p>
            </div>
          </aside>
    
          {/*<Button type={'secondary'} url={''} content={'Show more'} />*/}

        </div>
      </section>
 

      <Footer />
      
      <motion.div 
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.6, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.6, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 bg-primary z-50"
      />

    </>
  )
}
