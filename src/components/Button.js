import Link from 'next/link';

export default function Button(props) {
  if(props.type === 'secondary'){
    return (
      <Link href={props.url} className='inline-block group hover:scale-110 hover:-rotate-3 transition-all w-max'>
        <div className='border border-primary px-8 py-5 relative bg-purple-dark/30 group-hover:bg-purple-dark transition-all'>
          <span className='w-3 h-3 bg-primary absolute right-0 top-0 translate-x-1/2 -translate-y-1/2'></span>
          <span className='w-3 h-3 bg-primary absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2'></span>
          <span className='w-3 h-3 bg-primary absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2'></span>
          <span className='w-3 h-3 bg-primary absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2'></span>
          <p className='font-body text-xl'>{props.content}</p>
        </div>
      </Link>
    )
  } else if(props.type === 'primary'){
    return (
      <Link href={props.url} className='inline-block group hover:scale-110 hover:-rotate-3 transition-all w-max'>
        <div className='px-8 py-5 relative bg-secondary group-hover:bg-secondary-soft transition-all'>
          <p className='font-body text-black text-xl'>{props.content}</p>
        </div>
      </Link>
    )
  }
}



