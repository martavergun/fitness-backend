require("dotenv").config();
const app = require("./app");
const { initFirebase } = require("./config/firebase");

initFirebase();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
