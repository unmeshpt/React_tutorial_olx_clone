import React,{useState, useContext}  from 'react';
import { FirebaseContext } from '../../store/Context';
import axios from "axios";

import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {

  const history=useHistory()
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const {firebase} = useContext(FirebaseContext)
  const handleSubmit = (e) => {
    
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
          history.push("/")
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input onChange={(e)=>setEmail(e.target.value)}
            value={email}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input onChange={(e)=>setPassword(e.target.value)}
            value={password}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
