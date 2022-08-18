const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errorMsg = document.getElementById("err-msg");
const submitButton = document.getElementById("submit");
const hamburgerButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

linkForm.addEventListener("submit", formSubmit);
const isValidUrl = (urlString) => {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};
function formSubmit(e) {
  e.preventDefault();
  let { value } = input;
  if (value === "" || !isValidUrl(value)) {
    errorMsg.classList.remove("hidden");
    input.classList.add("border-red");
  } else {
    errorMsg.classList.add("hidden");
    input.classList.remove("border-red");
    input.value = "";
    alert("Successful");
  }
}

function toggleDisplay() {
  menu.classList.toggle("hidden");
  hamburgerButton.classList.toggle("open");
}
// Listening to the hamburger button
hamburgerButton.addEventListener("click", toggleDisplay);
