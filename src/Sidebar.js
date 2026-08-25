import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = ({isOpen , togglesidebar}) => {


    
  return (
    <>    
    <button onClick={togglesidebar} className='toggle-btn'>
            {isOpen ? 'Close' : 'Open'} Sidebar
    </button>
    
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        
        <nav>
            <ul>
                <li><Link to="/"><button> Home </button> </Link></li>
                <li><Link to = '/dashboard'><button> DashBoard </button></Link></li>
                <li><Link to = '/transactions'><button> Transactions </button></Link></li>
                <li><Link to = '/reports'><button> Reports </button></Link></li>
                <li><Link to = '/budgets'><button> Budgets </button></Link></li>
                <li><Link to = '/settings'><button> Settings </button></Link></li>
            </ul>
        </nav>

    </div>
    </>

  )
}

export default Sidebar