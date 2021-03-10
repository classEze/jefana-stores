import React from 'react'
import {Slider} from './Slider.js'
import {useSelector} from 'react-redux'
export const ProductCard = ({product }) => {
     const currency = useSelector(state=>state.dataStore.data ? state.dataStore.data.storeCurrency : "")

     return (
          <div className="product-card flex h-72 flex-col rounded-xl overflow-hidden">

          <section className=' bg-secondary overflow-hidden flex-grow'>
              <Slider imgArray={product.productMedia}/>
          </section> 

          <section className="bg-white text-center">
           {product.productName} <br />
           {currency} {product.productPrice}
          </section> 
          </div>
     )
}
