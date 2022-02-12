import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/actions/productAction'
import Card from '../Card/Card'

const Product = () => {
  const dispatch = useDispatch()
  const { loading, products, error } = useSelector((state) => state.products)
  // console.log(products.result)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        products.result?.manufacturers.map((product) => (
          <Card product={product} />
        ))
      )}
    </div>
  )
}

export default Product
