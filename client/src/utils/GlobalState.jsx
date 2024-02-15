import { createContext, useContext, useReducer } from "react";
import rootReducer from "./reducers/reducers";

const storeContext = createContext();
const { Provider } = storeContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(rootReducer, {
    characters: [],
    user: {},
  });

  return <Provider value={[state, dispatch]} {...props} />;
};
const useStoreContext = () => {
  return useContext(storeContext);
};

export { StoreProvider, useStoreContext };
