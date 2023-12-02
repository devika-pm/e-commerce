import React, { useEffect, useState } from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Slice/cartSlice'
import { addToWishlist } from '../Slice/wishSlice'

function Home() {
  const[products,setProducts] = useState([])
 const dispatch = useDispatch();
 const [searchItem, setSearchItem] = useState("");


  useEffect(()=>{
   const fetchData = async()=>{
    try{
    const response = await axios.get('https://fakestoreapi.com/products');
    const filteredData = response.data.filter(item=>(
      (item.category === "men's clothing" || item.category === "women's clothing" ) && item.id !==1
    ));
    setProducts(filteredData) 
    }catch(error){
      console.error('Error fetching data:', error);
    }
   }
   fetchData()
   
  },[])

  const handleSearchItem = () => {
    const filteredData = products.filter(
      product => product.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setProducts(filteredData);
  };


  return (
  <>
  <div className='w-100 d-flexe justify content-between mb-5 mt-5'>
    <input style={{
        width:'450px'
        
    }} className='p-1 border border-dark rounded shadow' onChange={e => setSearchItem(e.target.value)}
    type='text' placeholder='Search '/><button  onClick={handleSearchItem} style={{width:'40px',height:'35px'}} className='border border-dark rounded shadow ms-2'><i className="fa-solid fa-magnifying-glass"></i></button>
  </div>
        <Row className='ms-5' style={{marginTop:'100px'}} >
        
       {products.length>0?products?.map((product,index)=>(
        <Col key={index} className='mb-5' sm={12} md={16} lg={4} xl={3}>
         <Card className='shadow rounded' style={{ width: '18rem',height:'29rem' }}>
         <Card.Img variant="top" height={'200px'} src={product?.image}/>
         <Card.Body>
           <Card.Title>{product?.title}</Card.Title>
           <Card.Text>
             <p>{product?.description.slice(0,55)}...</p>
             <h5 className='fw-bolder'>${product?.price}</h5>
           </Card.Text>
           <div className='d-flex justify-content-between'>
             <Button  onClick={() => dispatch(addToWishlist(product))} className='btn btn-light'><i className="fa-solid fa-heart text-warning fa-2x"></i></Button>
             <Button onClick={() => dispatch(addToCart(product))}  className='btn btn-light'><i className="fa-solid fa-cart-plus text-success fa-2x"></i></Button>
           </div>
         </Card.Body>
       </Card>
    
         </Col>)):<p>Nothing To Display</p>
         }
      
         
         
       </Row>
  </>
  )
}

export default Home