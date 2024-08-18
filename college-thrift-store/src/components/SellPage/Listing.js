import React from "react";
import { Link } from 'react-router-dom';

const Listing = ({ item, items, index }) => {
    return (
        <div>
            {items.length === 0 && <p>No items found.</p>}
            <img src={item.image} alt={item.title} height="200" width="300" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            {item.isSwap && (
                <p><strong>Open to swap for:</strong> {item.swapPreferences}</p>
            )}
            <Link to={`/messages/${item.id}`}>Messages about this item</Link>
        </div>
    );
};

export default Listing;