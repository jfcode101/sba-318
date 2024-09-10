// custom middleware to validate task data
module.exports = (req, res, next) => {
  if (req.method === "POST" || req.method === "PATCH") {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).send("Title and description are required.");
    }
  } // pass control to the next middleware
  next();
};
