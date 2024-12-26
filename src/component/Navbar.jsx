import React ,{useContext}from 'react'
import { Context } from '../context/context';
import userEvent from '@testing-library/user-event';
import Buttonb from './small/Button';

function Navbar() {
    const {state,dispatch} = useContext(Context);
    return (
        <div>
            <nav className='bg-cyan-500 h-14 flex justify-between px-7 items-center'>
                <div className='font-bold text-2xl text-blue-800 '>FOrge</div>
                <ul className='flex text-lg cursor-pointer font-semibold'>
                    <li className='px-2'>Home</li>
                    <li className='px-2'>About us</li>
                    <li className='px-2'>Contact</li>
                </ul>
                {state.login? <Buttonb f={() => dispatch({type:'LOG_OUT'})} value="LOG OUT" /> : <Buttonb f={() => dispatch({type:'setLoginpage'})} value="Login/SignUp" />}
            </nav>
        </div>
    )
}

export default Navbar
