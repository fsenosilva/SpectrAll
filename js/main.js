function sendEmail(event){

    const email = ['su','pp','ort','@','spe','ctr','all','.eu'];
    const to = encodeURIComponent(email.join(''));
    const name = encodeURIComponent(event.name.value);
    const body = encodeURIComponent(event.message.value);
    const subject = encodeURIComponent(`<INFO> ${name}`);

    let mailto = `mailto:${to}?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    event.preventDefault();


}

function copyEmail() {
  const emailInput = document.getElementById("emailAddress");
  const message = document.getElementById("copyMessage");

  navigator.clipboard.writeText(emailInput.value);
  message.classList.remove("hidden");
  setTimeout(() => message.classList.add("hidden"), 2000);
}
