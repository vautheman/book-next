import Spline from '@splinetool/react-spline';

import Button from './Button';

export default function Header() {

  return (
    <header className="grid xl:grid-cols-2 container px-10 h-auto sm:min-h-screen mt-44 sm:mt-0 items-center">
      <div className='flex flex-col justify-center gap-8 h-full py-28'>
        <h1 className="font-title font-bold text-6xl sm:text-7xl md:text-8xl"><span className="text-secondary">Graphic</span> Designer et Intégrateur <span className="text-primary">Front-End</span></h1>
        <p className='font-body max-w-xl text-xl text-body-secondary'>Hello ! Je m&apos;appelle victor et mon travail consiste à repenser l&apos;identité visuelle et l&apos;image de marque des entreprises.</p>
        
        <div className='mt-5 flex flex-wrap gap-10'>
          <Button type={'secondary'} url={'#about'} content={'A Propos de moi'} />
          <Button type={'primary'} url={'./cv-victor-autheman.pdf'} content={'Télécharger mon CV'} />
        </div>
      </div>

      <div className='hidden xl:block h-4/5'>
        <Spline scene="https://prod.spline.design/0S4VquLDXGqolTG8/scene.splinecode" />
      </div>
   
    </header>
  )
}
