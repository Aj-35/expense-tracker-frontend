import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <header>
          <Link to='/'> <button>Home</button> </Link>
        </header>
        <input type="email" placeholder='Enter your E-mail'  /><br />
        <input type="text" placeholder='Enter your username' /><br />
        <input type="password" placeholder='Enter you Password' /><br />
        <button>Register</button>
    </div>
  )
}

export default Register