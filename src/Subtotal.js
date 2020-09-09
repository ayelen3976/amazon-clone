import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider'

function Subtotal(){
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
    value={basket?.reduce((a, b) => a + b.price, 0)}
    displayType={'text'}
    thousandSeparator={true}
    prefix={'$'}
     />
     <button>proceed the checkout</button>
    
    </div>
 )
}
export default Subtotal;