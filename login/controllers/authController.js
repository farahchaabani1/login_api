// controllers/authController.js
const User = require('../models/User');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Email n'existe pas" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Mot de passe incorrect" });
        }

        res.status(200).json({ message: "Connexion réussie" });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};
