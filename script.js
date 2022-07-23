let pwd = document.querySelector("#password");
let confirmPwd = document.querySelector("#confirm-pwd");
let btn = document.querySelector("button");
let errorText = document.querySelector(".errorText");
const text = document.createTextNode("*passwords dont match");

// pwd.addEventListener("focusout", (e) => console.log(e));
btn.addEventListener("click", () => {
  if (pwd.value !== confirmPwd.value) {
    pwd.classList.add("error");
    confirmPwd.classList.add("error");
    errorText.appendChild(text);
  } else {
    pwd.classList.remove("error");
    confirmPwd.classList.remove("error");
    errorText.textContent = "\u00A0";
  }
});
