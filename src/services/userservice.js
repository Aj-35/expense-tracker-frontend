import API from '../api/transactions'

export const getTransaction = () => API.get("/transactions")
export const addTransactionList = (transaction) => API.post("/transactoins",transaction)