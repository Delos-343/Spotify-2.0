import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div>
        <img className='w-52 mb-5' src="./public/spotify-logo.png" alt="Spotify Logo" />
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
