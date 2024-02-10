import { createContext, useContext, useReducer } from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducers";

const storeContext = createContext();
const { Provider } = storeContext;

const StoreProvider = ({ value=[] }) => {
  const [state, dispatch] = useReducer(rootReducer, {
    character: []
  })

  return <Provider value={[state, dispatch]} {...props} />
};
const useStoreContext = () => {
  return useContext(storeContext);
}

export { StoreProvider, useStoreContext };
