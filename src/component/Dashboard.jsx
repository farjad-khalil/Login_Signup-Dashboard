import React, { useContext, useState } from 'react'
import Buttonb from './small/Button'
import { Context } from '../context/context'
import Card from './small/Card'
import Feild from './small/Feild'
function handleSubmit(e){
  e.preventDefault()

}
function Dashboard() {
  const { state, dispatch } = useContext(Context)
  const [add, setAdd] = useState(false)
  return (
    <div>
      {state.adminlogin ? (
        <>
          <Buttonb f={() => setAdd(!add)} additional="mt-7 ml-7" value="Add Product" />
          {add ? <>
          <form className='' onSubmit={(e)=>  handleSubmit}>
            <Feild f={(e)=> dispatch({type:"setPName" , payload:{p_name:e.target.value}})} additional="my-2" placeholder="Product Name" />
            <Feild f={(e)=> dispatch({type:"setDesc" , payload:{desc:e.target.value}})} additional="my-2" placeholder="Product desc" />
            <Feild f={(e)=> dispatch({type:"setQuantity" , payload:{quantity:e.target.value}})} additional="my-2" placeholder="Product Quantity" />
            <Feild f={(e)=> dispatch({type:"setPrice" , payload:{price:e.target.value}})} additional="my-2" placeholder="Product Price" />
            <Buttonb f={(e)=> { e.preventDefault(); dispatch({type:"ADD_PRODUCT"})}} value="Add"/>
          </form>
          </> : null}
        </>
      ) : (
        <h1 className='bg-white'>This is user</h1>
      )
      }
      <Card />
    </div>
  )
}

export default Dashboard
