import React from 'react'
import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineWhatsApp,AiOutlineTwitter} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Footer = () => {
     return (
          <div className="lg:fixed bg-primary h-10 bottom-0 flex w-full items-start text-white text-xl justify-between">
               <section className="ml-4">
                  <Link to="/about"> About us </Link>
               </section>
               <section className="mr-4 flex icons">
                <AiOutlineInstagram />
                <AiOutlineTwitter />
                <AiOutlineFacebook />
                <AiOutlineWhatsApp />
               </section>
               
          </div>
     )
}

export default Footer
