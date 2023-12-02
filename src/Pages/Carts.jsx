import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeFromCart,emptyCart } from '../Slice/cartSlice'

function Carts() {
  const cartArray= useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0) 
  const navigate = useNavigate()

  const getCartTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }

const handleCart = ()=>{
  dispatch(emptyCart())
  alert(" order successfully completed !")
  navigate('/')
}

  useEffect(()=>{
    getCartTotal()
  },[cartArray])
  return (
    <div className='container' style={{margin:'100px'}}>
    
    { cartArray.length>0?
     <div className='row mt-5'>
       <div className='col-lg-7'>
         <table className='table shadow border'>
           <thead>
             <tr>
               <th>#</th>
               <th>Product Name</th>
               <th>Image</th>
               <th>Price</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody>
             {
              cartArray.map((product,index)=>(
                 <tr key={index}>
                   <td>{index+1}</td>
                   <td>{product.title}</td>
                   <td><img width={'100px'} height={'100px'} src={product.image}/></td>
                   <td>${product.price}</td>
                   <td><button onClick={()=>dispatch(removeFromCart(product.id))}  className='btn'><i className="fa-solid fa-trash text-danger fa-2x"></i></button></td>

                 </tr>))
               }
           </tbody>

         </table>
         </div>
         <div className='col-lg-1'></div>
         <div className='col-lg-3'>
           <h1 className='text-primary'>Cart Summary</h1>
           <div className="border mt-5 p-3 rounded shadow">
             <h4 className='mt-3'>Total Product : <span>{cartArray.length}</span></h4>
             <h4 >Total:<span className='text-danger fw-bolder fs-2'>${total}</span></h4>
             <div className='d-grid'>
               <button onClick={()=>handleCart()}  className='btn btn-success mt-5 rounded'>Check Out</button>

             </div>
           </div>
         </div>
         
     </div>
    
     
     : <div  style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
             <img height={'250px'} src='https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif' alt=''/>
             <h3 className='fw-bolder mt-5 mb-5'>Your Cart  Is Empty</h3>
             <Link style={{textDecoration:'none'}} className='btn btn-success rounded mb-3' to={'/'}>Back To Home</Link>
           </div>
           }
    
     
   </div>
  )
}

export default Carts