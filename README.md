# Netflix Clone

A fully functional Netflix clone built with the MERN stack (MongoDB, Express, React, Node.js). This project replicates the core features of Netflix, including movie browsing, video playback, and user authentication.

## Features

- **User Authentication:** Users can sign up, log in, and access personalized content.
- **Movie/TV Show Browsing:** Browse a wide range of movies and TV shows by category.
- **Video Playback:** Stream movies and TV shows directly on the platform.
- **Responsive Design:** Fully responsive and optimized for mobile and desktop.

## Tech Stack

- **Frontend:** React.js, Redux (for state management), Axios (for API calls)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (for storing user data and movie details)
- **Authentication:** Firebase Authentication (for user login and sign-up)
- **Styling:** CSS, React-Bootstrap
- **Video Streaming:** Integration with YouTube API for video streaming

## Installation

### Prerequisites
Make sure you have Node.js and npm installed on your machine. You can check if they're installed by running:
```bash
node -v
npm -v
```
## Steps to Run Locally

1. **Clone the repository:**

```bash
git clone https://github.com/AakanshaAghav/netflix-mern-stack.git
```

2. **Navigate to the project directory:**

```bash
cd netflix-mern-stack
```

3. **Install the required dependencies for both frontend and backend:**

- **For the frontend (React):**

```bash
cd netflix
npm install
```
- **For the backend (Node.js/Express):**

```bash
cd ../backend
npm install
```
4. **Set up environment variables:**

- In the `netflix` folder, create a `.env` file and add your Firebase credentials.
- In the `backend` folder, create a `.env` file and add your MongoDB connection string.


5. **Run the frontend and backend:**

- **Start the backend server:**

```bash
cd backend
npm start
```
- **Start the frontend server:**

```bash
cd netflix
npm start
```
6. **Open** [http://localhost:3000](http://localhost:3000) **in your browser to view the project.**


## Contributing

- Fork the repository.

- Create a new branch:
```bash
git checkout -b feature-branch
```
- Commit your changes:
```bash
git commit -am "Add new feature"
```
- Push to the branch:
```bash
git push origin feature-branch
```
- Create a new Pull Request:

  1. Go to your forked repository on GitHub.
  2. You’ll see a "Compare & pull request" button. Click it.
  3. Add a clear title and description of the changes you've made.
  4. Submit the pull request.


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
