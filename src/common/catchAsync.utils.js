const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((e) => (console.log(e),next(e)));
  };
};


exports.catchAsync = catchAsync;