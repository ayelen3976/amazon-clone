import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal.js'
function Checkout(){
 return (
     <div className="checkout">
        <div className="checkout_left">
            <img className='checkout_add' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg' alt=''/>
          <div className='checkout_title'>
           <h2>Your shopping Basket</h2>
            {/*basketitem*/}
            {/*basketitem*/}
            {/*basketitem*/}
            {/*basketitem*/}
            {/*basketitem*/}
          </div>
        </div>
       <div className='checkout_right'>
        <Subtotal/>
         </div>
     </div>
 );
}
export default Checkout;