const User = require("../models/user_model.js");

exports.registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Could not register user" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Could not login user" });
  }
};


exports.userProfile = async (req, res) => {
  try {
    const profile = await User.findById(req.params.id);

    if (!profile) {
      return res.status(404).json({ error: "Admin not found" });
    }

   

    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Could not fetch user" });
  }
};
