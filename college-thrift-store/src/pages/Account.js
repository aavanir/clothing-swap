import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { getItems } from "../components/SellPage/dataStore";
import { Link } from "react-router-dom";
import Listing from "../components/SellPage/Listing";

//import { getUserProfile } from '../api';

function Account() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [profile, setProfile] = useState({
        profilePic: 'https://via.placeholder.com/150',
        name: 'Jane Doe',
        username: 'janedoe',
        pronouns: 'she/her',
        bio: 'Lover of thrift finds and sustainable fashion.',
        followers: 120,
        following: 150,
    })

    useEffect(() => {
    //     const fetchProfile = async () => {
    //         const userProfile = await getUserProfile();
    //         setProfile(userProfile);
    //     };

    //     fetchProfile();
    // }, []);

    //sample data
        const sampleItems = [
            {
            image: 'https://via.placeholder.com/100',
            title: 'Vintage Dress',
            description: 'A beautiful vintage dress in excellent condition.',
            category: 'Dresses',
            price: 25,
            isSwap: true,
            swapPreferences: 'Looking for a similar style top or skirt.',
            },
            {
            image: 'https://via.placeholder.com/100',
            title: 'Leather Jacket',
            description: 'Classic black leather jacket, barely worn.',
            category: 'Jackets',
            price: 50,
            isSwap: false,
            }
        ];

        setItems(sampleItems);
    }, []);

    return (
        <div>
            <h1>Your Account</h1>
            <div className="profile-section">
                <img src={profile.profilePic} alt="Profile" className="profile-pic" />
                <h2>{profile.name}</h2>
                <p className="username">@{profile.username}</p>
                <p>{profile.pronouns}</p>
                <p className="bio">{profile.bio}</p>
                <div>
                    <span><strong>Followers:</strong> {profile.followers} </span>
                    <span><strong>Following:</strong> {profile.following}</span>
                </div>
            </div>
            <button onClick={() => navigate('/sell')}>Sell</button>
            <button onClick={() => navigate('/cart')}>Cart</button>
            <button onClick={() => navigate('/account/edit-profile')}>Edit Profile</button>
            <button onClick={() => navigate('/account/purchases')}>Purchase History</button>
            <div>
                {items.map((item, index, items) => (
                    <Listing key={index} item={item} items={items}/>
                ))}
            </div>
        </div>
    );
};

export default Account;