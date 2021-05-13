import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const Shop = () => {
  const state = useSelector(state => state)
  return <Layout title='LG商城购物车' subTitle='快来结账吧'>Home:{JSON.stringify(state)}</Layout>
}
export default Shop