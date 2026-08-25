import './App.css';
import { useState } from 'react';
import { Routes , Route} from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Sidebar from './Sidebar';
import DashBoard from './DashBoard';
import Budgets from './Budgets';
import Transactions from './Transactions';
import Reports from './Reports';
import Settings from './Settings';

function App() {

  const[count,setCount] = useState(0);
  const[amount,setAmount] = useState(0)

  //Sidebar
  const [isOpen,setIsOpen] = useState(false);
  const togglesidebar = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)

  const handleminus = () => {
    setCount(count - 1);
  }

  const handleAdd = () =>{
    setCount(count + 1);
  };

  return (
    <div className="App">
      
      <Sidebar isOpen={isOpen} closeSidebar = {closeSidebar} togglesidebar = {togglesidebar}/>

      <main className = 'content-area' onClick={closeSidebar}>
      <Routes>
        <Route path='/dashboard' element = {<DashBoard />}/>
        <Route path='/budgets' element = { <Budgets/>}/>
        <Route path='/transactions' element = {<Transactions amount = {amount} setAmount = {setAmount}/>}/>
        <Route path='/reports' element = {<Reports />}/>
        <Route path='/settings' element = {<Settings />}/>

        <Route path='/login' element = {<Login />}/> 
        <Route path='/'  element= {
          <Home
          handleminus = {handleminus}
          handleAdd = {handleAdd} 
          count = {count}
          />}/>

        <Route path='/register' element = {
          <Register/>
        }
        />
      </Routes>
      </main>



     
    </div>
  );
}

export default App;
