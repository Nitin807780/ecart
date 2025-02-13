import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

export default function Home() {
    var [data, setData] = useState([]);
    var [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios({
            method: "get",
            url: `https://fakestoreapi.com/products`
        }).then((res) => {
            console.log(res.data);
            setData(res.data);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            console.log("Complete");
        });
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={300} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={250} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={150} />
                </div>
            </>
        );
    }

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="asserts/images/1.jpg" className="d-block w-100" alt="..." height='500px' width='100%' />
                    </div>
                    <div className="carousel-item">
                        <img src="asserts/images/2.jpg" className="d-block w-100" alt="..." height='500px' width='100%' />
                    </div>
                    <div className="carousel-item">
                        <img src="asserts/images/3.jpg" className="d-block w-100" alt="..." height='500px' width='100%' />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container">
                <h1 className='text-center display-6 py-3 my-3'>Latest Products</h1>
                <hr />
                <div className="row">
                    {
                        data.map((product) => {
                            return (
                                <div key={product.id} className="col-xxl-4 col-lg-3 col-md-4 col-4 col-12 mb-4">
                                    <div className="card h-100 text-center p-4">
                                        <img src={product.image} className="card-img-top" alt="..." height='200px' width='100%' />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title.slice(0, 10)}</h5>
                                            <h5 className="card-title">${product.price}</h5>
                                            <p className="card-text">{product.description.slice(0, 30) + "...."}</p>
                                            <Link to={`/product/${product.id}`} className="btn btn-sm w-100 mb-3 btn-outline-dark">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="row justify-content-center">
                    {
                        loading ? <Loading /> : null
                    }
                </div>
            </div>
        </>
    );
}
