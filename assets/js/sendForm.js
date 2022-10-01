const sendForm = (e) => {
  e.preventDefault();
  btnSendingForm.classList.remove("d-none");
  const nombre = e.target[0].value;
  const email = e.target[1].value;
  const mensaje = e.target[2].value;
  const formData = `nombre=${nombre}&email=${email}&mensaje=${mensaje}`;

  $.ajax({
    url: "./contact-form/contacto.php",
    type: "POST",
    data: formData,
    success: function (data) {
      btnSendingForm.classList.add("d-none");
      formContact.reset();
      formResponse.innerHTML = "";
      formResponse.innerHTML = data;
    },
  }).fail(function () {
    btnSendingForm.classList.add("d-none");
    formContact.reset();
    formResponse.innerHTML = "";
    formResponse.innerHTML = "<p>Ocurrió un error. Intenta mas tarde</p>";
  });
};

const formContact = document.querySelector("#formContact");
const formResponse = document.querySelector("#formResponse");
const btnSendingForm = document.querySelector("#btnSendingForm");

formContact.addEventListener("submit", sendForm);
