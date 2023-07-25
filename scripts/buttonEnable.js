function enableBotao() {
  var selector = document.getElementById("selector");
  var name = document.getElementById("fromName");
  var tel = document.getElementById("tel");
  var msg = document.getElementById("msg");

  var sendButton = document.getElementById("sendButton");

  if (
    selector.value !== "" &&
    name.value !== "" &&
    tel.value !== "" &&
    msg.value !== ""
  ) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

document.getElementById("selector").addEventListener("input", enableBotao);
document.getElementById("fromName").addEventListener("input", enableBotao);
document.getElementById("tel").addEventListener("input", enableBotao);
document.getElementById("msg").addEventListener("input", enableBotao);

// Chama a função para garantir que o botão esteja corretamente habilitado/desabilitado no início
enableBotao();
