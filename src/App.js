import React, {useEffect} from 'react';
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
import Login from './Login.js'
import Payment from './Payment.js'
import Orders from './Orders.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {auth} from './firebase';
import {useStateValue} from './StateProvider'; 
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HQ2BMGy8mg5bsSgU9YA0dPJKyBXpeYIer8swKXQOzPi085cqPGl1BuLQMznSQvSUO75mEVH4gVqahKr5MaPkOn600OgIK8DJJ');


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // I only run once then the app component loads...
   auth.onAuthStateChanged(authUser => {
     console.log('THE USER IS >>>', authUser);
     if (authUser) {
       //the user just logged in / the user was logged in 
       dispatch({
         type:'SET_USER',
         user: authUser
       })
     }else{
       //the user is logged out
       dispatch({
         type:'SET_USER',
         user: null
       })
     }
   })
  }, [])
  return (
<Router>
<div className="App">
<Switch>
    <Route path="/orders">
      <Header/>
      <Orders/>
    </Route>

    <Route path="/login">
      <Login/>
    </Route>

    <Route path="/checkout">
      <Header/>
      <Checkout/>
    </Route>
        
    <Route path="/payment">
      <Header/>
      <Elements stripe={promise}>  
      <Payment/>
      </Elements>
     
      </Route>

    <Route path="/">
      <Header/>
      <Home/>
    </Route>

</Switch>
</div>
</Router>
  );
}

export default App;
