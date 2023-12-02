import React from 'react'
import { Card,Button,Row,Col } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart  } from '../Slice/cartSlice'
import { removeFromWishlist } from '../Slice/wishSlice'


function WishList() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart =(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <div style={{marginTop:'100px'}}>
    <Row className='ms-5'>
         
          { wishlistArray.length>0?
          wishlistArray.map((product,index)=>(
            <Col  key={index} className='mb-5' sm={12} md={16} lg={4} xl={3}>
    <Card className='shadow rounded' style={{ width: '18rem',height:'29rem' }}>
    <Card.Img variant="top" height={'200px'} src={product.image}/>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
        <p>{product?.description.slice(0,55)}...</p>
        <h5 className='fw-bolder'>${product.price}</h5>
      </Card.Text>
      <div className='d-flex justify-content-between'>
        <Button onClick={()=>dispatch(removeFromWishlist(product.id))}   className='btn btn-light'><i className="fa-solid fa-trash text-danger fa-2x"></i></Button>
        <Button onClick={()=>handleWishlistCart(product)}  className='btn btn-light'><i className="fa-solid fa-cart-plus text-success fa-2x"></i></Button>
      </div>
    </Card.Body>
  </Card>

    </Col> )):

          <div  style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img height={'250px'} src='https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif' alt=''/>
            <h3 className='fw-bolder mt-5 mb-5'>Your Wish List Is Empty</h3>
            <Link style={{textDecoration:'none'}} className='btn btn-success rounded mb-3' to={'/'}>Back To Home</Link>
          </div>}
       
    </Row>
  </div>
  )
}

export default WishList