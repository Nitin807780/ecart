import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { addCart } from "../redux/action/index";
import { useDispatch } from "react-redux";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const Loading = () => (
    <div className="row">
      <div className="col-md-6">
        <Skeleton height={400} />
      </div>
      <div className="col-md-6" style={{ lineHeight: 2 }}>
        <Skeleton height={50} width={300} />
        <Skeleton height={75} />
        <Skeleton height={25} width={150} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={50} width={100} />
        <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} alt={product.title} height="400px" width="400px" />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating {product.rating?.rate} <span className="text-warning">★</span>
        </p>
        <h3 className="fw-bold my-4 display-6">${product.price}</h3>
        <p className="lead">{product.description}</p>
        <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>
          Add To Cart
        </button>
        <Link to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">
          Go To Cart
        </Link>
      </div>
    </div>
  );

  return (
    <div className="container py-4">
      <div className="row py-5">{loading ? <Loading /> : product ? <ShowProduct /> : <p>Product not found</p>}</div>
    </div>
  );
}




