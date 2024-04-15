const firstcheck = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const secondcheck = firstcheck.toLowerCase();
const thirdcheck = "0123456789";
const fourcheck = "&'!°-,;:?*\"$£~";
const range = document.getElementById("range");
const display = document.getElementById("display-passwords");
const action = document.getElementById("action");

function Actionbtn() {
  let password = "";
  let data = [];
  if (Datauppercase.checked) data.push(...firstcheck);
  if (DataLowercase.checked) data.push(...secondcheck);
  if (Datanumber.checked) data.push(...thirdcheck);
  if (Datasymbole.checked) data.push(...fourcheck);
  if (data.length === 0) {
    alert("cocher une option avant de generé un mots de passe😉");
    return;
  }
  for (let i = 0; i < range.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  display.value = password;
  display.select();
  navigator.clipboard.writeText(display.value);
  action.value="copié !"
  setTimeout(() => {
    action.value = "Générer des mots de passe";
}, 1000);
}
action.addEventListener("click", () => Actionbtn());
