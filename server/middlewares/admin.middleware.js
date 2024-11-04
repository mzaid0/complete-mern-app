export const adminMiddleware = (req, res, next) => {
  try {
    // console.log(req.originalUrl);
    
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      return res
        .status(403)
        .json({ message: "You are not authorized to access this route" });
    }
    next();
  } catch (error) {
    next({ status: error.status, message: error.message });
  }
};
