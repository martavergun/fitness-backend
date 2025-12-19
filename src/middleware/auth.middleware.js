const { admin, initFirebase } = require("../config/firebase");

async function requireAuth(req, res, next) {
  try {
    initFirebase();

    const authHeader = req.headers.authorization || "";
    const match = authHeader.match(/^Bearer (.+)$/);

    if (!match) {
      return res.status(401).json({ error: "Missing Authorization token" });
    }

    const idToken = match[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    req.user = decodedToken; // uid, email, name, picture
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

module.exports = { requireAuth };
