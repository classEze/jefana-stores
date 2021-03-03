import React from 'react'

const Cart = ({history}) => {

     function closeModal(e) {
          if(e.target.classList.contains('drop-shadow'))
              history.push('/')
             }

     return (
<div className="w-full h-full fixed top-0 z-10 bg-transparent drop-shadow" onClick={closeModal}>

<section className="h-5/6 w-5/6 ml-20 mt-16 bg-white rounded-t-4xl flex flex-col" id="#cart">
     <div> No Items in your cart</div>
     <div className="flex-1"></div>
     <div> Start Shopping</div>

    </section>
      </div>  
         )
}

export default Cart
