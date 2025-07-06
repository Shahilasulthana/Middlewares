import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true })); // Instruction to parse URL-encoded bodies


 // Middleware function to generate band name
 // This function will run for every request that comes to the server
  // It will take the street and pet from the request body and combine them to form a band name
  // The next() function is called to pass control to the next middleware or route
  // It is important to call next() to avoid hanging the request
  // If next() is not called, the request will hang and the server will not respond
  // console.log is used to log the request body to the console for debugging purposes
  // req.body contains the parsed body of the request
  // The body-parser middleware is used to parse the body of the request


function bandNameGenerator(req, res, next) {   
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

// This middleware will run after the body-parser middleware
// It will take the street and pet from the request body and combine them to form a band name


app.use(bandNameGenerator);


// This route serves the HTML file when the root URL is accessed
// It uses res.sendFile to send the index.html file located in the public directory
// __dirname is used to get the absolute path of the current directory
// This is necessary to ensure the correct file path is used regardless of where the server is run


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// This route handles the POST request when the form is submitted
// It sends a response with the generated band name
// The band name is stored in the bandName variable, which is set by the bandNameGenerator middleware
// The response is sent as an HTML string with the band name displayed in a heading

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

// This starts the server and listens on the specified port
// When the server is running, it logs a message to the console indicating the port it is listening on
// The port is set to 3000, but it can be changed to any available port
// The server will respond to requests made to the specified routes

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
