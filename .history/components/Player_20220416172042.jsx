import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import useSpotify from '../hooks/useSpotify'
import { useRecoilState } from 'recoil'
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom'

function Player() {

    const spotifyApi = useSpotify()
    const { data: session, status } = useSession
    const [currentIdTrack, setCurrentIdTrack] = useRecoilState(currentTrackIdState)

    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
    const [volume, setVolume] = useState(50)

  return (
    <div>
        <div>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default Player