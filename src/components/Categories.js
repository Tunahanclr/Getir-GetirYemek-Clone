import React, { useState,useEffect } from 'react'
import categoryData from '../api/categories.json'
import Category from './ui/Category'

export default function Categories() {
  const [categories,setCategories]=useState([])

  useEffect(() => {
      setCategories(categoryData)

  }, [])
  
  return (
    <div className='bg-white py-4'>
      <div className='container'>
        <h3 className='text-sm font-semibold'>Kategoriler</h3>
        <div className='grid md:grid-cols-5 grid-cols-4 lg:grid-cols-10 '>
        {categories && categories.map((category,index)=><Category key={index} category={category}/>)}
        </div>
      </div>
    </div>
  )
}