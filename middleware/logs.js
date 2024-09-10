// custom middleware to log request details
module.exports = (req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  // pass control to the next middleware
  next();
};
