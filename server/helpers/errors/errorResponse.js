module.exports = function errorResponse(error, req, res, next) {
  const status = error.status || 500;
  res
    .status(error.status || 500)
    .json({ success: false, status: status, message: error.message });
};
