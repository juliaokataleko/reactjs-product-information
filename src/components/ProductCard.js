import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function ProductCard(props) {

    return (
        <div className="border mb-4 roudend 
        overflow-hidden">
            <Link to={`/products/${props.product.id}`}>
                <div style={
                    {
                        'backgroundImage': `url('${props.product.images}')`
                    }
                } className="w-full h-64 bg-blue bg-cover">

                </div>
            </Link>

            <div className="p-3">

                <h3 className="font-bold text-xl mb-3">
                    <Link to={`/products/${props.product.id}`}>
                        {props.product.name}
                    </Link>
                </h3>

                <div className="font-bold mb-3">
                    $ {props.product.price}
                </div>

                <div>
                    {props.product.description}
                </div>

                <Link
                    className="bg-blue-500 text-white p-2 mt-3 flex justify-center"
                    to={`/products/${props.product.id}`}>
                    View
                </Link>

            </div>



        </div>
    )
}
