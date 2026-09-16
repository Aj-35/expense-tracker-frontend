import API from '../api/etapi'

export const getTransaction = () => API.get("/transactions")
export const addTransactionList = (transaction) => API.post("/transactions",transaction)
export const updateTransaction = (id,transaction) => API.put(`/transactions/${id}`,transaction)
export const deleteTransaction = (id) => API.delete(`/transactions/${id}`)