import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { addItem } from "../components/SellPage/dataStore";

function Sell() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    //should category be predefined?
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [isSwap, setIsSwap] = useState(false);
    const [swapPreferences, setSwapPreferences] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        //const imageUrl = URL.createObjectURL(file);
        //setPreviewUrl(imageUrl);
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //replace this with the API call
        const newItem = {
            title,
            description,
            category,
            price,
            isSwap,
            swapPreferences,
            size,
            image,
        };

        addItem(newItem);

        navigate('/account');
    };

    return (
        <div>
            <h2>Upload Item</h2>
            <form onSubmit={handleSubmit}>
                <h3>Title</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                 <h3>Description</h3>
                <textarea
                    placeholder="e.g barely worn small denim skirt"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                 <h3>Category</h3>
                <input
                    type="category"
                    placeholder="e.g Pants"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                 <h3>Price</h3>
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <div>
                    <label>
                        Open to swap:
                        <input
                            type="checkbox"
                            checked={isSwap}
                            onChange={(e) => setIsSwap(e.target.checked)}
                        />
                    </label>
                </div>
                {isSwap && (
                    <textarea
                        placeholder="Swap Preferences (e.g. I'm looking for a white babydoll top to swap for this item)"
                        value={swapPreferences}
                        onChange={(e) => setSwapPreferences(e.target.value)}
                    ></textarea>
                )}
                <h3>Size</h3>
                <input
                    type="size"
                    placeholder="Women's 34"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    required
                />
                <h3>Images</h3>
                <input 
                    type="file"
                    onChange={handleImageChange}
                    required
                />
                {/* {previewUrl && <img src={previewUrl} alt="Preview" />}*/}
                <button type="submit">Submit</button> 
            </form>
        </div>
    );
};

export default Sell;