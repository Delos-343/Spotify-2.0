import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import './assets/img/spotify-logo.png'

function Login({ providers }) {
  return (
    <div>
        <img className='w-52 mb-5' src="./assets/img/spotify-logo.png" alt="Spotify Logo" />
    </div>
  )
}

export default Login

export async function getServerSideProps(context) {

  const providers = await getProviders()

  return {
    props: {
      providers,
    }
  }
}
