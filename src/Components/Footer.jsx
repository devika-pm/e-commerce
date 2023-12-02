import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px',textDecoration:'none',color:'white'}} className='d-flex flex-column justify-content-center align-items-center bg-primary'>
    <div className='footer-div d-flex justify-content-evenly w-100 flex-wrap'>
      <div className="website" style={{width:'400px'}}>
      <h4><i className="fa-solid fa-cart-shopping me-2"></i> E cart</h4>
        <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
         <h6>Code licensed luminar, docs CC BY 3.0.</h6>
          <p>Currently v5.3.2.</p>
      </div>
      <div className="links d-flex flex-column">
        <h4>links</h4>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
        <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
        <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>

      </div>
      <div className="guides d-flex flex-column">
      <h4>guidess</h4>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>react</Link>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>router</Link>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>react-bootstrap</Link>

      </div>
      <div className="contact d-flex flex-column flex-wrap">
        <h4>contact us</h4>
        <div className="sub d-flex ">
          <input className='form-control dark' style={{textDecoration:'none',color:'white'}} placeholder='enter your email'/>
          <button className='btn btn-primary ms-3 border color-dark'><i className="fa-solid fa-arrow-right fa-beat-fade "></i></button>
        </div>
        <div className='icons  mt-3 fs-5 d-flex justify-content-evenly mt-3'>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter"></i></Link>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-envelope"></i></Link>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin"></i></Link>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-instagram"></i></Link>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-tiktok"></i></Link>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github"></i></Link>
        </div>
      </div>

    </div>
    <p>Copyright © 2023 media player. Built with react.</p>
  </div>
  )
}

export default Footer