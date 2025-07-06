# Middlewares
🚀Learning how backend middleware works by building and testing examples in Node.js and Express.

# Middlewares

🚀 **Learning how backend middleware works by building and testing examples in Node.js and Express.**

---

## 📘 What is Middleware?

**Middleware** is a component that sits **between the raw incoming requests and the route handlers**.  
When a request arrives at the server, before it is processed by route handlers such as GET, POST, or PUT functions, middleware can operate on these requests before they reach their final destinations.

---

## ✨ Functions of Middleware

Middleware can perform several functions before allowing the request to proceed:

- **Pre-processing requests:**  
  When a request might be handled by multiple handlers (GET, POST, PUT), middleware can modify aspects of the request or perform operations on it before routing.

- **Logging:**  
  Middleware can log details such as the time taken for the request, the request type (GET, PUT, POST, etc.), and the status of the request handling.

- **Authentication:**  
  Middleware can verify if the incoming request originates from an authorized client before allowing access to backend handlers.

- **Error handling:**  
  Middleware can identify and manage errors in requests before they reach the route handlers.

---

## 📝 Body Parser Middleware

A commonly used middleware in Node and Express backend development is called **Body Parser**.  
As the name suggests, Body Parser **parses the body of incoming requests**.

It examines the request bodies before the handlers access them and adds a new property called `body` to the request object. This is especially useful for handling form data.

---

## 🧩 HTML Forms and Data Submission

Consider an HTML `<form>` element, which starts with a `<form>` tag and ends with a `</form>` tag.  
The form typically has the following attributes:

- `action`: Specifies the route where the server should handle the request.
- `method`: Describes how the data should be processed on the backend (e.g., POST, PUT, DELETE).

Within the form, you usually find pairs of **label** and **input** elements:

- The label describes the expected input.
- The input element is the field where users enter data.

Input elements have attributes such as:

- `type`: Defines the kind of input (e.g., text field, radio button, checkbox, dropdown).
- `name`: Labels the data entered in the input, which becomes the key in the key/value pair sent to the server.
- `required`: Indicates that the input must be filled before submission.
- `value`: For submit buttons, this defines the text displayed on the button.

---

## 🖥️ Rendering HTML Files in Express

In Express, instead of sending small HTML snippets with `res.send()`, you can send entire HTML files using the `res.sendFile()` method.  

This method requires the **exact file path** to the HTML file you want to send.

To dynamically determine the directory path, especially when the server is hosted remotely, you can use Node's built-in `path` module.  
Importing and using `dirname` from the `path` module allows you to construct the full path to your HTML file dynamically, ensuring compatibility across different environments.

---

## 🛠️ Setting Up the Project and Serving Static Files

1. After downloading the exercise files, navigate into the project folder.
2. Run `npm install` to install dependencies.

The project contains a `public` folder, which is typically used to store **static files** such as HTML, CSS, and images that do not change dynamically.

The goal is to render `index.html` from the public folder as the response from the server when a client makes a request.

---

## ⚙️ Using Body Parser Middleware in Express

To handle form data sent via POST requests, you need to install and use the Body Parser middleware.

**Steps:**

1. Install Body Parser using npm:
   ```bash
   npm install body-parser

2. Import Body Parser into your Express application:

const bodyParser = require('body-parser');
Use the app.use() method to add Body Parser as middleware:
app.use(bodyParser.urlencoded({ extended: true }));
Configure Body Parser to parse URL-encoded data by setting the extended option (usually set to true or false).

Once configured, every incoming request object will have a body property containing the parsed data.
Without this middleware, accessing req.body would return undefined.

## 📮 Handling POST Requests and Accessing Form Data
Create a POST route handler matching the form's action path (e.g., /submit):

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send('Form data received!');
});



Inside this handler, you can access the parsed form data via req.body and perform operations such as logging the data.

This setup allows your server to receive and process data submitted through HTML forms.

## 🧪 Testing the Setup with Postman
Use Postman to simulate form submissions:

Set the request method to POST.

Set the URL to http://localhost:3000/submit.

Under the Body tab, select x-www-form-urlencoded.

Add key/value pairs corresponding to your form inputs.

Send the request and observe the server console logging the parsed data.

## ✅ Note: If Body Parser middleware is disabled, req.body will be undefined.

## 🎸 Real-World Example: Band Name Generator
The Band Name Generator website takes inputs such as:

The street name you grew up on

Your pet's name

When you submit the form, it makes a POST request to /submit.

The server receives the encoded data, which corresponds to the input names and their values.

This functionality is enabled by the Body Parser middleware, which parses the form data and makes it accessible via req.body.
