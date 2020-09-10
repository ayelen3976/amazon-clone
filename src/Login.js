import React, {useState} from 'react';
import './Login.css';
import{Link, useHistory} from 'react-router-dom';
import { auth } from './firebase';
function Login(){
    const history = useHistory();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    const signIn = e =>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error => {alert(error.message)})
    }
    const register = e =>{
        e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
      .then((auth) =>{
          //it succesfully created a new user with email and password.
          console.log(auth);
          if(auth){
              history.push('/')
          }
      })
      .catch(error => {alert(error.message)})
    }
  return(
      <div className="login">
        <Link>
       <img className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
       </Link>
       <div className="login_container">
       <h1>Sing-In</h1>
       <form>
           <h5>E-mail</h5>
           <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
           <h5>Password</h5>
           <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
           <button type='submit' onClick={signIn}className='login_singInButton'>Sing In</button>
       </form>
       <p>
           By singing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interes-Based Ads Notice.
       </p>
       <button onClick={register} className='login_registerButton'>Create your account</button>
       </div>
   
      </div>
  )
}
export default Login;