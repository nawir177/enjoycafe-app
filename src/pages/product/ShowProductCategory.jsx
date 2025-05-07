import React from 'react'
import App from '../App'
import { useParams } from 'react-router-dom'
import Category from '../home/category'
export default function ShowProductCategory() {
    const { category } = useParams()
  return (
    <App title={'category'}>
    <div>
        <Category/>
       <h1>{category} </h1>
    </div>
    </App>
  )
}
