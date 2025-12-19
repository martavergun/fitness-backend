const router = require("express").Router();
const { getDb } = require("../config/firebase");
const { requireAuth } = require("../middleware/auth.middleware");

/**
 * Get current authenticated user
 */
router.get("/me", requireAuth, async (req, res) => {
  try {
    const db = getDb();
    const uid = req.user.uid;

    const doc = await db.collection("users").doc(uid).get();

    if (!doc.exists) {
      return res.status(404).json({ error: "User profile not found" });
    }

    res.json(doc.data());
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
