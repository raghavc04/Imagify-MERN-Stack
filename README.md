```bash
# Imagify - MERN Stack Application

# Technologies Used
- MongoDB: For database management.
- Express.js: Backend framework for building APIs.
- React.js: Frontend library for building user interfaces.
- Node.js: Runtime environment for executing JavaScript on the server side.

# How to Clone and Run the Project

# Step 1: Clone the Repository

git clone https://github.com/raghavc04/Imagify-MERN-Stack.git
cd Imagify-MERN-Stack

# Step 2: Setup Backend

cd server
# Create a .env file in the server directory with the following variables
MONGODB_URI="<your-mongodb-uri>"
JWT_SECRET="<your-jwt-secret>"
CLIPDROP_API="<your-clipdrop-api-key>"
npm install
npm run server
# Note: Razorpay code has been commented out for now.

# Step 3: Setup Frontend

cd client
npm install
# Create a .env file in the client directory with the following variable
VITE_BACKEND_URL="<your-backend-url>"
npm run dev

# Final Steps
Open your browser and navigate to the specified URL (usually http://localhost:3000 for the frontend and http://localhost:4000 for the backend).
Enjoy using Imagify to convert text into images!
```

