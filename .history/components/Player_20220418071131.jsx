import { React, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import useSpotify from '../hooks/useSpotify'
import { useRecoilState } from 'recoil'
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom'
import useSongInfo from '../hooks/useSongInfo'

function Player() {

    const spotifyApi = useSpotify()
    const { data: session, status } = useSession
    const [currentTrackId, setCurrentIdTrack] = useRecoilState(currentTrackIdState)

    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
    const [volume, setVolume] = useState(50)

    const songInfo = useSongInfo()

    const fetchCurrentSong = () => {
        if(!songInfo) {
            spotifyApi.getMyCurrentPlayingTrack().then((data) => {

                console.log("Now Playing : ", data.body?.item)
                setCurrentIdTrack(data.body?.item?.id)

                spotifyApi.getMyCurrentPlaybackState().then((data) => {
                    setIsPlaying(data.body?.is_playing)
                })
            })
        }
    }

    useEffect(() => {
        if(spotifyApi.getAccessToken() && !currentTrackId) {
            
            // Fetch song info
            fetchCurrentSong()
            setVolume(50)
        }

    }, [currentTrackIdState, spotifyApi, session])

  return (
    <div className='h-24 bg-gradient-to-b from-black to-gray-900 text-white grid-cols-3 text-xs sm:text-base px-2 md:px-8'>
        <div className='flex items-center space-x-4'>
            <img className='hidden md:inline h-10 w-10' src={songInfo?.album.images?.[0]?.url} alt="" />
            <div>
                <h3> {songInfo?.name} </h3>
                <p> {songInfo?.artists?.[0]?.name} </p>
            </div>
        </div>
    </div>
  )
}

export default Player