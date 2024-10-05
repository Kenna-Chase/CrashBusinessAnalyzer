import { createContext } from "react";

const DataEntryFormContext = createContext({});

export default DataEntryFormContext;

export const { Provider, Consumer } = DataEntryFormContext;
