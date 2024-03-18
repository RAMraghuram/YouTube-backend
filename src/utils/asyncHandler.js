const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => {
      next(error);
    });
  };
};

export { asyncHandler };

// const asyncHandler = () => {}
// const asyncHandler = (func) =>() =>  {}
// const asyncHandler = (func) => async () =>  {}

/* 
same as the above code but using try catch method
const asyncHandler = (fn) => async (req, res, next) => {
    try{
        await fn(req, res, next)
    }catch (error) {
        res.status(err.code || 500).json({
            sucess: false,
            message: err.message
        })
    }
} */
