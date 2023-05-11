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



export default function Works({ works, url }) {
  const [load, setLoad] = useState(-1)

  function ImageLoader({src}) {
    return url + src
  }
  const isPresent = useIsPresent()

  return (
    <>
      <Nav />
      <section className="container px-10 mt-52">

        <header className="mb-32 container max-w-7xl">
          <h1 className="font-title font-bold text-7xl lg:text-8xl mb-5">Knowledge <span className='text-primary'>base</span></h1>
          <p className='font-body text-xl text-body-secondary'>In this knowledge base, you will find comprehensive and detailed guides to help you accomplish tasks and projects. The tutorials are designed to be clear, concise and easy to follow, with screenshots and illustrations to visually guide you through each step. My goal is to provide high quality resources to help you succeed in your projects, whether you are a beginner or an experienced user. I hope these tutorials help you achieve your goals!</p>
        </header>


      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24 max-w-7xl mx-auto">
          {works &&
            works.data.map((work, index) => {
              return (
                <Link onClick={() => setLoad(index)} className="flex flex-col gap-8 group" href={{pathname: '/base-detail', query: {id: work.id} }} key={work.id}>
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

  const worksResponse = await fetcher(`${process.env.STRAPI_URL}/api/documentations/?populate=*&sort[0]=updatedAt%3Adesc`);

  return {
    props: {
      works: worksResponse,
      url: process.env.STRAPI_URL
    }
  }
  
}
