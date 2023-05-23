const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATA_BASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log("Connexion à MongoDB échouée !", error));

const db = mongoose.connection;

db.on("error", (error) =>
  console.error("Erreur de connexion MongoDB :", error)
);
db.once("open", () =>
  console.log("Connexion à la base de données MongoDB établie.")
);

module.exports = db;
