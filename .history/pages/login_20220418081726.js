import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      
      <img className='w-52 mb-7' src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-transparent-spotify-logo-images-25.png" alt="Spotify Logo" />

      {Object.values(providers).map((provider) => (

        <div key={provider.name}>
          <button className='bg-[#18d860] text-white py-3 px-5 rounded-full font-semibold' onClick={ () => signIn(provider.id, {callbackUrl: "/"}) }>
            Login with {provider.name}
          </button>
        </div>
      ))}

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
