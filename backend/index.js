import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import databaseConnection from "./utils/database.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";


// ✅ Load environment variables before using them
dotenv.config({ path: ".env" });

// ✅ Call DB connection after env is loaded
databaseConnection();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOptions));

// Routes
app.use("/api/v1/user", userRoute);

// Optional default route
// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "Welcome to my world",
//         success: true,
//     });
// });

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`✅ Server listening on port ${PORT}`);
});
