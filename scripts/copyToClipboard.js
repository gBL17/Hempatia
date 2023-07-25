function copyToClipboard(value) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

const phoneLink = document.getElementById("phoneLink");
const emailLink = document.getElementById("emailLink");

phoneLink.addEventListener("click", () => {
  const phoneNumber = "SEU_TELEFONE_AQUI"; // Substitua pelo número de telefone
  copyToClipboard(phoneNumber);
  alert("Telefone copiado para a área de transferência: " + phoneNumber);
});

emailLink.addEventListener("click", () => {
  const emailAddress = "hempatiabr@gmail.com"; // Substitua pelo endereço de email
  copyToClipboard(emailAddress);
  alert("Email copiado para a área de transferência: " + emailAddress);
});
