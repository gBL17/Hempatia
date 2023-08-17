function enableButton() {
  var name = document.getElementById("fromName");
  var tel = document.getElementById("tel");
  var mail = document.getElementById("mail");
  var msg = document.getElementById("msg");

  var sendButton = document.getElementById("sendButton");

  if (
    name.value !== "" &&
    tel.value !== "" &&
    mail.value !== "" &&
    msg.value !== ""
  ) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

document.getElementById("fromName").addEventListener("input", enableButton);
document.getElementById("tel").addEventListener("input", enableButton);
document.getElementById("mail").addEventListener("input", enableButton);
document.getElementById("msg").addEventListener("input", enableButton);

// Chama a função para garantir que o botão esteja corretamente habilitado/desabilitado no início
enableButton();
