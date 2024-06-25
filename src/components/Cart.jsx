import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { useEffect } from 'react'
import { setTotal } from '../features/ProductSlicer'; 
const Cart = () => {
    const {cart,total} = useSelector(state=>state.products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTotal());
      }, [cart, dispatch]);
  return (
    <div className="container-fluid overflow-hidden" >
    <div className="row justify-content-center mt-4" >
        <div className="h2 m-0 mt-4 ms-5">Honey Mobiles</div>
        <div className="col-md-9" style={{backgroundColor:'none'}}>
            <div className="container">              
               {
                    cart.length > 0 ? (
                        cart.map((item, index) => <CartItem product={item} key={index} />)
                    ) : (
                        <p className="h6 m-0 mt-4 ms-5">!!!OOPS, no items in the cart please select an items</p>
                    )
                }
                
            </div>
        </div>

        <div className="col-md-3  d-sm-flex justify-content-sm-center align-self-sm-start" >
            
            <div className="card  mt-2 pt-2" style={{ maxWidth: '18rem'}}>
                <div className="card-header  text-center">Sub Total</div>
                <div className="card-body">
                <h5 className="card-title text-center">{total}</h5>
                    <div className="col-12 text-center">
                    <button className="btn btn-warning px-lg-5 " >Proceed To Pay</button>
                    </div>
                    <p className="card-text mt-2">Your order qualifies for EMI with valid credit cards.</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Cart