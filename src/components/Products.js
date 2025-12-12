import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch ,useSelector } from 'react-redux'
import { STATUSES } from '../store/productSlice';
import { fetchProducts } from '../store/productSlice';

function Products() {
  const dispatch = useDispatch()
  const {data,status} = useSelector(state=>state.product)
  // const [products,setProducts] = useState([])
 
  useEffect(()=>{
    dispatch(fetchProducts())
    // const fetchProducts = async ()=>{
    //     const res = await fetch('https://fakestoreapi.com/products')
    //     const data = await res.json()
    //     console.log(data)
    //     setProducts(data)
    // }
    // fetchProducts()
  },[])
  // []==>on mount only
  function handleAdd(product){
    dispatch(add(product))
  }
  if (status === STATUSES.LOADING)  return <h2>Loading....</h2>;
  if (status === STATUSES.ERROR) return <h2>Something went wrong!</h2>;
    
  return (
    <div className='productsWrapper'>
        {
          data.map(product=>{
              return (
                <div className='card' key={product.id}>
                    <img src={product.image} alt="unable to fetch"></img>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className="btn" onClick={()=>{handleAdd(product)}}>
                        Add to cart
                    </button> 
                </div>
              )
          })
        }
    </div>
  )
}

export default Products