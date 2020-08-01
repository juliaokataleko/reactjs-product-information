import React, { } from 'react'

import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequests';

export default function Home() {

    const url = "https://5f253814c85de20016292ef0.mockapi.io/api/v1/products?page=1&limit=5";
    
    let products = useAxiosGet(url);

    let content = null;

    if (products.loading) {
        content = <Loader></Loader>
    }

    if (products.error) {
        content = <h1 className="font-bold text-center text-xl">Alguma coisa correu mal</h1>
    }

    if (products.data) {

        content = products.data.map((product, key) => 
        <div key={product.id}>
            <ProductCard product={product} />
        </div>
        )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>

            {content}
        </div>
    )


}
