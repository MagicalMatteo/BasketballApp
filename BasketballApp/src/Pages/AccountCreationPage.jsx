import React, { useState } from 'react';

function AccountCreationPage({setIsLoggedIn}) {
    const [mail, setMail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleCreateAccount = async () => {
        if (!emailRegex.test(mail)) {
            setMessage("Please enter a valid email address.");
            return;
        }
        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/usercreation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdHVzZXIifQ.zosK_5AXYQwaJNmR8yZgULmCr4d9ASeATQXRqy34tXc'

                },
                body: JSON.stringify({
                    username: username,
                    mail: mail,
                    password: password
                })
            });
            const data = await response.json();
            if (response.ok) {
                setMessage("Account created successfully!");
                setIsLoggedIn(true);

            } else {
                setMessage(data.message || "Account creation failed.");
            }
        } catch (error) {
            setMessage("Error: " + error.message);
        }
    };

    return (
        <div className="AccountCreation">
            <h2>Input Mail</h2>
            <input
                type="text"
                placeholder="Mail"
                className="search-input"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
            />
            <h2>Input Username</h2>
            <input
                type="text"
                placeholder="Username"
                className="search-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <h2>Input Password</h2>
            <input
                type="password"
                placeholder="Password"
                className="search-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Just to Double check again"
                className="search-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleCreateAccount}>Create Account</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AccountCreationPage;