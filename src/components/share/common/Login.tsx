'use client'
import { signIn, signOut } from 'next-auth/react'

const Login: React.FC = () => {
  return (
    <div className='flex flex-col'>
      Not signed in <br />
      <button onClick={() => { signIn() }}>Sign in</button>
      <button onClick={() => { signOut() }}>Sign out</button>
    </div>
  )
}

export default Login
