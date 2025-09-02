const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
  // get header (case-insensitive)
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(403).json({ message: "Unauthorized, JWT token is required" });
  }

  // Expected format: "Bearer <token>"
  //const token = authHeader.startsWith("Bearer ")
    //? authHeader.split(" ")[1]
   // : authHeader; // allow raw token also

  try {
    const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Unauthorized, JWT token is wrong or expired" });
  }
};

module.exports = ensureAuthenticated;
