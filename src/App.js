import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import LoginPage from './component/LoginPage';
import SignUpPage from './component/SignUpPage';
import { useReducer, useRef, useState } from 'react';
import { Context } from './context/context';
import Buttonb from './component/small/Button';
import { paste } from '@testing-library/user-event/dist/paste';
import Dashboard from './component/Dashboard';

function reducer(state, action) {
   switch (action.type) {
      case 'setName': {
         return {
            ...state,
            name: action.payload.name
         }
      }
      case 'setEmail': {
         return {
            ...state,
            email: action.payload.email
         }
      }
      case 'setPassword': {
         return {
            ...state,
            password: action.payload.password
         }
      }
      case 'setPName': {
         return {
            ...state,
            p_name: action.payload.p_name
         }
      }
      case 'setDesc': {
         return {
            ...state,
            desc: action.payload.desc
         }
      }
      case 'setQuantity': {
         return {
            ...state,
            quantity: action.payload.quantity
         }
      }
      case 'setPrice': {
         return {
            ...state,
            price: action.payload.price
         }
      }
      case 'setLoginpage': {
         return {
            ...state,
            loginpage: !state.loginpage,
            name: '',
            email: '',
            password: '',
         }
      }
      case 'SIGN_UP': {

         for (let i in state.user) {
            if (state.email === state.user[i].email) {
               alert('Email already exists');
               return state
            }
         }
         
         alert("Account created")

         return {
            ...state,
            user: [
               ...state.user,
               {
                  name: state.name,
                  email: state.email,
                  password: state.password
               }
            ]
         }
      }
      case 'LOG_IN': {
         if (state.email === 'admin' && state.password === '1') {
            return {
               ...state,
               login: true,
               adminlogin: true,
               name: '',
               email: '',
               password: '',
            }
         }
         for (let i in state.user) {
            if (state.email === state.user[i].email && state.password === state.user[i].password) {
               return {
                  ...state,
                  login: true,
                  name: '',
                  email: '',
                  password: '',
               }
            }
         }
         alert('wrong credentials')
         return state
      }
      case 'LOG_OUT': {
         return {
            ...state,
            login: false,
            adminlogin: false
         }
      }
      case 'BUY': {
         const updatedProduct = state.product.map(p => {
            if (p.id === action.payload.pid) {
               if (p.quantity > 0) {
                  return {
                     ...p,
                     quantity: p.quantity - 1
                  }
               }
               else {
                  alert("Product out of stock")
                  return { ...p }
               }
            }
            else {
               return p;
            }
         })
         return {
            ...state,
            product: updatedProduct
         }
      }
      case "ADD_PRODUCT": {
         if (state.p_name === '' || state.desc === '' || state.quantity === '' || state.price === '') {
            alert('Fill All the feilds')
            return state
         }
         return {
            ...state,
            nextId: state.nextId + 1,
            product: [
               ...state.product,
               {
                  id: state.nextId,
                  name: state.p_name,
                  desc: state.desc,
                  quantity: state.quantity,
                  price: state.price
               }
            ]
         }
      }
      case "DELETE_PRODUCT": {
         return {
            ...state,
            product: state.product.filter(p => (p.id !== action.payload.pid))
         }
      }
      default:
         return state
   }
}
export default function App() {
   const [state, dispatch] = useReducer(reducer, initialState)
   console.log(state)
   return (

      <body className='bg-slate-950 min-h-screen h-full'>
         <Context.Provider value={{ state, dispatch }}>
            <Navbar />
            {state.login ? <Dashboard /> : (state.loginpage ? <LoginPage /> : <SignUpPage />)}

         </Context.Provider>
      </body>
   );
}
const initialState = {
   name: '',
   email: '',
   password: '',
   login: false,
   loginpage: false,
   adminlogin: false,
   nextId: 2,
   p_name: '',
   desc: '',
   quantity: 0,
   price: 0,
   user: [],
   product: [
      {
         id: 0,
         name: "Cheese",
         desc: 'This is a1 cheese Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, vel.',
         quantity: 7,
         price: 499
      },
      {
         id: 1,
         name: "Fruit",
         desc: 'Fresh fruits',
         quantity: 6,
         price: 129
      },
   ]
};




/* <body className='bg-slate-900 h-screen grid place-items-center'>
      <div className='bg-white max-w-sm p-5 rounded-lg shadow-lg'>
        <div className='flex flex-row items-center'>
          <img
            className='w-10'
            src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726358400&semt=ais_hybrid'
            alt='logo'
          />
        </div>
        <div>
          <h1 className='text-2xl font-bold'>This is heading</h1>
          <p className='text-gray-700'>This is Body</p>
        </div>
      </div>
    </body> */


//  Simple card

// <body className='bg-slate-900 h-screen place-content-center grid'>
//          <div className='bg-white max-w-sm rounded-md'>
//             <div className='flex p-6 pl-3'>
//                <img className='w-16' src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726358400&semt=ais_hybrid'>
//                </img>
//                <div className='pl-8'>
//                   <h1 className= 'text-slate-800 font-bold text-xl'>TailWind CSS</h1>
//                   <p className='text-slate-400'>Established @1989 copyright</p>
//                </div>
//             </div>
//          </div>
//       </body>


