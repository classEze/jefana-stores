import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineWhatsApp,AiOutlineTwitter} from 'react-icons/ai'
import {useSelector} from 'react-redux'


const About = ({history}) => {

     function closeModal(e) {
          if(e.target.classList.contains('drop-shadow'))
              history.push('/')
             }
          const contact = useSelector(state=>state.dataStore.data.contact)
          const socialMedia = useSelector(state=>state.dataStore.data.socialMedia)
 
     return (
          <div className="w-full h-full fixed top-0 z-10 bg-transparent drop-shadow" onClick={closeModal}>

          <section className="h-5/6 w-5/6 ml-20 mt-16 bg-white rounded-t-4xl">
               <nav className="flex justify-between items-center border-b-2">
                    <p></p>
                    <p className="text-xl py-2"> About us</p>
                    <p onClick = {()=>history.push('/')} className="mr-4 text-xl cursor-pointer"> X </p>
               </nav>
               <div id="body" className=" flex-col md:flex-row md:justify-between items-end">
                 <aside className="m-4"> 
                    {contact.email && <span className="flex items-center "> <AiOutlineMail className="mr-2"/> <p> {contact.email} </p> </span>} 
                    { contact.phoneNumber && <span className="flex  items-center"> <FiPhoneCall className="mr-2"/> <p> {contact.phoneNumber} </p> </span>} 
                    {contact.whatsapp && <span className="flex  items-center"> <AiOutlineWhatsApp className="mr-2"/> <p> {contact.whatsapp} </p> </span>} 
                 </aside>
                 <p className="mr-4 justify-center flex icons text-2xl">
                {socialMedia.instagram && <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" > <AiOutlineInstagram className="cursor-pointer" /></a> }
                {socialMedia.facebook && <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">  <AiOutlineFacebook className="cursor-pointer" /></a> }
                {socialMedia.twitter && <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer"> <AiOutlineTwitter className="cursor-pointer" /></a> }
                {socialMedia.whatsapp && <a href={socialMedia.whatsapp} target="_blank" rel="noopener noreferrer"> <AiOutlineWhatsApp className="cursor-pointer" /></a> }
               </p>
 

               </div>


          </section>
  
          </div>
     )
}

export default About
