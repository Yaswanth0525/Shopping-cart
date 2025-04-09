import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setMessage({ type: '', text: '' }); // Clear messages on input change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        const existingUser = storedUsers.find(user => user.username === username);
        if (existingUser) {
            setMessage({ type: 'error', text: 'User already exists' });
            return;
        }

        const newUser = { username, email, password };
        storedUsers.push(newUser);

        localStorage.setItem('users', JSON.stringify(storedUsers));

        setMessage({ type: 'success', text: 'Registration successful!' });
        console.log('Registration successful!');
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/mockup-small-online-shopping-cart-ecommerce-product-ordering-receiving-concept-ecommerce-online-shopping-mockup-design-product-ordering-user-interface_918839-121304.jpg')`,
            }}
        >
            <div className="bg-white bg-opacity-20 shadow-lg rounded-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-semibold text-center font-serif text-gray-800 mb-6">
                    Register
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-900 mb-1"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            placeholder="Enter your username"
                            onChange={handleInputChange(setUsername)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-900 mb-1"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            placeholder="example@gmail.com"
                            onChange={handleInputChange(setEmail)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-900 mb-1"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={handleInputChange(setPassword)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    {message.text && (
                        <p
                            className={`text-center text-md font-bold mt-2 ${
                                message.type === 'error'
                                    ? 'text-red-600'
                                    : 'text-teal-300'
                            }`}
                        >
                            {message.text}
                        </p>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
