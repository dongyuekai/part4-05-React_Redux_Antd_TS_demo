import { Form, Input, Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { signup, SignupPayload } from '../../store/actions/auth.actions'
import Layout from './Layout'

function Signup() {
  const dispatch = useDispatch()
  const onFinish = (value: SignupPayload) => {
    console.log('dyk---', value)
    dispatch(signup(value))
  }
  return (
    <Layout title='注册' subTitle='注册'>
      <Form onFinish={onFinish}>
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
    </Layout>
  )
}

export default Signup


