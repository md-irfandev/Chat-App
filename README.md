
# Full-Stack Real-time Chat App with iOS Notifications

This repository contains the code for a full-stack real-time chat application with the following features:

* **Real-time messaging:** Users can send and receive messages in real-time.
* **Real-time online status:** See if users are online next to their names.
* **Complete authentication system:** Uses JSON Web Tokens (JWT) for secure login and authorization.
* **Error handling:** The API handles errors and returns appropriate messages.
* **MongoDB database:** Stores chat data and user information.
* **React front-end:** Uses custom hooks for clean and maintainable code.
* **React Context and Zustand state management:** Two options for managing application state.
* **Socket.IO integration:** Enables real-time communication between client and server.

## Setting up the project locally

### Setting up the Backend

1. **Fork and Clone the Repository**

   ```bash
   git clone https://github.com/{your-username}/Chat-app.git
   ```

2. **Navigate to the Backend Directory**

   ```bash
   cd backend
   ```

3. **Install Required Dependencies**

   ```bash
   npm i
   ```

4. **Set up your MongoDB Database**

   - Open MongoDB Compass and connect MongoDB with `Your mongoDB link` and change the `MONGO_DB_URL` in .env file with your link

5. **Start the Backend Server**

   ```bash
   cd ..
   npm run server
   ```

> You should see the following on your terminal output on successful setup.
   >
   > ```bash
   >  Server is running on port 5000
   >  connected to mongoDB
   > ```


### Setting up the Frontend

1. **Open a New Terminal**

   ```bash
   cd frontend
   ```

2. **Install Dependencies**

   ```bash
   npm i
   ```
4. **Launch the  Server**

   ```bash
   npm run dev
   ```
