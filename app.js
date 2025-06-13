// setup

const express = require("express");
const app = express();
const port = 3000;
const localHost = `http://localhost:${port}`;
const cors = require("cors")
const corsConfig = {origin: "http://localhost:5173"}

// import

const router = require("./routers/postsRoutes");
const { errorHandler } = require("./middlewares/internalServerError.js");
const { notFoundHandler } = require("./middlewares/notFound.js");

// middleware
app.use(cors(corsConfig))
app.use(express.json());
app.use(express.static("img"));
app.use("/posts", router);


// middleware per gestione errori

app.use(errorHandler);
app.use(notFoundHandler);

// console check

app.listen(port, () => {
  console.log(`server in ascolto su ${localHost}`);
});
