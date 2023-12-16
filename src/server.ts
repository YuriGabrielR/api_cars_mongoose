import express from "express";
import router from "./routes";
import 'dotenv/config';
import './database/config';

const server = express();
server.use(express.json());
server.use(router);
 
 

server.listen(process.env.PORT || 8080, () => {
  console.log("⚡ Server running! 🦾 ");
});
 