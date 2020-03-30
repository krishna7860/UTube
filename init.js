import app from "./app";
import dotenv from "dotenv";

dotenv.config();

// Import Models
import "./models/Video";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔮 App listening on port http://localhost:${PORT}`);
});
