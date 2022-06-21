module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo invalide, 3 caractères minimum";

  if (err.message.includes("email")) errors.email = "Email invalide";

  if (err.message.includes("password"))
    errors.password = "Mot de passe invalide, 6 caractères minimum";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Pseudo déjà utilisé";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Email déjà utilisé";

  return errors;
};

// erreur connexion
module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("Email")) errors.email = "Email inconnu";

  if (err.message.includes("password"))
    errors.password = "Mot de passe incorrect";
  return errors;
};

module.exports.uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };

  if (err.message.includes("invalid file"))
    errors.format = "Mauvais format de fichier";

  if (err.message.includes("max size"))
    errors.maxSize = "Fichier de 1mo maximum";
  return errors;
};
