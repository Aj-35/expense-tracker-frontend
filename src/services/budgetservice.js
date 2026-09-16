import API from "../api/etapi"

export const getBudget = () => API.get("/budgets")