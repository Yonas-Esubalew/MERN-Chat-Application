# MERN Chat Application

A **real-time chat application** built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) with Socket.IO for live communication. This project enables users to create accounts, chat in real-time with others, and manage their conversations effectively.

---

## Features

- **User Authentication**: Register and log in securely using JSON Web Tokens (JWT).
- **Real-Time Messaging**: Chat instantly using Socket.IO for seamless communication.
- **Responsive Design**: Fully responsive and optimized for desktop and mobile devices.
- **Group Chats**: Create, manage, and participate in group conversations.
- **Typing Indicators**: Know when the other person is typing.
- **Search Functionality**: Quickly find users to start chatting.
- **Notifications**: Get notified of new messages even when in other chats.

---

## Tech Stack

### Frontend
- React.js
- React Router
- Redux Toolkit (for state management)
- TailwindCSS / Material-UI (for styling)

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ORM)
- Socket.IO

### Additional Tools
- JWT (for authentication)
- bcrypt.js (for password hashing)
- dotenv (for environment variables)

---

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Yonas-Esubalew/Chat-Bot-Application.git
   cd mern-chat-app
   ```

2. Install dependencies for both the frontend and backend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following keys:
     ```env
     MONGO_URI=mongodb+srv://yonasbe999:e24vJ0Dk3P6DOVLb@cluster0.8u4ydob.mongodb.net/chat-bot-project?retryWrites=true&w=majority&appName=Cluster0
     JWT_SECRET=duLvaNXsqg8bPjMsz8g8MFWdsdlS+6ct+iFibhbJpcs=
     SOCKET_PORT=8000
     ```

4. Start the development servers:
   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

5. Open your browser and visit: `http://localhost:5000`.

---

## File Structure

```
mern-chat-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── config/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.js
│   │   └── index.js
├── README.md
└── .gitignore
```

---

## Usage

- Register an account or log in with existing credentials.
- Search for users by their username to start a chat.
- Create group chats to connect with multiple users.
- Enjoy real-time messaging with typing indicators and notifications.

---


## Contributing

Contributions are welcome! If you have suggestions or want to improve the project, feel free to:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Socket.IO Documentation](https://socket.io/docs/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)

---

## Contact

- **Author**: [Yonas Esubalew](https://github.com/Yonas-Esubalew)
- **Email**: yonasatwork999@gmail.com
