import React from 'react'
import { ProductCard } from './ProductCard'

export const Products = () => {
     const products = [1,2,3,4]
     return (
          <div className="grid mb-10 md:grid-cols-2 gap-10 w-4/6 mx-auto mt-10">
               {
               products.map(product=><ProductCard key={product}  name="onion" price="N10" />
             )
               }
               
          </div>
     )
}
