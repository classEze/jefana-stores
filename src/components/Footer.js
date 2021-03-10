import React from 'react'
import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineWhatsApp,AiOutlineTwitter} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Footer = () => {
 const socialMedia = useSelector(state=>state.dataStore.data ? state.dataStore.data.socialMedia : {})

     return (
          <div className="lg:fixed bg-primary h-10 bottom-0 flex w-full items-start text-white text-xl justify-between">
               <section className="ml-4">
                  <Link to="/about"> About us </Link>
               </section>
               <section className="mr-4 flex icons">
                {socialMedia.instagram && <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" > <AiOutlineInstagram className="cursor-pointer" /></a> }
                {socialMedia.facebook && <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">  <AiOutlineFacebook className="cursor-pointer" /></a> }
                {socialMedia.twitter && <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer"> <AiOutlineTwitter className="cursor-pointer" /></a> }
                {socialMedia.whatsapp && <a href={socialMedia.whatsapp} target="_blank" rel="noopener noreferrer"> <AiOutlineWhatsApp className="cursor-pointer" /></a> }

               </section>
               
          </div>
     )
}

export default Footer
