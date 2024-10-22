import { createContext } from "react";

const ExpensesFormContext = createContext({});

export default ExpensesFormContext;

export const { Provider, Consumer } = ExpensesFormContext;
