const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const users = [];
let jwtSecret = generateJwtSecret();

// generate JWT secret
function generateJwtSecret() {
  return crypto.randomBytes(32).toString("hex");
}

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (users.find((user) => user.email === email)) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = { email, password: hashedPassword };
    users.push(user);

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email: user.email }, jwtSecret, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = jwt.sign({ email: user.email }, jwtSecret, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/reset-password/:token", (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const decodedToken = jwt.verify(token, jwtSecret);
    const user = users.find((user) => user.email === decodedToken.email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    user.password = hashedPassword;

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
