// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 8081;

mongoose.connect('mongodb://127.0.0.1:27017/login_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connecté à la base de données MongoDB");
}).catch(err => {
    console.error("Erreur de connexion à la base de données", err);
    process.exit();
});

app.use(bodyParser.json());
app.use(cors());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Serveur est en écoute sur le port ${PORT}`);
});
