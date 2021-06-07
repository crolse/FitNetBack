import SQLInstance from "./SQLInstance.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser"
import http from 'http';


// Enable .env config variables
dotenv.config();
// Setup our sql instance
export const sqlInstance = new SQLInstance(
  process.env.API_HOST,
  process.env.API_PORT,
  process.env.API_USER,
  process.env.API_PASSWORD,
  process.env.API_DATABASE
);
sqlInstance.connect();


// Create our express App
export const app = express();
// Allow user to send data in JSON Format
app.use(express.json());
// Allow user to send data in JSON Format
app.use(cors());

// Make our app listen to port 3000
const httpServer = http.createServer(app);
httpServer.listen(3000);
