import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//send to API so that accounts can be updated
function EditProfile(){
    const [newProfilePic, setNewProfilePic] = useState('');
    const [profile, setProfile] = useState({
        profilePic: '',
        name: '',
        username: '',
        pronouns: '',
        bio: '',
    })

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const userProfile = {
                profilePic: 'https://via.placeholder.com/150',
                name: 'Jane Doe',
                username: 'janedoe',
                bio: 'Lover of thrift finds and sustainable fashion.',
            };
            setProfile(userProfile);
        };

        fetchProfile();
    }, []);

    

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setNewProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    function handleChange(e){
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Profile update:', profile);
        navigate('/account');
    }

    return (
        <div>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="profilePic">Profile Picture:</label>
                    <input
                        type="file"
                        id="profilePic"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {newProfilePic && (
                        <img
                            src={newProfilePic}
                            alt="Preview"
                            style={{width: '100px', height: '100px'}}
                        />
                    )}
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={profile.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="bio"></label>
                    <input
                        type="text"
                        id="bio"
                        name="bio"
                        value={profile.bio}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;