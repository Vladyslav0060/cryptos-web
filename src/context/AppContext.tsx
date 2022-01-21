// import {
//   productReducer,
//   shoppingCartReducer,
//   ProductActions,
//   ShoppingCartActions,
// } from "../reducers/reducer";

// type ProductType = {
//   id: number;
//   name: string;
//   price: number;
// };

// type InitialStateType = {
//   products: ProductType[];
//   shoppingCart: number;
// };

// const initialState = {
//   products: [],
//   shoppingCart: 0,
// };

// const AppContext = createContext<{
//   state: InitialStateType;
//   dispatch: Dispatch<ProductActions | ShoppingCartActions>;
// }>({
//   state: initialState,
//   dispatch: () => null,
// });

// const mainReducer = (
//   { products, shoppingCart }: InitialStateType,
//   action: ProductActions | ShoppingCartActions
// ) => ({
//   products: productReducer(products, action),
//   shoppingCart: shoppingCartReducer(shoppingCart, action),
// });

// const AppProvider: React.FC = ({ children }) => {
//   const [state, dispatch] = useReducer(mainReducer, initialState);
//   return (
//     <AppContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export { AppProvider, AppContext };
import React, { createContext, useReducer, Dispatch } from "react";
import {
  AppReducer,
  AppActions,
  ISymbols,
  initStateType,
} from "../reducers/AppReducer";
const initState = {
  symbols: [],
  isContactModalOpen: false,
};
export const AppContext = createContext<{
  state: initStateType;
  dispatch: Dispatch<AppActions>;
}>({ state: initState, dispatch: () => null });
export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
