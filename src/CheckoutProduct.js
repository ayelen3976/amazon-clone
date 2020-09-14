import React,{ forwardRef } from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider'
import {AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial,} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
 

const CheckoutProduct = forwardRef(({id, image, title, price, rating, hideButton }, ref)=>{
const [{basket}, dispatch] = useStateValue();
const removeFromBasket = ()=> {
    dispatch({
     type: 'REMOVE_FROM_BASKET',
     id:id,
    })

}
  return(
     <div ref={ref} className="checkoutProduct">
    
      <img className="checkoutProduct_image" src={image} alt=''/>
   <div className="checkoutProduct_info">
       <p className="checkoutProduct_title">{title}</p>
       <p className="checkoutProduct_price">
           <small>$</small>
           <strong>{price}</strong>
       </p>
    <div className="checkoutProduct_rating" >
        {Array(rating)
        .fill()
        .map((_, i)=>(
        <p key={i}> 🌟</p>
        ))}
    </div>
    {!hideButton && (
           //<button onClick={removeFromBasket}>Remove from Basket</button>
        <AwesomeButton  type="secondary" size="medium" action={removeFromBasket} >Remove from Basket</AwesomeButton>
    )}
   </div>
  
  </div>
  );
}
)
export default CheckoutProduct;
