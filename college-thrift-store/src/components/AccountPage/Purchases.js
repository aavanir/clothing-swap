import { useState, useEffect } from "react";
import Listing from "../SellPage/Listing";

const Purchases = () => {
    const [items, setItems] = useState([]);
    //need to call backend to see if purchased or not

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
                swapPreferences: 'Shoes',
                purchased: false
              },
              {
                id: 2,
                title: 'Designer Handbag',
                description: 'A high-quality designer handbag with a sleek design.',
                price: 150,
                image: 'https://www.brighton.com/cdn/shop/files/230418-777x777-handbags-cat-3_777x.jpg?v=1681858934',
                category: 'Bags',
                isSwap: false,
                purchased: true
              },
              {
                id: 3,
                title: 'Classic Watch',
                description: 'A timeless classic watch that never goes out of style.',
                price: 120,
                image: 'https://i.ebayimg.com/images/g/JYUAAOSw6eJiDio1/s-l1200.webp',
                category: 'Accessories',
                isSwap: true,
                swapPreferences: 'Jewelry',
                purchased: true
              }
        ];

        setItems(sampleItems);
    }, []);

    

    return (
        <div>
            <h2>Purchases</h2>
            {items
            .filter(item => item.purchased)
            .map((item, index, items) => (
                <Listing key={index} item={item} items={items}/>
            ))}
        </div>
    );
}

export default Purchases;