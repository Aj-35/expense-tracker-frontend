import React from 'react'
import './Sidebar.css'
import {PieChart , Pie, Cell, Tooltip, Legend} from 'recharts'

const DashBoard = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString();

  const income = 50000
  const expense = 30000
  const balance = income - expense


  const pieData = [
  { name: 'Income', value: income },
  { name: 'Expense', value: expense },
  { name: 'Balance', value: balance },
  ];

  const COLORS = ['#635bff', '#f97316', '#10b981'];


  return (
     <div>
      <header>
        <h1>Today is {dateString}</h1>
      </header>
        <h1>DashBoard</h1>

      <div className='box'>
        Total Income 
        {income}
      </div>
      <div className='box'>
        Total Expense
        {expense}
      </div>
      <div className='box'>
        Balance
        {balance}
      </div>



      <PieChart width={400} height={400}>
        <Pie
          data={pieData}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>


      <h1>Recent Transactions</h1>
      
      
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Burger</td>
            <td>Food</td>
            <td>150</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default DashBoard
