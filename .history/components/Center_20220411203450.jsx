import React from 'react'
import { useSession } from 'next-auth/react'

function Center() {

    const { data: session, status } = useSession()

  return (
    <div className='flex flex-grow text-white items-center justify-center'>
        <h1> Center.section(img, dashboard) </h1>
        <header>
            <div className='m-auto'>
                <img src={session?.user.image} alt='' />
            </div>
        </header>
    </div>
  )
}

export default Center