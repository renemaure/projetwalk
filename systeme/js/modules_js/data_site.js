
export async function getTextJon() {
  const response = await fetch('systeme/donnees/walk2026.json');
  const json = await response.json();
  return json;
}
export async function getDataJon() {
  const response = await fetch('systeme/php/recup_donne_BDD.php');
  const json = await response.json();
  return json;
}
export async function getDataMonde() {
  const chemDatasAvatars = 'systeme/php/gestion_avatar.php'
  const response = await fetch(chemDatasAvatars);
  const json = await response.json();
  return json;
}
export async function getTextregles() {
  const response = await fetch('systeme/donnees/regles_walk.json');
  const json = await response.json();
  return json;
}

