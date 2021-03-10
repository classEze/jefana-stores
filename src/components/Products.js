import React from 'react'
import { ProductCard } from './ProductCard'
import {useSelector} from 'react-redux'

export const Products = () => {
     const products = useSelector(state=>state.dataStore.data ? state.dataStore.data.products : [] )
     return (
          <div className="grid mb-10 md:grid-cols-2 gap-10 w-4/6 mx-auto mt-10">
               {
               products.map(product=><ProductCard key={product.id} product={product} />
             )
               }
               
          </div>
     )
}
