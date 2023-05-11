import Spline from '@splinetool/react-spline';
import Button from './Button';

export default function Header() {


  return (
    <header className="grid xl:grid-cols-2 container px-10 h-auto sm:min-h-screen mt-44 sm:mt-0 mb-32">
      <div className='flex flex-col justify-center gap-8 h-full py-28'>
        <h1 className="font-title font-bold text-6xl sm:text-7xl md:text-8xl"><span className="text-secondary">Graphic</span> Design and <span className="text-primary">Front-End</span> Developer</h1>
        <p className='font-body max-w-xl text-xl text-body-secondary'>My name is Victor Autheman and I’m fascinated by the new technologies and the universe of the web more particularly</p>
        
        <div className='mt-5 flex flex-wrap gap-10'>
          <Button type={'secondary'} url={'#about'} content={'About me'} />
          <Button type={'primary'} url={'#'} content={'Download CV'} />
        </div>
      </div>

      <div className='hidden xl:block h-screen'>
        <Spline scene="https://prod.spline.design/0S4VquLDXGqolTG8/scene.splinecode" />
      </div>
   
    </header>
  )
}
