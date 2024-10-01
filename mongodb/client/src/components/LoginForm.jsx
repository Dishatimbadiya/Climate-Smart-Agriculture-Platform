// C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\client\src\components\LoginForm.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { loginUser } from '../services/userService';
// import { useAuth } from '../context/AuthContext';
// import './FormStyles.css';

// function LoginForm() {
//     const [formData, setFormData] = useState({ email: '', password: '' });
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
//     const { login } = useAuth(); // Get login function from context

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null);

//         try {
//             const user = await loginUser(formData);
//             login(user); // Set user in context
//             navigate('/profile'); // Redirect to profile page (or wherever)
//         } catch (error) {
//             setError(error.message || 'Login failed. Please try again.'); // Handle error
//         }
//     };

//     return (
//         <div className="form-container">
//             <h2>Login</h2>
//             {error && <p className="error-message">{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// }

// export default LoginForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/userService';
import { useAuth } from '../context/AuthContext';
import './FormStyles.css';

function LoginForm() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { login } = useAuth(); // Get login function from context

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const user = await loginUser(formData);
            login(user); // Set user in context
            navigate('/profile'); // Redirect to profile page (or wherever)
        } catch (error) {
            setError(error.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
