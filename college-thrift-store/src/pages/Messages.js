// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';

// function Messages() {
//     const [conversations, setConversations] = useState([]);
//     const userId = 'currentUserId'; //replace with actual user ID

//     useEffect(() => {
//         //messages need ot be fetched from backend, this is a placeholder
//         const fetchConversations = async () => {
//             //replace with actual API call
//             const response = await fetch('/api/messages/${userId}');
//             const data = await response.json();
//             setConversations(data);
//         };

//         fetchConversations();
//     }, [userId]);


//     return (
//         <div>
//             <h1>Your Messages</h1>
//             <ul>
//                 {conversations.map((contactId, index) => (
//                     <li key={index}>
//                         <Link to={`/messages/${userId}/${contactId}`}>Chat with {contactId}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Messages;


//sample messages 

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Messages = () => {
    const [conversations, setConversations] = useState([]);
    const userId = 'currentUserId'; // Replace with the actual user ID

    useEffect(() => {
        // Sample data for conversations
        const sampleConversations = [
            { contactId: 'user1', contactName: 'Alice' },
            { contactId: 'user2', contactName: 'Bob' },
            { contactId: 'user3', contactName: 'Charlie' }
        ];

        // Set the sample data to the state
        setConversations(sampleConversations);
    }, []);

    return (
        <div>
            <h1>Your Messages</h1>
            <ul>
                {conversations.map((conversation, index) => (
                    <li key={index}>
                        <Link to={`/messages/${userId}/${conversation.contactId}`}>Chat with {conversation.contactName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Messages;