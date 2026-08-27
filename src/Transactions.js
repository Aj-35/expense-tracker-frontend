import React from 'react'
import { useState, useEffect } from 'react'
import './Transactions.css'
import { addTransactionList, getTransaction } from './services/userservice'

const Transactions = () => {
    const[showForm,setShowForm] = useState(false)
    const[transactionType,setTransactionType] = useState("expense")
    const[amount,setAmount] = useState("")
    const[category,setCategory] = useState("food")
    const[date,setDate] = useState(new Date().toISOString().split("T")[0])
    const[payment,setPayment] = useState("upi")
    const[description,setDescription] = useState("")
    const[notes,setNotes] = useState("")

    const[transactions,setTransactions] = useState([])

    const handleTransaction = async () =>{
        const id = transactions.length ? transactions[transactions.length - 1].id + 1 : 1
        const addNewTransaction = {
          id,
          type : transactionType,
          amount,
          category,
          date,
          paymentMethod: payment,
          description,
          notes
        }

        const response = await addTransactionList(addNewTransaction)
        const transactionList = prev => ([...prev , response.data])
        setTransactions(transactionList)

    }

    useEffect(() => {fetchTransaction()},[])

    const fetchTransaction = async () => {
        const response = await getTransaction()
        setTransactions(response.data)
    }
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

            
        <form className='transaction-form' onSubmit={handleTransaction}>
          <div className='type-toggle'>
            <label>
              <input 
                type="radio" 
                name = "transaction-type" 
                value="expense"
                checked = {transactionType === "expense"}
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
               checked = {transactionType === "income"}
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
              required
 
            />
          </label>
          
          <label className='form-field'>
            Category
            <select name="expense-options" id="expense-options"
              value={category} onChange={(event) => setCategory(event.target.value)} 
            >
              <option value="food">Food</option>
              <option value="rent">Rent</option>
              <option value="bills">Bills</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className='form-field'>
            Date
            <input 
              type="date" 
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
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
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Payement Method</th>
              <th>Description</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.date}</td>
                <td>{transaction.paymentMethod}</td>
                <td>{transaction.description}</td>
                <td>{transaction.notes}</td>
              </tr>

            ))

            }
          </tbody>
        </table>
        
    </div>
  )
}

export default Transactions