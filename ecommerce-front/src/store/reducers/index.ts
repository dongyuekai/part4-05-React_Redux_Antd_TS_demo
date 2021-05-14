import { combineReducers } from 'redux'
import testReducer from './test.reducer'
import authReducer, { AuthState } from './auth.reducer'
import categoryReducer, { CategoryState } from './category.reducer'
// import { ProductState } from './product.reducer'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

export interface AppState {
  router: RouterState,
  auth: AuthState,
  category: CategoryState,
  // product: ProductState
}

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  test: testReducer,
  auth: authReducer,
  category: categoryReducer,

})
export default createRootReducer
