import { React, useEffect, useState } from 'react'

function useSpotify() {

    const { data: session, status } = useSession()

    useEffect(() => {

    }, [session])

  return null
}

export default useSpotify