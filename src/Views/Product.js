import React, { } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Loader from '../components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequests';

export default function Product() {
    const { id } = useParams();
    const url = "https://5f253814c85de20016292ef0.mockapi.io/api/v1/products/" + id;
    
    let product = useAxiosGet(url);

    let content = null;
   
    if(product.loading) {
        content = <Loader></Loader>
    }

    if(product.error) {
        content = <h1 className="font-bold text-center text-xl">Alguma coisa correu mal</h1>
    }
    
    if(product.data) {
    return (
        content = <div>
            <h1 className="text-2xl font-bold mb-3">{ product.data.name }</h1>
            <div>
                <img src={product.data.images}
                alt={product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    )
    } else {
        return (
            <div>
                {content}
            </div>
        )
    }
}
