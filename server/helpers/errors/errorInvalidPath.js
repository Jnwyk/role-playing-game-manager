module.exports = function errorInvalidPath(req, res, next) {
  console.log(req);
  let error = new Error("Whoopsy... Wrong path!");
  error.status = 404;
  next(error);
};
