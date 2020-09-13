import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal.js'
import CheckoutProduct from './CheckoutProduct.js'
import {useStateValue} from './StateProvider'
import FlipMove from 'react-flip-move';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function Checkout(){
  const[{basket, user}, dispatch] = useStateValue();
 return (
     <div className="checkout">
        <div className="checkout_left">
        <Carousel className='home__image'>
  <Carousel.Item  >
    <img
      className="d-block w-100"
      src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v1_es_US_1x._CB428993289_.jpg'
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
     src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_es_US_1x._CB432534552_.jpg'
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_es_US_2x._CB428980068_.jpg'
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
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