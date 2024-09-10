// import express
const express = require("express");

// import/ create a router
const router = express.Router();

//  create and assign a task variable
// this will store task data in memory

// get the tasks
router.get("/", (req, res) => {
  // render view with tasks data
  res.render("index", { task });
});

// port a new task
router.post("/", (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);
  res.redirect("/tasks"); // Redirect to tasks list
});

// PATCH an existing task
router.patch("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.title = req.body.title;
    task.description = req.body.description;
    res.redirect("/tasks");
  } else {
    res.status(404).send("Task not found");
  }
});

// DELETE a task
router.delete("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((t) => t.id !== taskId);
  res.redirect("/tasks"); // Redirect to tasks list
});

module.exports = router;
