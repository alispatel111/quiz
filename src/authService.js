// authService.js
let validUsers = [
    { email: 'user1@example.com', password: 'password1', isExpired: false },
    { email: 'user2@example.com', password: 'password2', isExpired: false },
    { email: 'user3@example.com', password: 'password3', isExpired: false },
    { email: 'user4@example.com', password: 'password4', isExpired: false },
    { email: 'user5@example.com', password: 'password5', isExpired: false },
    // Add more users as needed
];

// Function to authenticate user
const authenticateUser = (email, password) => {
    const user = validUsers.find(user => user.email === email && user.password === password);
    if (user && !user.isExpired) {
        return user; // Return user object if authentication is successful and password is not expired
    }
    return null; // Return null if authentication fails or password is expired
};

// Function to mark the user's password as expired after first use
export const expirePassword = (email) => {
    validUsers = validUsers.map(user => 
        user.email === email ? { ...user, isExpired: true } : user
    );
};

// Login function
export const login = (email, password) => {
    const user = authenticateUser(email, password);
    if (user) {
        return true; // Successful login
    } else {
        alert('Invalid email or password, or your password has expired.');
        return false; // Failed login
    }
};
