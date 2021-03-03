import React, {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
      const slidejsx = imgArray.map((image, index)=> {
               if(current===index){
                   return(
                        <>
                    <div key={index} className="flex h-full items-center">

                    <FaArrowAltCircleLeft  className="text-xl cursor-pointer  text-gray-600" onClick={prev} />

                     <Link to={'/product?id='+index} className="h-full w-full flex items-center">
                     <img alt="" className="mx-auto w-3/5 h-5/6 object-cover" src={image} /> 
                     </Link>

                    <FaArrowAltCircleRight className="text-xl cursor-pointer text-gray-600" onClick={next} />

                   </div>
                   </>
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
