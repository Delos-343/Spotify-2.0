import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

function Login() {
  return (
    <div>
        <h1> Welcome to the Login Page! </h1>
    </div>
  )
}

export default Login

export async function getServerSideProps(context) {

  const providers = await getProviders()

}
