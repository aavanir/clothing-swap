import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    return (
        <div>
            <h1>Product Details</h1>
            Now showing post {id}
        </div>
    );
}

export default Product;