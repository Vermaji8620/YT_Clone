//  making this file so that the middlewares are directly be passed into this function and can directly be returned

const asyncHandler = (fn) => {
  async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(error.code || 500).json({ sucess: false, message: error.message });
    }
  };
};

export { asyncHandler };
