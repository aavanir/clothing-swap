import React, { useState, useEffect } from 'react';
import Register from "../components/HomePage/Register";
import Login from '../components/HomePage/Login';
import Listing from '../components/SellPage/Listing';
import { useAuth } from '../components/HomePage/Auth';


function Home() {
    const { isAuthenticated } = useAuth();
    const [showLogin, setShowLogin] = useState(true);
    const [items, setItems] = useState([]);
    //sample data
    useEffect(() => {
        const sampleItems = [
            {
                id: 1,
                title: 'Vintage Jacket',
                description: 'A stylish vintage jacket perfect for any occasion.',
                price: 50,
                image: 'https://cdn-images.farfetch-contents.com/palm-angels-logo-vintage-leather-jacket_19258067_42106182_2048.jpg',
                category: 'Jackets',
                isSwap: true,
                swapPreferences: 'Shoes'
              },
              {
                id: 2,
                title: 'Designer Handbag',
                description: 'A high-quality designer handbag with a sleek design.',
                price: 150,
                image: 'https://www.brighton.com/cdn/shop/files/230418-777x777-handbags-cat-3_777x.jpg?v=1681858934',
                category: 'Bags',
                isSwap: false
              },
              {
                id: 3,
                title: 'Classic Watch',
                description: 'A timeless classic watch that never goes out of style.',
                price: 120,
                image: 'https://i.ebayimg.com/images/g/JYUAAOSw6eJiDio1/s-l1200.webp',
                category: 'Accessories',
                isSwap: true,
                swapPreferences: 'Jewelry'
              }
        ];

        setItems(sampleItems);
    }, []);

    if (!isAuthenticated){
        return (
            <div>
                <h1>Welcome to College Clothes Swap</h1>
                <div>
                    <button onClick={() => setShowLogin(true)}>Login</button>
                    <button onClick={() => setShowLogin(false)}>Register</button>
                </div>
                {showLogin ? <Login /> : <Register />}
            </div>
        )
    }
    
    return (
        <div>
            <h1>Welcome to College Clothes Swap</h1>
            <p>Browse and swap clothes effortlessly!</p>
            <div>
                {items.map((item, index, items) => (
                    <Listing key={index} item={item} items={items} />
                ))}
            </div>
        </div>
    );
};

export default Home;