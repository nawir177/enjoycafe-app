import React from 'react'
import App from '../App'
import CardCart from '../../components/card/CardCart'
import { Link } from 'react-router-dom'
export default function CartList() {
  return (
    <App>
        <h1 className='text-xl font-bold text-primary my-3'>List keranjang</h1>
       
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <hr className='mb-1 h-0.5 bg-primary' />
        <div className="flex w-full items-center justify-between">
            <div className="col text-xl font-bold text-primary px-2">
                Total 
            </div>
            <div className="col text-md font-bold">
                Rp. 100.000
            </div>
        </div>
        <Link to={'/payment'}>
        <button className='w-full py-2 bg-primary text-white rounded-xl mt-4 hover:bg-orange-400'>
            Checkout
        </button>
        
        </Link>
    </App>
  )
}
