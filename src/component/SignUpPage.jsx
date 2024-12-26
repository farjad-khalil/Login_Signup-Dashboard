import React, { useContext, useState }   from 'react'
import Feild from './small/Feild'
import Buttonb from './small/Button'
import { Context } from '../context/context'
import { type } from '@testing-library/user-event/dist/type'

function SignUpPage() {
  const {state,dispatch} = useContext(Context)
  return (
    <div>
      <div className='grid place-items-center h-screen'>
        <div className='bg-gray-200 max-w-sm rounded-lg px-5 py-4 border-x-8'>
          <div className=' text-gray-700 font-bold text-2xl text-center m-5 underline place-items-center'>Signup Page</div>
          <Feild value={state.name} f={(e)=> dispatch({type:'setName',payload:{name:e.target.value}})} label="Name: " placeholder="name" />
          <Feild value={state.email} f={(e)=> dispatch({type:'setEmail',payload:{email:e.target.value}})} label="Email: " placeholder="email" />
          <Feild value={state.password} f={(e)=> dispatch({type:'setPassword',payload:{password:e.target.value}})} label="Password: " placeholder="password" />  
          <div className='flex justify-center'>
            <Buttonb  f={(e)=>{ dispatch({type:'SIGN_UP'})}} additional="bg-red-900 w-24 text-white" value="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
