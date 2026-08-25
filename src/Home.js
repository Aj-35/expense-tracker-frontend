import React from 'react'
import {Link} from 'react-router-dom'

const Home = ({handleAdd, handleminus, count}) => {
  return (
    <div>
        <header>
        <Link to="/login"><button>Login</button> </Link>
        </header>
        <header className="App-header">
        <p>You clicker {count} times</p>

        <div className='container'>
          <input type='text' placeholder='Enter your Expense'></input>
          <button>Add</button>
        </div>
        <div className='container'>
          <p>expense 1</p> 
          <button onClick={handleAdd}>+</button>
          <button onClick={handleminus}> - </button>
        </div>


      </header>
    </div>
  )
}

export default Home