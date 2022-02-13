import React from 'react'

function Card({ product }) {
  console.log(product.meta.banners)
  return (
    <div className='col-md-3 my-2 equal'>
      <div
        className='card shadow-sm position-relative'
        style={{ width: '18rem' }}
      >
        <div className='container' style={{ padding: 0 }}>
          <div className='row'>
            <img
              src={product.meta.banners[0].url}
              alt=''
              style={{ objectFit: 'cover', height: '160px' }}
            />
          </div>
        </div>

        <div
          className='card-logo'
          style={{ position: 'absolute', top: '112px' }}
        >
          <img src={product.meta.logo.url} alt='img-fluid' />
        </div>

        <div className='card-body mt-5 cb'>
          <h5 className='card-title'>{product.meta.companyName}</h5>
          <p className='card-text'>
            <span>
              {product.addresses.map((address) => (
                <span className='me-2'>
                  {address.city}, {address.country}
                </span>
              ))}
            </span>
            <span className='mqty'> Min Qty {product.minOrderQty}</span>
          </p>
          <a href='#' className='btn btn-primary bottom-btn'>
            View Details
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
