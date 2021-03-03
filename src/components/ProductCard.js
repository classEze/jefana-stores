import React from 'react'
import {Slider} from './Slider.js'

export const ProductCard = ({src, price, name }) => {
     const images = ["doc1.png","/doc2.png","/doc3.png","/doc4.png","/doc5.png","/doc6.png","/doc7.png","/doc8.png","/doc9.png","/spinner.gif"]


     return (
          <div className="product-card flex h-72 flex-col rounded-xl overflow-hidden">

          <section className=' bg-secondary overflow-hidden flex-grow'>
              <Slider imgArray={images}/>
          </section> 

          <section className="bg-white text-center">
           {name} <br />
           {price}
          </section> 

          </div>
     )
}
