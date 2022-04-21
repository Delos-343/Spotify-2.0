import React from 'react'
import { useSession } from 'next-auth/react'

function Center() {

    const { data: session, status } = useSession()

  return (
    <div className='flex flex-grow text-white'>
        <h1> Center.section(img, dashboard) </h1>
        <header>
            <div className='rounded-full w-10 h-10'>
                <img src={session?.user.image} alt='' />
            </div>
        </header>
    </div>
  )
}

export default Center