import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div>
        <img className='w-52 mb-5' src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" />
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
