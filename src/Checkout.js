import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal.js'
import CheckoutProduct from './CheckoutProduct.js'
import {useStateValue} from './StateProvider'
import FlipMove from 'react-flip-move';

function Checkout(){
  const[{basket, user}, dispatch] = useStateValue();
 return (
     <div className="checkout">
        <div className="checkout_left">
            <img className='checkout_add' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg' alt=''/>
          <div >
          <h3> {user ?  'Hello' + ' ' + user.email : '' } </h3>
           <h2 className='checkout_title'>Your shopping Basket</h2>
           <FlipMove enterAnimation="fade" leaveAnimation="fade" >
           {basket.map(item=>(
           <CheckoutProduct
           key={item.id}
           id={item.id}
           title={item.title}
           image={item.image}
           price={item.price}
           rating={item.rating}
           />
           ))}
           </FlipMove>
           </div>
        </div>
       <div className='checkout_right'>
        <Subtotal/>
         </div>
     </div>
 );
}
export default Checkout;