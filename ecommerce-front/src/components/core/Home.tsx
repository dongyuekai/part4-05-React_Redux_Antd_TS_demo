import React from 'react'
import Layout from './Layout'
import { useSelector } from 'react-redux'

const Home = () => {
  const state = useSelector(state => state)
  console.log(state)
  return <Layout>Home:{JSON.stringify(state)}</Layout>
}
export default Home