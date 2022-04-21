import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistAtom'
import Song from './Song'

function Songs() {

    const playlist = useRecoilValue(playlistState)

  return (
    <div className='text-white'>
        {playlist?.tracks.items.map((track) => (
            <Song key={track.track.id} track={track} order={i} />
        ))}
    </div>
  )
}

export default Songs
