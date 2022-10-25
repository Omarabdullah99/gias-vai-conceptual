import { error } from 'daisyui/src/colors';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))

  }
    return (
        <div>
        <div className="navbar bg-neutral text-neutral-content">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Awsome Auth</Link>
        <Link   className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        
        {
          user?.uid ?
          <>
          <h1>{user?.email}</h1>
          <button onClick={handleLogOut} >Logout</button>
          </>
          :
          <>
          <Link   className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
          <Link   className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
          </>

        }
      </div>
        </div>
    );
};

export default Header;