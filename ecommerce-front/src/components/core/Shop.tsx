import React, { useState, useEffect } from 'react'
import { Button, Col, Empty, Row, Space } from "antd"
import { useSelector, useDispatch } from 'react-redux'
import Layout from './Layout'
import { filterProduct, filterProductSuccess } from '../../store/actions/product.actions'
import { AppState } from '../../store/reducers'
import { ProductState } from '../../store/reducers/product.reducer'
import ProductItem from './ProductItem'
import CheckBox from './CheckBox'
import RadioBox from './RadioBox'

const Shop = () => {

  const dispatch = useDispatch()

  const [skip, setSkip] = useState<number>(0)

  const product = useSelector<AppState, ProductState>(state => state.product)

  const [myFilters, setMyFilters] = useState<{
    category: string[]
    price: number[]
  }>({ category: [], price: [] })

  useEffect(() => {
    setSkip(0)
  }, [myFilters])

  useEffect(() => {
    dispatch(filterProduct({ filters: myFilters, skip }))
  }, [myFilters, skip])

  const filterDOM = () => {
    return (
      <Space size='middle' direction='vertical'>
        <CheckBox
          handleFilter={(filters: string[]) => {
            setMyFilters({ ...myFilters, category: filters })
          }}
        />
        <RadioBox
          handleFilter={(filters: number[]) => {
            setMyFilters({ ...myFilters, price: filters })
          }}
        />
      </Space>
    )
  }

  const productDOM = () => (
    <Row gutter={[16, 16]}>
      {
        product.filter.result.data.map(item => (
          <Col key={item._id} span='6'>
            <ProductItem product={item} />
          </Col>
        ))
      }
    </Row>
  )

  const loadMoreButton = () => {
    return (
      <Row>
        {
          product.filter.result.size >= 4 && (
            <Button onClick={loadMore}>加载更多</Button>
          )
        }
      </Row>
    )
  }
  const loadMore = () => {
    setSkip(skip + 4)
  }

  const noData = () => {
    return (
      <Row>{product.filter.result.size === 0 && <Empty />}</Row>
    )
  }

  return (
    <Layout title='LG商城购物车' subTitle='快来结账吧'>
      <Row>
        <Col span="4">
          {
            filterDOM()
          }
        </Col>
        <Col span='20'>
          {
            productDOM()
          }
          {
            loadMoreButton()
          }
          {
            noData()
          }
        </Col>
      </Row>
    </Layout>
  )
}
export default Shop