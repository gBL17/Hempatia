document.addEventListener("DOMContentLoaded", function () {
  var telefoneInput = document.getElementById("tel");

  Inputmask("(99) 99999-9999").mask(telefoneInput);
});
