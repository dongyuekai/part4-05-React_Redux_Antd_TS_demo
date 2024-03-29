import { Form, Input, Button, Result } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetSignup, signup, SignupPayload } from '../../store/actions/auth.actions'
import Layout from './Layout'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducer'
import { Link } from 'react-router-dom'

function Signup() {

  const dispatch = useDispatch()

  const [form] = Form.useForm()

  // 从store中获取注册结果
  const auth = useSelector<AppState, AuthState>(state => state.auth)

  // 提交表单
  const onFinish = (value: SignupPayload) => {
    // 发送注册请求
    dispatch(signup(value))
  }

  // 1 注册成功 清空表单
  useEffect(() => {
    if (auth.signup.loaded && auth.signup.success) {
      form.resetFields()
    }
  }, [auth])
  // 2 注册成功 显示成功的提示信息
  const showSuccess = () => {
    if (auth.signup.loaded && auth.signup.success) {
      return (
        <Result
          status='success'
          title='注册成功'
          extra={[
            <Button>
              <Link to='/signin'>登录</Link>
            </Button>
          ]}
        />
      )
    }
  }
  // 3 注册失败 显示失败的提示信息
  const showError = () => {
    if (auth.signup.loaded && !auth.signup.success) {
      return (
        <Result
          status='warning'
          title='注册失败'
          subTitle={auth.signup.message}
        />
      )
    }
  }
  // 4 离开页面之前 重置状态
  useEffect(() => {
    return () => {
      dispatch(resetSignup())
    }
  }, [])


  const signUpForm = () => {
    return (
      <Form form={form} onFinish={onFinish}>
        <Form.Item name='name' label='昵称'>
          <Input />
        </Form.Item>
        <Form.Item name='password' label='密码'>
          <Input.Password />
        </Form.Item>
        <Form.Item name='email' label='邮箱'>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    )
  }

  return (
    <Layout title='注册' subTitle='还没有账号吗？注册一个吧'>
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  )
}

export default Signup


