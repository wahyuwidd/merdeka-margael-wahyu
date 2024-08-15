'use client'
import Link from "next/link"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className='w-full h-screen flex flex-col items-center text-center justify-center'>
            <h2 className='text-primary text-4xl'>500</h2>
            <h1 className='text-6xl font-bold'>Internal Server Error</h1>
            <span>Sorry, something went wrong on our end.</span>
            <img src="/assets/images/500/servererror.png" alt="" className='w-40 mt-[5rem]' />
            <Link onClick={() => reset()} className='mt-10 bg-primary p-3 text-white rounded-md' href="/">Try again</Link>
        </div>
      </body>
    </html>
  )
}