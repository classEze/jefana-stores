import React, {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {GiShoppingBag} from 'react-icons/gi'

export const Slider = ({product, unique}) => {
     const [current,setCurrent] = useState(0)

     // product.productMedia = [ "doc1.png", "doc2.png" , "spinner.gif" ]

     const prev = () => {
      setCurrent( current=>  current === 0 ? product.productMedia.length - 1  : current - 1 )
      console.log(current)
     }
     const next = () => {
          setCurrent(current =>  current === product.productMedia.length - 1 ? 0 : current + 1 )
          console.log(current)
     }

     return (
            <>
            {product.productMedia.length == 0 && <Link data-unique={unique} to={'/product/' + product.id}>< GiShoppingBag className=" text-white mx-auto w-3/5 h-5/6"/> </Link>}
            {product.productMedia.length == 1 && <Link data-unique={unique} to={'/product/' + product.id} className="flex h-full w-full justify-center items-center"> <img class =" w-5/6 h-5/6 object-contain" src={product.productMedia[0]} alt="Product Image"/> </Link> }
            
            
            { product.productMedia.length > 1 &&
                 <div className="h-full w-full flex items-center justify-between" data-unique={unique} >
                  <FaArrowAltCircleLeft  className="text-3xl  cursor-pointer  text-white" onClick={prev} />
                    {product.productMedia.map((image, index) => {
                         if(current === index) {
                          return (
                          <Link key={index} to={'/product/'+product.id} className="h-5/6 w-5/6">
                          <img alt="slider-image" className="h-full w-full object-contain" src={image} /> 
                          </Link>
                          )}
                        else if(current > index){
                        return (<Link key={index} to={'/product/'+product.id} className="h-5/6 hide-right w-5/6">
                          <img alt="slider-image" className="h-full w-full object-contain" src={image} /> 
                          </Link>
                          )}
                        else{
                             return (
                         <Link key={index} to={'/product/'+product.id} className=" hide-left h-5/6 w-5/6">
                          <img alt="slider-image" className="h-full w-full object-contain" src={image} /> 
                          </Link>
                          )}
                         }
                  )
                    }
               <FaArrowAltCircleRight className="text-3xl cursor-pointer text-white" onClick={next} />
               </div>
               }
           </>
            )
     }