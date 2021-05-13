import { takeEvery, put } from 'redux-saga/effects'
import {
  SIGNIN,
  SigninAction,
  signinSuccess,
  signinFail,
  SIGNUP,
  SignupAction,
  signupSuccess,
  signupFail
} from '../actions/auth.actions'
import axios from 'axios'
import { API } from '../../config'


function* handleSignup(action: SignupAction) {
  debugger
  try {
    yield axios.post(`${API}/signup`, action.payload)
    debugger
    yield put(signupSuccess())
  } catch (error) {
    yield put(signupFail('报错了--error~~~~'))
  }
}
type responseType = {
  data: any
}
function* handleSignin(action: SigninAction) {
  try {
    let response: responseType = yield axios.post(`${API}/signin`, action.payload)
    localStorage.setItem('jwt', JSON.stringify(response.data))
    yield put(signinSuccess())
  } catch (error) {
    yield put(signinFail(error.response.data.error))
  }
}

export default function* authSaga() {
  // 注册
  yield takeEvery(SIGNUP, handleSignup)
  // 登录
  yield takeEvery(SIGNIN, handleSignin)
}