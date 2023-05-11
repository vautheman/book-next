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
import moment from "moment";
import { useState } from "react";
import Head from "next/head";



export default function Works({ works, categories, url }) {
  const [load, setLoad] = useState(-1)
  const [cat, setCat] = useState()

  function ImageLoader({src}) {
    return url + src
  }
  const isPresent = useIsPresent()

  return (
    <>
      <Head>
        <title>Works - Victor Autheman</title>
        <meta property="og:title" content={'Works - Victor Autheman'} key="title" />
        <meta name='description' content={'Discover my achievements, from graphic design projects for clients, companies and organizations, to front-end development projects for websites and applications. Each project is accompanied by a detailed description, as well as information about the missions I have successfully accomplished to improve user experience and quality. I hope that these concrete examples will inspire your own projects and missions.'} />
        <meta name='keywords' content='graphic design developer front end graphiste designer victor autheman' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Nav />
      <section className="container px-10 mt-52">

        <header className="mb-32 container max-w-7xl">
          <h1 className="font-title font-bold text-7xl lg:text-8xl mb-5">Latest <span className='text-primary'>projects</span> and <span className="text-primary">works</span></h1>
          <p className='font-body text-xl text-body-secondary'>Discover my achievements, from graphic design projects for clients, companies and organizations, to front-end development projects for websites and applications. Each project is accompanied by a detailed description, as well as information about the missions I have successfully accomplished to improve user experience and quality. I hope that these concrete examples will inspire your own projects and missions.</p>
        </header>


    {/*<div className="container max-w-7xl mb-10">
          <ul className="inline-flex gap-5">
          {categories.map(categorie => {
            return (
              <li onClick={() => setCat(categorie.id)} className="font-body text-sm border-white/10 border-2 py-3 px-5 relative group hover:border-secondary transition-all hover:-rotate-3 hover:scale-105">
                {categorie.attributes.Nom}
                <span className='w-3 h-3 bg-secondary absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                <span className='w-3 h-3 bg-secondary absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                <span className='w-3 h-3 bg-secondary absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                <span className='w-3 h-3 bg-secondary absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
              </li>
            )})
          }
          </ul>
        </div>*/}


      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24 max-w-7xl mx-auto">
          {works &&
            works.data.map((work, index) => {
              return (
                <Link onClick={() => setLoad(index)} className="flex flex-col gap-8 group" href={{pathname: '/work-detail', query: {id: work.id} }} key={work.id}>
                  <header className="relative group-hover:scale-105 transition-transform">
                    <div className="relative">
                      <Image sizes="100%" width={"500"} height={"500"} className="aspect-video object-cover w-full rounded-sm" loader={ImageLoader} src={work.attributes.Image.data.attributes.formats.medium.url} />
                      <Image sizes="100%" width={"500"} height={"500"} className="aspect-video object-cover w-full rounded-sm absolute -z-10 top-0 left-0 blur-3xl opacity-30" loader={ImageLoader} src={work.attributes.Image.data.attributes.formats.thumbnail.url} />
                    </div>
                    {index == 0 &&
                      <span className="absolute top-5 left-5 bg-secondary px-3 py-2 rounded-md text-black font-body">New</span>
                    }
                  </header>
                  <p className="font-body text-sm text-body-secondary">{moment(work.attributes.createdAt).format('DD MMMM YYYY')}</p>
                  <div className="flex flex-col gap-3">
                    <div className="inline-flex justify-between items-center">
                      <h3 className="font-title text-4xl truncate" title={work.attributes.Titre}>{work.attributes.Titre}</h3>
                      
                      <span className="h-5 w-8 flex justify-center items-center">
                      {load === index ? 
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> :
                        <i class="ri-arrow-right-up-line ri-2x group-hover:text-secondary transition-colors"></i>
                      }
                      </span>
                    </div>
                    <p className="font-body text-xl text-body-secondary truncate">{work.attributes.Description}</p>
                  </div>
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

  const worksResponse = await fetcher(`${process.env.STRAPI_URL}/api/realisations/?populate=*&sort[0]=updatedAt%3Adesc`);
  const categoriesResponse = await fetcher(`${process.env.STRAPI_URL}/api/categories/?sort[0]=Nom%3Aasc`);

  return {
    props: {
      works: worksResponse,
      categories: categoriesResponse.data,
      url: process.env.STRAPI_URL
    }
  }
  
}
