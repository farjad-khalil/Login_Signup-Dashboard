import React, { useContext } from 'react'
import { Context } from '../../context/context'

function Feild({ label, placeholder,f,additional ,value}) {
    return (
        <>

            <div className={`my-10 mx-2 ${additional}`}>
                <label className='w-[88px] inline-block text-lg text-gray-700'>{label}</label>
                <input
                    value={value}
                    onChange={f}
                    placeholder={`Enter your ${placeholder}`} 
                    className='border-2 border-gray-400 rounded-lg text-lg p-[6px] bg-gray-100' />
            </div>
        </>
    )
}

export default Feild
