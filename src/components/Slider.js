import React, {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {GiShoppingBag} from 'react-icons/gi'

export const Slider = ({imgArray}) => {
     const [current,setCurrent] = useState(0)

     const prev = () => {
      setCurrent( current=>  current === 0 ? imgArray.length - 1  : current - 1 )
      console.log(current)
     }
     const next = () => {
          setCurrent(current =>  current === imgArray.length - 1 ? 0 : current + 1 )
          console.log(current)
     }

      const slidejsx =imgArray.length ==0 ?

      <Link to="/cart">< GiShoppingBag className=" text-white mx-auto w-3/5 h-5/6"/> </Link>
      :
      imgArray.map((image, index)=> {
               if(current===index){
                   return(
                    <div key={index} className="flex h-full items-center">

                    <FaArrowAltCircleLeft  className="text-3xl cursor-pointer  text-white" onClick={prev} />

                     <Link to={'/product?id='+index} className="h-full w-full flex items-center">
                     <img alt="Whatever" className="mx-auto w-3/5 h-5/6 object-contain" src={image} /> 
                     </Link>

                    <FaArrowAltCircleRight className="text-3xl cursor-pointer text-white" onClick={next} />

                   </div>
                   ) 
               }
               else{
                    return "";
               }
      })

     return (
            <>
           {slidejsx} 
           </> 
     )
   }
