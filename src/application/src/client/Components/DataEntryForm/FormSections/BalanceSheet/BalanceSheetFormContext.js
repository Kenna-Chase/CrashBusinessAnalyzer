import { createContext } from "react";

const BalanceSheetFormContext = createContext({});

export default BalanceSheetFormContext;

export const { Provider, Consumer } = BalanceSheetFormContext;
