import { React, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { shuffle } from 'lodash'
import { useRecoilState } from 'recoil'
import { playlistIdState, playlistState } from '../atoms/playlistAtom'

const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
]

function Center() {

    const { data: session } = useSession()
    const [color, setColor] = useState(null)
    const playlistId = useRecoilState(playlistIdState)
    const [playlist, setPlaylist] = useRecoilState(playlistState)

    useEffect(() => {
        setColor(shuffle(colors).pop())
    }, [playlistId])

  return (
    <div className='flex-grow font-[Roboto]'>
        <header className='absolute top-5 right-8'>
            <div className='flex items-center bg-red-400 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-3'>
                <img className='rounded-full w-10 h-10' src={session?.user.image} alt='' />
                <h2 className='font-semibold'>{session?.user.name}</h2>
                <ChevronDownIcon className='h-5 w-5' />
            </div>
        </header>
        <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8`}>
            {/* <img src={session?.user.image} alt='' /> */}
            <h1> {session?.user.id} </h1>
        </section>
    </div>
  )
}

export default Center