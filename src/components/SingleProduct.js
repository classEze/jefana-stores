import React, { useState } from 'react'
import { Slider } from './Slider'
import {FaCaretDown, FaHeart, FaWhatsapp} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import {useSelector} from 'react-redux'



const SingleProduct = ({location, history, match}) => {
     const data = useSelector(state=> state.dataStore.data)
     const products = data ? data.products : [] 


    function closeModal(e) {
         if(e.target.classList.contains('drop-shadow'))
             history.push('/')
            }

    const singleProduct = products.find(product=>Number(product.id) === Number(match.params.id))    
     const [number, setNumber] = useState(1)

     const [show, setShow] = useState(false)
     

     function changeNumber(e) {
          if(e.target.id === "Add") setNumber(number => number + 1 )
          else{
               setNumber(number=> number === 1 ? number : number - 1 )
          }
     } 
     return (
          <>
          <div className="w-full h-full fixed top-0 z-10 bg-transparent drop-shadow overflow-auto" onClick={closeModal}>

          <section className="h-5/6 w-5/6 mx-auto my-10 bg-white grid md:grid-cols-2 ">

          {singleProduct && <Slider product={singleProduct} unique="unique" />
          }

                  {
                  data &&
                   <section className="md:mt-8 ml-12 overflow-auto mb-10">
                         {singleProduct ? singleProduct.productName : '' } <br />
                         By {data.storeName} <br />
                         {singleProduct.productDescription} <br />
                         {singleProduct.productSizes &&
                         <>
                          <p className="mt-4">Size</p>
                          <select name="size" id="" className="rounded-2xl h6 border-2 border-transparent">
                               <option disabled selected value="">choose</option>
                               <option disabled value="">small</option>
                               <option disabled value="">very small</option>
                               <option disabled value="">medium</option>
                               <option disabled value="">big</option>
                          </select>
                          </>
                           }
                          {singleProduct.productColours && 
                          <>
                              <p className="mt-4">Colour</p>
                              <section id="buttons" className="flex flex-wrap">
                              <button>white</button>
                              <button>black</button>
                              <button>red</button>
                              <button>green</button>
                              </section>
                              </>
                          }
                          
                         <p className="mt-4">How Many</p>
                         <div className="border-2 w-4/12 flex justify-around items-center border-transparent border-opacity-50 rounded-3xl">
                              <button className="border-none outline-unset text-lg" id="Subtract" onClick={ changeNumber }>-</button>
                              <span className=""> {number}</span>
                              <button className="border-none outline-unset text-lg" id="Add" onClick={ changeNumber} >+</button>
                         </div>

                         <p className="mt-4">Price</p>
                         <p> {data.storeCurrency} {singleProduct.productPrice} </p>

                      <div id="button2" className=" flex items-start mt-8 ">
                           <button className="border-none px-4 py-2 mr-4 rounded-2xl text-white bg-primary"> Add to bag</button>


                           <aside className="flex flex-col" id="drop-icons">
                           <span className="flex rounded-2xl border-2 py-2 px-2 items-center border-transparent border-opacity-40"> 
                           <FaHeart className="cursor-pointer mr-2" />
                           Contact Seller <FaCaretDown className="cursor-pointer" onClick={()=>setShow(current=>!current)} />
                            </span>

                            <span className={show? "flex justify-start" : "hidden"} id="drop-icons">  <FaWhatsapp className="mr-2" /> Whatsapp</span>
                            <span className={show? "flex justify-start" : "hidden"} id="drop-icons"> <FiPhoneCall className="mr-2"/> Phone</span>
                            <span className={show? "flex justify-start" : "hidden"} id="drop-icons"> <AiOutlineMail className="mr-2"/> Email</span>
                            </aside>

                      </div>

                    </section>
}
               </section>         
          </div>
          </>
     )
}
export default SingleProduct
