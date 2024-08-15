import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <h2 className='text-primary text-4xl'>404</h2>
      <h1 className='text-6xl font-bold'>Page Not Found</h1>
      <span>Sorry, we couldn&apos;t find the page you&apos;re looking for.</span>
      <img src="/assets/images/404/notfound.png" alt="" className='w-40 mt-[5rem]' />
      <Link className='mt-10 bg-primary p-3 text-white rounded-md' href="/">Return Home</Link>
    </div>
  )
}