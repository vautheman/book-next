import Nav from "@/components/Nav";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion, useIsPresent } from 'framer-motion'

import camera from '../../public/camera.png' 
import simpson from '../../public/works/simpson_living_room_night.png'
import astronaut from '../../public/works/rendu-4k-v2.png'
import donut from '../../public/works/donut.png'
import mockupAnais from '../../public/works/mockup-site-anais2.jpg'
import { fetcher } from "./api/mail";
import Link from "next/link";



export default function Works({ works, url }) {

  function ImageLoader({src}) {
    return url + src
  }
  const isPresent = useIsPresent()

  return (
    <>
      <Nav />
      <section className="container px-10 mt-52">
        <div className="bg-purple-dark/30 border border-primary relative flex justify-center items-center w-full h-96 px-16 text-center">
          <span className='w-4 h-4 bg-primary absolute right-0 top-0 translate-x-1/2 -translate-y-1/2'></span>
          <span className='w-4 h-4 bg-primary absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2'></span>
          <span className='w-4 h-4 bg-primary absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2'></span>
          <span className='w-4 h-4 bg-primary absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2'></span>

          <Image className='hidden lg:inline absolute pointer-events-none top-2/3 -translate-y-1/3 left-0 -translate-x-1/2 -rotate-12 group-hover:left-10 transition-all' alt="image 3D camera" src={camera} width={'400'} height={'100'} />
          
          <h1 className="font-title font-bold text-7xl lg:text-8xl">Latest <span className='text-secondary'>projects</span> and <span className="text-primary">works</span></h1>
        </div>



        <div className="columns-1 lg:columns-2 gap-10 mt-32 lg:px-20">
          {works &&
            works.data.map((work) => {
              return (
                <Link href={{pathname: '/work-detail', query: {id: work.id} }} key={work.id}>
                  <article className="mb-10 relative group hover:scale-105 hover:-rotate-2 hover:border-2 border-secondary transition-all">
                    <header className='relative h-full'>
                    {/*<img className="aspect-square lg:aspect-auto object-cover w-full" src={`${process.env.STRAPI_URL + work.attributes.Image.data.attributes.formats.large.url}`} key={work.id} alt={`photo ${work.attributes.Titre}`} />*/}
                    <Image sizes="100%" width={500} height={500} loader={ImageLoader} className="aspect-square lg:aspect-auto object-cover w-full" src={work.attributes.Image.data.attributes.formats.medium.url} key={work.id} alt={`photo ${work.attributes.Titre}`} />
                      <span className='absolute w-full h-full bg-black top-0 left-0 opacity-0 group-hover:opacity-30 transition-opacity'></span>
                      <h3 className='px-5 py-4 backdrop-blur-lg absolute bottom-0 w-full font-title text-5xl text-center'>{work.attributes.Titre}</h3> 
                    </header>

                    <div className='px-9 py-7 bg-purple-dark/30'>
                      <p className='font-body text-xl text-body-secondary'>{work.attributes.Description}</p>
                    </div>

                    <span className='w-3 h-3 bg-secondary absolute opacity-0 right-0 top-0 translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity'></span>
                    <span className='w-3 h-3 bg-secondary absolute opacity-0 left-0 top-0 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity'></span>
                    <span className='w-3 h-3 bg-secondary absolute opacity-0 left-0 bottom-0 -translate-x-1/2 translate-y-1/2 group-hover:opacity-100 transition-opacity'></span>
                    <span className='w-3 h-3 bg-secondary absolute opacity-0 right-0 bottom-0 translate-x-1/2 translate-y-1/2 group-hover:opacity-100 transition-opacity'></span>

                  </article>
                </Link>
              )
            })
          }
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


export async function getServerSideProps() {

  const worksResponse = await fetcher(`${process.env.STRAPI_URL}/api/realisations/?populate=*`);

  return {
    props: {
      works: worksResponse,
      url: process.env.STRAPI_URL
    }
  }
  
}
