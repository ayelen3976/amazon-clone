import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider'
import {useHistory} from 'react-router-dom'
import {getBasketTotal} from './reducer.js'
import {AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial,} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";


function Subtotal(){
   const history= useHistory();
   const[{basket}, dispatch] = useStateValue();
   
 return(
     <div className="subtotal">
     <CurrencyFormat
      renderText={(value)=>(
        <>
       <p>
      Subtotal ({basket?.length} items): <strong>{value}</strong>
       </p>
       <small className='subtotal_gift'>
           <input type='checkbox'/>
           this order contain a gift
       </small>
       </>
       )}
    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={'text'}
    thousandSeparator={true}
    prefix={'$'}
     />
      {/* <AwesomeButtonProgress  type="secondary" size="medium" action={e=> history.push('/payment')} >proceed the checkout</AwesomeButtonProgress> */}
      <button onClick={e=> history.push('/payment')}>proceed the checkout</button> 
    
    </div>
 )
}
export default Subtotal;