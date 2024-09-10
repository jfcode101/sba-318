const express = require("express");
const path = require("path");
const logs = require("./middleware/logs");
const validateTask = require("./middleware/validateTask");

// assign express to a variable called app
app = express();
const portname = process.env.portname || 3000;

// middleware

// use a built-in middleware to parse JSON
app.use(express.json);
// use a middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// use a custom middleware for logging requests
app.use(logs);

// use a custom middleware for validating tasks data
app.use(validateTask);

// serve static files
app.use(express.static(path.join(__dirname, "styles")));

// set up a view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routes
app.use("/tasks", taskRoutes);

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong or is broken!");
});

// Start server
app.listen(portname, () => {
  console.log(`Server is running on http://localhost:${portname}`);
});
