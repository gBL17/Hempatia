function sendMail(params) {
  var tempParams = {
    selector: document.getElementById("selector").value,
    from_name: document.getElementById("fromName").value,
    to_name: document.getElementById("tel").value,
    message: document.getElementById("msg").value,
  };

  emailjs
    .send("service_rf2lnq7", "template_upu7ior", tempParams)
    .then(function (res) {
      console.log("Sucess", res.status);
      alert("Mensagem de sucesso!");
    });

  selector.value = "";
  fromName.value = "";
  tel.value = "";
  msg.value = "";
}
