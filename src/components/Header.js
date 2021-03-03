import React from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import {GiShoppingBag} from 'react-icons/gi'
import {Link} from 'react-router-dom'

export const Header = () => {
    return(
      <nav 
      className="pt-6 px-10 bg-primary h-32 flex lg:fixed w-full justify-between top-0 text-white">
      <section className="">
        <HiMenuAlt2  className= "text-4xl "/>
      </section>

      <section className="flex flex-col items-center">
          <span className="font-bold"> Jefana Stores</span>
          <span className='text-sm'> BY COMRULE</span>
          <span className=""> Hello</span>
        </section>

        <section>
         <Link to="/cart">< GiShoppingBag className="text-4xl"/> </Link>
        </section>
      </nav>
   )
}