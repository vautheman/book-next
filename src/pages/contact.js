import Nav from "@/components/Nav";
import Image from "next/image";
import { motion, useIsPresent } from 'framer-motion'

import emojiHand from '../../public/main.png'
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const isPresent = useIsPresent()
  const [isLoading, setIsLoading] = useState(false)
  const [isSended, setIsSended] = useState(false)


  async function handleOnSubmit(e) {
    e.preventDefault()

    if(!isLoading) {
      setIsLoading(true)
      const formData = {}

      Array.from(e.currentTarget.elements).forEach(field => {
        if(!field.name) return;
        formData[field.name] = field.value
      });

      const response = await fetch('/api/mail', {
        method: 'post',
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      setIsLoading(false);

      if(!response.ok) {
        console.log("error")
      } else {
        console.log("bravo")
        setIsSended(true)
      }
    }
  }


  const [effect, setEffect] = useState(false);

  return (
    <>
      <Head>
        <title>Say Hello ! - Victor Autheman</title>
        <meta property="og:title" content={'Say Hello ! - Victor Autheman'} key="title" />
        <meta name='description' content={'Tell me all about it'} />
        <meta name='keywords' content='graphic design developer front end graphiste designer victor autheman' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Nav />
      <section className="container px-10">
        <header className="flex flex-col gap-5">
          <h1 className="mt-52 font-title font-bold text-7xl lg:text-8xl">Tell me all <span className='text-primary'>about</span> it <Image className='inline mb-6' src={emojiHand} width={'80'} height={'100'} /></h1>
          <form className="mt-10" onSubmit={handleOnSubmit}>
            <div className="flex flex-wrap flex-col sm:flex-row font-title text-5xl sm:items-center gap-8">
              <p>My name is </p>
              <input required name="name" type="text" placeholder="your name" className="placeholder:text-white/20 text-primary border-b-white/20 border-b-4 bg-transparent w-full sm:w-96 py-3 focus:outline-none focus:border-primary" />
              <p>it concerns</p>

              <input required value='quote' id="quote" name="object" type="radio" className="hidden" />
              <label for={'quote'} className="group w-max relative p-3 border-4 border-white/20 text-white/20 checked hover:scale-105 hover:-rotate-2 hover:border-primary hover:bg-purple-dark/30 hover:text-white/50 transition-all cursor-pointer">
                a quote
                <span className='w-3 h-3 bg-primary absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                <span className='w-3 h-3 bg-primary absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                <span className='w-3 h-3 bg-primary absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                <span className='w-3 h-3 bg-primary absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
              </label>

              <input required value='question' id="question" name="object" type="radio" className="hidden" />
              <label for={'question'} className="group w-max relative p-3 border-4 border-white/20 text-white/20 checked hover:scale-105 hover:-rotate-2 hover:border-primary hover:bg-purple-dark/30 hover:text-white/50 transition-all cursor-pointer">
                a question
                <span className='w-3 h-3 bg-primary absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                <span className='w-3 h-3 bg-primary absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                <span className='w-3 h-3 bg-primary absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                <span className='w-3 h-3 bg-primary absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
              </label>

              <input required value='proposition' id="proposition" name="object" type="radio" className="hidden" />
              <label for={'proposition'} className="group w-max relative p-3 border-4 border-white/20 text-white/20 checked hover:scale-105 hover:-rotate-2 hover:border-primary hover:bg-purple-dark/30 hover:text-white/50 transition-all cursor-pointer">
                a proposition
                <span className='w-3 h-3 bg-primary absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                <span className='w-3 h-3 bg-primary absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                <span className='w-3 h-3 bg-primary absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                <span className='w-3 h-3 bg-primary absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></span>
              </label>

              <p>. You can reach me at</p>

              <input required name="email" type="text" placeholder="your email" className="placeholder:text-white/20 text-primary border-b-white/20 border-b-4 bg-transparent w-full sm:w-96 py-3 focus:outline-none focus:border-primary" />
            </div>

            <textarea required name="message" className="w-full h-64 mt-16 mb-10 bg-white/5 font-body text-xl text-white py-5 px-8 placeholder:text-white/20 placeholder:font-bold focus:outline-none" placeholder="Your message">
              
            </textarea>

            <div className="inline-flex gap-5 items-center">
              <button type="submit" className={isSended && isSended ? 'hidden' : 'block'}>
                <div className='px-8 py-5 relative bg-secondary group-hover:bg-secondary-soft transition-all inline-flex gap-1 items-center'>
                  <svg className={`${isLoading && isLoading ? "block" : "hidden"} block animate-spin -ml-1 mr-3 h-5 w-5 text-black`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className='font-body text-black text-xl'>{effect && effect ? "Sending in progress" : "Just Send"}</p>
                </div>
              </button>

              {isSended && ( <p className="font-body text-xl text-secondary">Your message has been successfully sent</p> )}
            </div>

          </form>
        </header>
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
