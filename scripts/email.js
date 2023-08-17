function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    tel: document.getElementById("tel").value,
    mail: document.getElementById("mail").value,
    message: document.getElementById("msg").value,
  };

  emailjs
    .send("service_rf2lnq7", "template_upu7ior", tempParams)
    .then(function (res) {
      console.log("Sucess", res.status);
      alert("Mensagem enviada com sucesso!");
    });

  fromName.value = "";
  tel.value = "";
  mail.value = "";
  msg.value = "";
}
