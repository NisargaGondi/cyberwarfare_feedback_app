# Feedback Web Application

A simple feedback web application built with the MERN stack, featuring a user-friendly UI with validation, feedback submission, and real-time feedback display.

## Features
- Submit feedback with name, email, and message validation
- View submitted feedback in real-time
- Light-themed UI with modern styling
- Built using React, Node.js, Express, and MongoDB

## Live Demo
[Live Application - Frontend](https://67b44439eb54793180f9d5d6--relaxed-pegasus-043ea6.netlify.app/)

## Installation & Setup
Follow these steps to set up the application on your local system:

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/feedback-app.git
   cd feedback-app/server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Update `API_URL` in `App.js` to match your backend URL (default: `http://localhost:5000`).
4. Start the React app:
   ```sh
   npm start
   ```

## Deployment
### Deploying Backend on Render
1. Create an account on [Render](https://render.com/).
2. Create a new web service and connect it to your GitHub repository.
3. Add `MONGO_URI` as an environment variable in the Render dashboard.
4. Deploy the service and get the backend URL.

### Deploying Frontend on Netlify
1. Follow the on-screen instructions to deploy.

## Technologies Used
- **Frontend**: React, Bootstrap, axios
- **Backend**: Node.js, Express.js, MongoDB
- **Deployment**: Render (Backend), Netlify (Frontend)

