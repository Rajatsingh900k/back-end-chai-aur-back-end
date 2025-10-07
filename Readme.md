# Backend - Chai aur Code ☕

A comprehensive backend development series by Hitesh Choudhary covering everything from basics to production-ready applications.

## 📚 About This Series

This repository contains the complete backend development course where we learn backend development from scratch. We'll build real-world projects, understand production-level code, and master backend development with Node.js, Express, and MongoDB.

## 🎯 What You'll Learn

- Setting up professional Node.js projects
- Express.js framework from basics to advanced
- MongoDB and Mongoose ODM
- RESTful API design and best practices
- Authentication & Authorization (JWT, bcrypt)
- File uploads and handling
- Database modeling and relationships
- Middleware and error handling
- Security best practices
- Deployment and production considerations

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Password Hashing**: bcrypt
- **Environment Variables**: dotenv
- **API Testing**: Postman

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB installed locally or MongoDB Atlas account
- npm or yarn package manager

## Create application

1. Initialise empty node application
    ```bash
    npm init -y
    ```
    or for custom initialisation
   ```bash
   npm init
   ```
2. Enter package name
3. Enter description
4. Enter entery point: index.js
5. Enter test command
6. Enter git repository
7. Declare Keywords
8. Enter Author
9. Licence

### Installation

1. Clone the repository
```bash
git clone https://github.com/rajatsingh900k/backend-chai-aur-code.git
cd backend-chai-aur-code
```

2. Install dependencies
 - Install express
```bash
1. npm install Express
```

3. Create a \`.env\` file in the root directory
```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d
```

4. Start the development server
```bash
npm run dev
```

## 📦 Key Features

- **Professional Code Structure**: Industry-standard folder organization
- **Async Error Handling**: Proper error handling with custom error classes
- **JWT Authentication**: Secure authentication system with access and refresh tokens
- **File Upload**: Handle image and video uploads efficiently
- **Database Aggregation**: Complex MongoDB aggregation pipelines
- **Middleware Pipeline**: Custom middlewares for authentication and validation
- **API Documentation**: Well-documented API endpoints

## 🎓 Learning Path

1. **Setting Up**: Project initialization and configuration
2. **Express Basics**: Routes, middleware, and request handling
3. **Database**: MongoDB connection and Mongoose models
4. **Authentication**: User registration, login, and JWT implementation
5. **File Handling**: Upload and manage files with Multer
6. **Advanced Patterns**: Aggregation pipelines and complex queries
7. **Production**: Security, optimization, and deployment

## 📝 API Endpoints

### User Routes
- `POST /api/v1/users/register` - Register new user
- `POST /api/v1/users/login` - User login
- `POST /api/v1/users/logout` - User logout
- `POST /api/v1/users/refresh-token` - Refresh access token
- `GET /api/v1/users/current-user` - Get current user details

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📺 YouTube Channel

Subscribe to [Chai aur Code](https://www.youtube.com/@chaiaurcode) for detailed video tutorials and explanations.

## 👨‍💻 Author

**Hitesh Choudhary**
- YouTube: [@chaiaurcode](https://www.youtube.com/@chaiaurcode)
- X: [@hiteshdotcom](https://x.com/hiteshdotcom)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Thanks to all the students and developers in the Chai aur Code community
- Special thanks to everyone who contributes to this project

---

**Happy Coding!** ☕💻

*Keep learning, keep building, and don't forget to grab your chai!*`;
