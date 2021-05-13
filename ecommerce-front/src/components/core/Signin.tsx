import React from 'react'
import { Form, Input, Button } from 'antd'
import Layout from './Layout'

function Signin() {
  return (
    <Layout title='登录' subTitle='注册'>
      <Form>
        <Form.Item name='name' label='昵称'>
          <Input />
        </Form.Item>
        <Form.Item name='password' label='密码'>
          <Input.Password />
        </Form.Item>
        <Form.Item name='email' label='邮箱'>
          <Input />
        </Form.Item>
        <Form.Item name='e'>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default Signin
