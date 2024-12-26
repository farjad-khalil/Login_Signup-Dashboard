import React, { useContext } from 'react'
import { Context } from '../../context/context'
import Buttonb from './Button'

function Card() {
   const { state, dispatch } = useContext(Context)
   const products = state.product.map((p) => {
      return (
         <div key={p.id} className="bg-white p-5 rounded-md h-62 grid">
            <p>{p.id}</p>
            <div className="py-1 font-semibold text-3xl">{p.name}</div>
            <div className="py-1 text-xs text-gray-600">{p.desc}</div>
            <div className="py-1">Price: {p.price}</div>
            <div className="py-1">Left: {p.quantity}</div>
            <div className='flex'>
               <Buttonb
                  additional="bg-black w-28 m-2 rounded-md text-white "
                  f={(e) => { e.preventDefault(); dispatch({ type: "BUY", payload: { pid: p.id } }) }}
                  value="Buy Now"
               />
               {state.adminlogin ? <Buttonb
                  f={(e) => dispatch({ type: "DELETE_PRODUCT", payload: { pid: p.id } })}
                  additional="bg-red-800 w-28 my-2 rounded-md text-white"
                  value="Delete" /> : null}
            </div>
         </div>
      );
   });

   return (
      <div className="grid grid-cols-4 gap-4 m-7 ">
         {products}
      </div>
   );
}

export default Card
