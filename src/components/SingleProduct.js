import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from "react";

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const params =  useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res => res.json())
        .then(product => {
            setProduct(product);
        })
    }, [params.id]);
    
    return (
            <>
                <div className="container mx-auto mt-12">
                    <button className="mb-12 font-bold" onClick={ () => { history.goBack() } } >Back</button>
                    <div className="flex">
                        <img src={ product.image } alt="pizza" />
                        <div className="ml-16">
                            <h1 className="text-xl font-bold">{ product.title }</h1>
                            <div className="text-md">{ product.category }</div>
                            <div className="text-md">{ product.description }</div>
                            <div className="font-bold mt-2">₹ { product.price }</div>
                            <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }

export default SingleProduct