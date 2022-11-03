import React, {useState, useContext} from 'react';


import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const history=useHistory()
  const [username, setUsername]=useState('')
  const [email, setEmail]=useState('')
  const [phone, setPhone]=useState('')
  const [password, setPassword]=useState('')
  const {firebase} = useContext(FirebaseContext)

  const handleSubmit= (e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
      result.user.updateProfile({displayName:username}).then (()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          history.push("/login")
        })
      })
    }).catch((err)=>{
      alert(err)
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input onChange={(e)=>setUsername(e.target.value)}
            className="input"
            value = {username}
            type="text"
            id="fname"
            name="name"
            defaultValue="Username"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input onChange={(e)=>setEmail(e.target.value)}
            className="input"
            value={email}
            type="email"
            id="fname"
            name="email"
            defaultValue="Email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input  onChange={(e)=>setPhone(e.target.value)}
            value={phone}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Phone Number"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input  onChange={(e)=>setPassword(e.target.value)}
            value={password}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
