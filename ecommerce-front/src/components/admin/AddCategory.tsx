import React, { useState, useEffect } from 'react'
import { Form, Input, Button, message } from 'antd'
import axios from 'axios'
import { API } from '../../config'
import { Link } from 'react-router-dom'
import Layout from '../core/Layout'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'

const AddCategory = () => {

  const [name, setName] = useState<string>('')
  const { user, token } = isAuth() as Jwt

  useEffect(() => {
    async function addCategory() {
      try {
        let response = await axios.post<{ name: string }>(
          `${API}/category/create/${user._id}`,
          {
            name: name
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        message.success(`[${response.data.name}] 分类添加成功`, 2)
      } catch (error) {
        message.error(error.response.data.error, 2)
      }
    }
    if (name) {
      addCategory()
    }
  }, [name]) // 当提交表单 name 就会发生变化 然后触发useEffect 

  const onFinish = (value: { name: string }) => {
    setName(value.name)
  }
  return (
    <div>
      <Layout title='添加分类' subTitle=''>
        <Form onFinish={onFinish}>
          <Form.Item name='name' label='分类名称'>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              添加分类
            </Button>
          </Form.Item>
        </Form>
        <Button>
          <Link to='/admin/dashboard'>返回Dashboard</Link>
        </Button>
      </Layout>
    </div>
  )
}

export default AddCategory
