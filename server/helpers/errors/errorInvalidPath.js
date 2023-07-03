module.exports = function errorInvalidPath(req, res, next) {
  let error = new Error("Whoopsy... Wrong path!");
  error.status = 404;
  next(error);
};
