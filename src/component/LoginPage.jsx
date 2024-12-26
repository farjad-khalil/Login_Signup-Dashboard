import React, { useContext, useState } from 'react'
import {Feild,Buttonb} from './small'
import { Context } from '../context/context'

function LoginPage() {
    const { state, dispatch } = useContext(Context);


    return (
        <div className='grid place-items-center h-screen'>
            <div className='bg-gray-200 max-w-sm rounded-lg px-5 py-4 border-x-8'>
                <div className=' text-gray-700 font-bold text-2xl text-center m-5 underline'>Login Page</div>
                <Feild value={state.email   } f={(e)=> dispatch({type:'setEmail',payload:{email:e.target.value}})} label="Email: " placeholder="email" />
                <Feild value={state.password} f={(e)=> dispatch({type:'setPassword',payload:{password:e.target.value}})} label="Password: " placeholder="password" />
                <div className='flex justify-center'>
                    <Buttonb f={()=> dispatch({type:'LOG_IN'})} additional="bg-red-900 w-24 text-white" value="Log In" />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
