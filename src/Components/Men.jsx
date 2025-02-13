import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';


export default function Men() {
  var[data,setData] = useState([])
  var[filter,setFilter] = useState([])
  var[loading,setLoading] = useState(false)

    useEffect(()=>
      {
      setLoading(true)
    axios({
        method:"get",
        url:`https://fakestoreapi.com/products`
      }).then((res)=>
      {
        console.log(res.data)
        setData(res.data)
        setFilter(res.data)
      }).catch((err)=>
      {
        console.log(err)
      }).finally(()=>setLoading(false))

    },[])


    const Loading = () =>

    {
      return(
        <>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={300}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={250}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={150}/>
        </div>
        </>
      )
    }
 const filterProduct = (cat)=>
 {
  let filtered = data.filter((x)=>x.category === cat)
  setFilter(filtered);
 }

 const ShowProducts = () => {
  return(
    <>
    <div className='button d-flex justify-content-center mb-5 pb-5'>

    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("electronics")}>Electronics</button>
    </div>
    {
      filter.map((product) => {
        return(
        <>
        <div className='col-md-3 mb-4'>
          <div className='card h-100 text-center p-4'>
            <img src={product.image} class='card-img-top' alt={product.title.slice(0,12)}
            height="200px" width="100%"/>
            <div className="card-body">
              <h5 class="card-title">{product.title.slice(0,12)}</h5>
              <p clas="card-text lead fw-bold">${product.price}.</p>
              <Link to={`/product/${product.id}`} class="btn btn-sm w-100 mb-3 btn-outline-dark">Buy Now</Link>
            </div>
            </div>
          </div>
          </>

        )
      })
    }
    </>
  )
}
return(
  <>
  <div className="container my-3 py-3">
    <div className="row">
      <div className="col-12 mb-0">
        <h1 className='display-6 fw-border text-center'>Latest Products</h1>
        <hr></hr>
      </div>
    </div>
    <div className="row justify-content-center">
      {loading ? <Loading/> : <ShowProducts/>}
    </div>
  </div>


  </>
)
}