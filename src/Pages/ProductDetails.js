import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const params = useParams()

  console.log(params.ProductId);

  return (
    <div>ProductDetails
       <p>{params.ProductId}</p>
    </div>
  )
}

export default ProductDetails