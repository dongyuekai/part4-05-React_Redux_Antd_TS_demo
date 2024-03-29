import { combineReducers } from 'redux'
import authReducer, { AuthState } from './auth.reducer'
import categoryReducer, { CategoryState } from './category.reducer'
import productReducer, { ProductState } from './product.reducer'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

export interface AppState {
  router: RouterState,
  auth: AuthState,
  category: CategoryState,
  product: ProductState
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    category: categoryReducer,
    product: productReducer
  })
export default createRootReducer
