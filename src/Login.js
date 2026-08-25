import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <header>
          <Link to='/'> <button>Home</button> </Link>
        </header>
        <input placeholder='Enter your E-mail'/><br />
        <input placeholder='Enter your Password' /><br />
        <button>Login</button>

        <p>Don't have a account</p><br />
        <Link to='/register'> <button>Register</button> </Link>
    </div>
  )
}

export default Login