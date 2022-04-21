import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div>
      
      <img className='w-52 mb-5' src="/spotify-logo.png" alt="Spotify Logo" />

      {Object.values(providers).map((provider) => (

        <div key={provider.name}>
          <button className='bg-[#18d860] text-white p-5 rounded-lg'> Login with {provider.name} </button>
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
