import React, { useState, useEffect } from 'react';
import Product from './Product';
import { useParams } from 'react-router-dom';

const fetchProductsForCategory = (category) => {
    return [
        {
            id: 1,
            category: 'hoodies',
            name: 'Rossey Hoodie',
            price: 60.00,
            imageUrl: '/RR-React-B4E/b4e-store/public/mockups/hoodies/all-over-print-recycled-unisex-zip-hoodie-white-back-65ea6b98db90e.png',
        },
        {
            id: 2,
            category: 'hats',
            name: 'Rossey Bucket',
            price: 45.00,
            imageUrl: '/RR-React-B4E/b4e-store/public/mockups/hat/all-over-print-reversible-bucket-hat-white-back-inside-65ea59733a3d4.png',
        },
        {
            id: 3,
            category: 'joggers',
            name: 'Rossey Joggers',
            price: 50.00,
            imageUrl: '/RR-React-B4E/b4e-store/public/mockups/joggers/all-over-print-recycled-mens-joggers-white-right-65ea6b49b7a24.png'
        }
    ].filter(product => product.category === category);
};

function ProductList() {
    const { category } = useParams();
    const [products, setProducts] = useState([]); // Initialize products state

    useEffect(() => {
        const productsForCategory = fetchProductsForCategory(category);
        setProducts(productsForCategory);
    }, [category]);

    return (
        <div className={`product-list ${category}`}>
            {products.map(product => (
                <div key={product.id} className="product">
                    <img src={product.imageUrl} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
