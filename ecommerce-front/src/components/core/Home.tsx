import React from 'react'
import Layout from './Layout'
import { useSelector } from 'react-redux'

const Home = () => {
  const state = useSelector(state => state)
  return <Layout title='LG商城' subTitle='挑选商品吧'>Home</Layout>
}
export default Home