const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Fitness backend is running" });
});

router.get("/health", (req, res) => {
  res.json({ ok: true });
});

module.exports = router;
