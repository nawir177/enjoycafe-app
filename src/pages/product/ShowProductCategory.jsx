import React from 'react'
import App from '../App'
import { useParams } from 'react-router-dom'
import Category from '../home/category'
import CardProduct from '../../components/card/cardProduct'
export default function ShowProductCategory() {
  const { category } = useParams()
  return (
    <App title={'category'}>
      <div>
        <Category />
        <h1 className='text-xl font-semibold text-primary my-6'>{category} </h1>
        <div className="grid grid-cols-2 justify-center gap-2 items-center p-1">
          <div className="col flex items-center justify-center">
            <CardProduct />
          </div>
          <div className="col flex items-center justify-center">
            <CardProduct />
          </div>
          <div className="col flex items-center justify-center">
            <CardProduct />
          </div>
          <div className="col flex items-center justify-center">
            <CardProduct />
          </div>
          <div className="col flex items-center justify-center">
            <CardProduct />
          </div>
        </div>
      </div>
    </App>
  )
}
