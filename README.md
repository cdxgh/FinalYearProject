Rental Clothing Website
Overview

Welcome to the Rental Clothing Website, a comprehensive solution for renting clothes online. This project leverages the power of the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrates Firebase for secure user authentication. This application is designed to provide users with a seamless experience for renting clothes, managing their rentals, and ensuring a smooth and secure authentication process.
Features

    User Authentication: Secure sign-up and login using Firebase Authentication.
    Browse Clothing: Browse a wide variety of clothing available for rent.
    Rental Management: Rent clothes and manage current and past rentals.
    Admin Dashboard: Manage inventory, track rentals, and oversee user activities.
    Responsive Design: Optimized for both desktop and mobile devices.
    Secure Transactions: Ensure all transactions and user data are securely handled.

Technologies Used

    Frontend:
        React.js: For building a dynamic and responsive user interface.
        Redux: For state management.
        Bootstrap: For responsive and mobile-first design.

    Backend:
        Node.js: For server-side scripting.
        Express.js: For building the RESTful API.
        MongoDB: For the database to store user and rental data.
        Firebase: For user authentication.

    Additional Tools:
        Firebase Authentication: For handling user sign-up, login, and authentication.
        Mongoose: For MongoDB object modeling.
        JWT (JSON Web Tokens): For secure user sessions.
        Heroku: For deployment.

Getting Started
Prerequisites

Before you begin, ensure you have the following installed:

    Node.js
    MongoDB
    Firebase account

Installation

    Clone the repository:

    sh

git clone https://github.com/cdxgh/FinalYearProject.git
cd rental-clothing-website

Backend Setup:

    Navigate to the backend directory:

    sh

cd backend

Install backend dependencies:

sh

npm install

Create a .env file in the backend directory and add the following environment variables:

env

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id

Start the backend server:

sh

    npm start

Frontend Setup:

    Navigate to the frontend directory:

    sh

cd ../frontend

Install frontend dependencies:

sh

npm install

Create a .env file in the frontend directory and add the following environment variables:

env

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_API_URL=http://localhost:5000

Start the frontend server:

sh

        npm start

Deployment

To deploy the application to Heroku or any other cloud platform, follow these steps:

    Heroku Deployment:
        Install the Heroku CLI if you haven't already.
        Login to Heroku:

        sh

heroku login

Create a new Heroku app:

sh

heroku create your-app-name

Push the code to Heroku:

sh

git push heroku main

Set environment variables on Heroku:

sh

heroku config:set MONGO_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret
heroku config:set FIREBASE_API_KEY=your_firebase_api_key
heroku config:set FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
heroku config:set FIREBASE_PROJECT_ID=your_firebase_project_id
heroku config:set FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
heroku config:set FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
heroku config:set FIREBASE_APP_ID=your_firebase_app_id

Open your deployed app:

sh

        heroku open

Usage

    Register/Login: Create an account or log in using your credentials.
    Browse: Explore the available clothing items.
    Rent: Select items to rent and manage your rentals.
    Admin Access: If you are an admin, manage inventory and user activities through the admin dashboard.

Contributing

Contributions are welcome! Please follow these steps:

    Fork the repository.
    Create a new branch (git checkout -b feature-branch).
    Commit your changes (git commit -m 'Add new feature').
    Push to the branch (git push origin feature-branch).
    Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for more details.
Acknowledgements

    React.js
    Node.js
    Express.js
    MongoDB
    Firebase

Contact

For any inquiries or feedback, please contact:

    Name: Abdul Quadir
    Email: khanarshu0786@gmail.com
    GitHub: cdxgh
