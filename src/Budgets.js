import React, { useEffect, useRef, useState } from 'react'
import {getTransaction} from "./services/trancservice"

const Budgets = ({amount}) => {

  const [foodBudget,setFoodBudget] = useState('');
  const [rentBudget,setRentBudget] = useState('');
  const [billsBudget,setBillsBudget] = useState('')


  const [transactions,setTransactions] = useState([])
  const inputref = useRef(null)

  useEffect(() => {
    const fetchTransaction =async () =>{
      const response = await getTransaction()
      setTransactions(response.data)
    }

    fetchTransaction()
  },[])

  const handleBudget = (event) => {

  }


  const categoryTotals = transactions
  .filter((transaction) => transaction.type === "expense")
  .reduce((totals,transaction) => {
    const category = transaction.category
    const amount = Number(transaction.amount)

    totals[category] = (totals[category] || 0) + amount

    return totals;
  },{})


  const handleKeyDown = (event) => {
    if(event.key === "Enter"){
      event.preventDefault()
      setFoodBudget(inputref.current.value)
      setBillsBudget(inputref.current.value)
      setRentBudget(inputref.current.value)
    }
  }

  return (
    <div>
        <h1>Budgets</h1>
        <p>
          <span>Food</span>
          <p>{categoryTotals.food} / {foodBudget}</p>
        </p>

        <form onSubmit={handleBudget}>
          <button>Edit Budget</button>
          <label>
            <input 
              type="number" 
              placeholder='Enter Food Budget' 
              value={foodBudget}
              onChange={(event) => setFoodBudget(event.target.value)}
            />
          </label>
          
          <label>
            <input 
              type="number"
              placeholder='Enter Bills Budget'
              value={billsBudget}
              onChange={(event) => setBillsBudget(event.target.value)}
            />
          </label>
          
          <label>
            <input 
              type="number"
              placeholder='Enter Rent Budget'
              value={rentBudget}
              onChange={(event) => setRentBudget(event.target.value)} 
            />
          </label>

          <button type='submit'>Save</button>
        </form>

        {foodBudget}
        {rentBudget}
        {billsBudget}
        {/* <button onClick={() => handleSubmit()}>Submit</button> */}
    </div>
  )
}

export default Budgets