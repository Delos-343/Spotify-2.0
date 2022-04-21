import { React, useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState } from '../atoms/songAtom'
import useSpotify from './useSpotify'

function useSongInfo() {

    const spotifyApi = useSpotify()
    const [currentIdTrack, setCurrentIdTrack] = useRecoilState(currentTrackIdState)

    const [songInfo, setSongInfo] = useState(null)

  return (
    <div>
        
    </div>
  )
}

export default useSongInfo