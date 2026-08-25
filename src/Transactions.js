import React from 'react'
import { useState } from 'react'
import './Transactions.css'

const Transactions = ({amount,setAmount}) => {
    const[showForm,setShowForm] = useState(false)
    const[transactoinType,setTransactionType] = useState("expense")
    const[Category,setCategory] = useState("food")
    const[payment,setPayment] = useState("upi")
    const[decription,setDescription] = useState("")
    const[notes,setNotes] = useState("")

    const today = new Date()
    const dateString = today.toLocaleDateString();



  /* const transactionForm = () =>{

  } */
  return (
    <div>
        <h1>Transactions</h1>


        <button className='info-button' onClick={() => setShowForm(true)}>
          +
          <span className='tooltip'>Add a transaction</span>
        </button>


        
        {showForm &&(
          <div className='model-overlay'onClick={()=> setShowForm(false)}>
            <div className='transaction-overlay' onClick={(event) => event.stopPropagation()}>
              <button className='close-button' type='button' onClick={() => setShowForm(false)}>
                x
              </button>

            
        <form className='transaction-form' action="">
          <div className='type-toggle'>
            <label>
              <input 
                type="radio" 
                name = "transaction-type" 
                value="expense"
                checked = {transactoinType === "expense"}
                onChange={(event) => (setTransactionType(event.target.value))}
                defaultChecked
              />
              <span>Expense</span><br />
            </label>

            <label>
              <input
               type="radio"
               name = "transaction-type"
               value="income"
               checked = {transactoinType === "income"}
               onChange={(event) => setTransactionType(event.target.value)}
              />
              <span>Income</span>
            </label>
          </div>

          <div className='form-grid'>
          <label className='form-field'>
            Amount
            <input 
              type="text" 
              placeholder='0.00'
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
 
            />
          </label>
          
          <label className='form-field'>
            Category
            <select name="expense-options" id="expense-options"
              value={Category} onChange={(event) => setCategory(event.target.value)} 
            >
              <option value="food">Food</option>
              <option value="rent">Rent</option>
              <option value="bills">Bills</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className='form-field'>
            Date
            {/* <input type="date" /> */}
            {dateString}
          </label>

          <label className='form-field'>
            Payment Method
            <select name="payment-methods" id="payment-methods"
              value={payment} onChange={(event) => setPayment(event.target.value)}
            >
              <option value="upi">UPI</option>
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>d
              <option value="cash">Cash</option>
            </select>
          </label>
          </div>

          <label className='form-field'>
            Description
            <input type="text" placeholder='e.g. Monthly grocery shopping'
            value={description}
            onChange={(event) => setDescription(event.target.value)}/>
          </label>

          <label className='form-field'>
            Notes <span>(optional)</span>
            <textarea placeholder='Add any extra details' rows="3"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            >

            </textarea>
          </label>

          <div className='form-actions'> 
            <button type='button' className='cancel-button' onClick={() => setShowForm(false)}>
              Cancel
            </button>

            <button type='submit' className='save-button'>
              Save Transaction
            </button>
          </div>

          
        </form>
        </div>
        </div>
        )}
        
    </div>
  )
}

export default Transactions