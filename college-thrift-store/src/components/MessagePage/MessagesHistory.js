import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function MessagesHistory() {
    const { senderId, receiverId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        //messages need ot be fetched from backend, this is a placeholder
        const fetchMessages = async () => {
            //replace with actual API call
            const response = await fetch('/api/messages/${senderId}/${receiverId}');
            const data = await response.json();
            setMessages(data);
        };

        fetchMessages();
    }, [senderId, receiverId]);

    const handleSendMessage = async () => {
        //placeholder for sending new message to backend
        const response = await fetch('/api/messages/${senderId}/${receiverId}', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text: newMessage }),
        });
        const data = await response.json();

        setMessages([...messages, data]);
        setNewMessage('');
    };

    return (
        <div>
            <h1>Your Messages with {receiverId}</h1>
            <div>
                {messages.map((message, index) => (
                    <div>
                        <p>{messages.text}</p>
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message here"
                />
                <button onCLick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default MessagesHistory;