const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const message = form.elements["message"].value;
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
.responsive-image {
    max-width: 100%;
    height: auto;
    border: 5px solid black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 600px) {
    .responsive-image
  