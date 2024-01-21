import { dapp_backend } from "../../declarations/dapp_backend";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await dapp_backend.greet(name);
  const goodie = await dapp_backend.good(name)

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;
  document.getElementById("action").innerText = goodie;

  return false;
});
