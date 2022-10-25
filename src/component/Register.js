import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Register = () => {
  const {createUser}= useContext(AuthContext)
  const [error,setError]=useState('')
    const handleSubmit=(event)=>{
        event.preventDefault()
        const form= event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password,name)

        createUser(email,password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          setError('')
          form.reset()
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          setError(errorMessage)
          // ..
        });



        if(password.length <6){
          setError('passwored should be 6 charecter')
          return;
      }

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className='text-xl font-bold text-red-400'>{error}</p>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">

      <div className="form-control">
      <label className="label">
        <span className="label-text"> Name</span>
      </label>
      <input type="text" name='name' placeholder="user name" className="input input-bordered" required />
    </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text" >Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to='/login' className="label-text-alt link link-hover">Already have an account? </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;