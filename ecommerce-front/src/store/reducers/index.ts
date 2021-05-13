import { combineReducers } from 'redux'
import testReducer from './test.reducer'
import authReducer, { AuthState } from './auth.reducer'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

export interface AppState {
  router: RouterState,
  auth: AuthState
}

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  test: testReducer,
  auth: authReducer,
})
export default createRootReducer
