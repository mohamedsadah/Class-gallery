import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase/config';
import { NavLink, useNavigate } from 'react-router-dom'
import { useRef } from 'react';

const inputRef = useRef;

 
const Login = () => {


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/Home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Invalid username or password");

        });
       
    }

  return (
    <div className="background hero min-h-screen h-14 bg-gradient-to-r from-purple-500 to-pink-500">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-slate-50">UniGallery</h1>
      <p className="py-6 text-slate-50 text-xl">Login with University ID</p>
    </div>
    <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text mt-4 font-bold text-secondary text-2xl mb-5">University Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered " 
          onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text mt-4 font-bold text-secondary text-2xl mb-5">University-ID</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered border-solid"  onChange={(e)=>setPassword(e.target.value)}/>
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={onLogin}>Login</button>
        </div>
      
      </div>
    </div>
  </div>
</div>
  )
  }

export default Login