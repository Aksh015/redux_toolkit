import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {remove} from "../store/cartSlice"
function Cart() {
  const dispatch = useDispatch()
  const products= useSelector(state=>state.cart)
  function handleRemove(id){
    dispatch(remove(id))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cardWrapper'>
        {
          products.map(product=>{
            return (
              <div className='cartCard'>
                <img src={product.image} alt='unable to fetch'></img>
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart