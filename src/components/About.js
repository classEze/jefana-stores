import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineWhatsApp,AiOutlineTwitter} from 'react-icons/ai'


const About = ({history}) => {

     function closeModal(e) {
          if(e.target.classList.contains('drop-shadow'))
              history.push('/')
             }
 
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
                     <span className="flex items-center "> <AiOutlineMail className="mr-2"/> <p> umuebuike@gmail.com </p> </span>
                    <span className="flex  items-center"> <FiPhoneCall className="mr-2"/> <p> +2347039601940 </p> </span>
                 </aside>
                 <p className="mr-4 justify-center flex icons text-2xl">
                <AiOutlineInstagram className="cursor-pointer" />
                <AiOutlineTwitter className="cursor-pointer"/>
                <AiOutlineFacebook className="cursor-pointer"/>
                <AiOutlineWhatsApp className="cursor-pointer"/>
               </p>
 

               </div>


          </section>
  
          </div>
     )
}

export default About
