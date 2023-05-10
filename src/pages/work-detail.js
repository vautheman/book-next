import Nav from "@/components/Nav"
import { useRouter } from "next/router"
import { fetcher } from "./api/mail";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Footer from "@/components/Footer";
import moment from "moment";
import 'moment/locale/fr';
import { motion, useIsPresent } from 'framer-motion'
import Image from "next/image";
import { useState } from "react";

export default function WorkDetail({work, url}) {
  function ImageLoader({src}) {
    return url + src
  }

  const isPresent = useIsPresent()
  moment.locale('fr')
  return( 
    <>
      <Nav /> 
      <section className="container px-10">
        <header className="flex flex-col gap-5 max-w-4xl mx-auto">
          <h1 className="mt-52 font-title font-bold text-7xl md:text-8xl">{work.data.attributes.Titre}</h1>
          <p className='font-body text-xl text-body-secondary max-w-5xl mx-auto'>{work.data.attributes.Description}</p>
          <ul className="inline-flex gap-8 font-body text-md mt-5 items-center">
              {work.data.attributes.Tags.data &&
                work.data.attributes.Tags.data.map(tag => {
                  return (
                    <li className="bg-purple-dark/30 border-primary border p-4 relative" key={tag.id}>
                      {tag.attributes.Nom}
                      <span className='w-2 h-2 bg-primary absolute right-0 top-0 translate-x-1/2 -translate-y-1/2'></span>
                      <span className='w-2 h-2 bg-primary absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2'></span>
                      <span className='w-2 h-2 bg-primary absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2'></span>
                      <span className='w-2 h-2 bg-primary absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2'></span>
                    </li> 
                  )
                })
              }
          </ul>
          <p className="font-body text-md mt-10 mb-20">Publié le : {moment(work.data.attributes.createdAt).format('DD MMMM YYYY')}</p>
        </header>
      </section>

      <Image sizes="100%" width={500} height={500} loader={ImageLoader} className="container w-full px-10 rounded-md aspect-video object-cover mb-32 " src={work.data.attributes.Image.data.attributes.formats.large.url} alt={`photo ${work.data.attributes.Titre}`}/>
      
      <section className="container px-10 flex">
        <ReactMarkdown className="markdown max-w-5xl mx-auto">
          {work.data.attributes.Contenu}
        </ReactMarkdown>
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


export async function getServerSideProps({query}){

  const id = query.id
  const workResponse = await fetcher(`${process.env.STRAPI_URL}/api/realisations/${id}/?populate=*`);


  return {
    props: {
      work: workResponse,
      url: process.env.STRAPI_URL
    }
  }

}
