import React from 'react'
import { HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon } from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div>
        <div>
            <button className='flex'>
                <HomeIcon className='h-5 w-5' />
                <p> Home </p>
            </button>
            <button className='flex'>
                <SearchIcon className='h-5 w-5' />
                <p> Search </p>
            </button>
            <button className='flex'>
                <LibraryIcon className='h-5 w-5' />
                <p> Your Library </p>
            </button>
            <button className='flex'>
                <PlusCircleIcon className='h-5 w-5' />
                <p> Create Playlist </p>
            </button>
        </div>
    </div>
  )
}

export default Sidebar