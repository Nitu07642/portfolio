const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});




// Initialize EmailJS
emailjs.init("u4y5f7UiKEFcXhtuP");

// Green Success Alert
function showSuccess(message) {
  const alertBox = document.createElement("div");
  alertBox.textContent = message;
  alertBox.style.position = "fixed";
  alertBox.style.top = "20px";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translateX(-50%)";
  alertBox.style.backgroundColor = "#4CAF50";
  alertBox.style.color = "#fff";
  alertBox.style.padding = "12px 24px";
  alertBox.style.borderRadius = "6px";
  alertBox.style.fontSize = "16px";
  alertBox.style.zIndex = "1000";
  document.body.appendChild(alertBox);
  setTimeout(() => alertBox.remove(), 4000);
}

// Handle Form Submit
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_portfolio_07642", "template_msl0ays", this)
    .then(() => {
      showSuccess("Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("Failed to send: " + JSON.stringify(error));
    });
});