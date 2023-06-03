function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    to_name: document.getElementById("email").value,
    message: document.getElementById("msg").value,
  };

  emailjs
    .send("service_rf2lnq7", "template_upu7ior", tempParams)
    .then(function (res) {
      console.log("Sucess", res.status);
      alert("Mensagem de sucesso!");
    });

  fromName.value = "";
  email.value = "";
  msg.value = "";
}
