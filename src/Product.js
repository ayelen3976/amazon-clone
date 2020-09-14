import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider'
import {AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial,} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
 
function Product({id, title, image, price, rating}){
const [{basket}, dispatch] = useStateValue();
 console.log('this is the basket', basket)
    const addToBasket=()=>{
        //dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        })
    }
    return (
     <div className="product">
      <div className="product_info">
          <p className='product_price'>{title}</p>
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='product_rating' >
              {Array(rating)
              .fill()
              .map((_, i)=>(
              <p key={i}>🌟</p>
              ))}
       </div>
       </div>
     
      <img src={image} alt=''/>
       <AwesomeButtonProgress  type="secondary" size="medium" 
       action={(element, next)=> addToBasket(element)} >
           Add to Basket</AwesomeButtonProgress> 
      {/* <button onClick={addToBasket}>Add to Basket</button> */}
      </div>
    )
 }
 export default Product;  