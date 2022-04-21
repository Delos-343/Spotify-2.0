import React from 'react'
import { useSession } from 'next-auth/react'

function Center() {

    const { data: session, status } = useSession()

  return (
    <div className='flex flex-grow'>
        <header className='absolute top-5 right-8'>
            <div className='flex items-center bg-red-400 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'>
                <img className='rounded-full w-10 h-10' src={session?.user.image} alt='' />
                <h2>{session?.user.name}</h2>
            </div>
        </header>
        <section className='flex items-end space-x-7 bg-gradient-to-b to-black from-red-500 h-80 text-white padding-8 w-full'>
            {/* <img src='' alt='' /> */}
            <h1> Hello, World </h1>
        </section>
    </div>
  )
}

export default Center