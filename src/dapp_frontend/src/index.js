// import { dapp_backend } from "../../declarations/dapp_backend";
import { createActor, dapp_backend } from "../../declarations/dapp_backend";
// import {createActor, dapp_backend} from "../../declarations/dapp_backend";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";


let actor = dapp_backend;
console.log(process.env.CANISTER_ID_INTERNET_IDENTITY);
const whoAmIButton = document.getElementById("whoAmI");
whoAmIButton.onclick = async (e) => {
    e.preventDefault();
    whoAmIButton.setAttribute("disabled", true);
    const principal = await actor.whoami();
    whoAmIButton.removeAttribute("disabled");
    document.getElementById("principal").innerText = principal.toString();
    return false;
};
const loginButton = document.getElementById("login");
loginButton.onclick = async (e) => {
    e.preventDefault();
    let authClient = await AuthClient.create();
    // start the login process and wait for it to finish
    await new Promise((resolve) => {
        authClient.login({
            identityProvider:
                process.env.DFX_NETWORK === "ic"
                    ? "https://identity.ic0.app"
                    : `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943`,
            onSuccess: resolve,
        });
    });
    const identity = authClient.getIdentity();
    const agent = new HttpAgent({ identity });
    actor = createActor(process.env.CANISTER_ID_II_INTEGRATION_BACKEND, {
        agent,
    });
    redapp

  }
  document.getElementById('login').addEventListener('click', function () {
    // Simulating a successful login, you'd replace this with your actual login logic
    document.getElementById('body').classList.remove('body');
    document.getElementById('login').classList.add('hidden');
    document.getElementById('whoAmI').classList.add('hidden');

  });
  document.getElementById('button').addEventListener('click', function () {
    // Simulating a successful login, you'd replace this with your actual login logic
    document.getElementById('body').classList.add('hidden');
    document.getElementById('button').classList.remove('hidden');
    document.getElementById('whoAmI').classList.add('hidden');

  });

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();
  const diagnosis = document.getElementById("diagnosis").value.toString();
  const treatment  = document.getElementById("treatment").value.toString();

  button.setAttribute("disabled", true);

  



  // Interact with foo actor, calling the greet method
  const greeting = await dapp_backend.greet(name);
  const goodie = await dapp_backend.good(diagnosis)
  const treat = await dapp_backend.good(treatment)

  button.removeAttribute("disabled");
  console.log(greeting);



  document.getElementById("greeting").innerText = greeting;
  document.getElementById("action").innerText = goodie;
  // document.getElementById("treatment").innerText = treat;

  return false;
});


// sudo dfx canister id dapp_backend  
// Example JavaScript code for interacting with a Motoko canister
// var record = {
//     name: greeting,
//     diagnosis: goodie,
//     treatment: treatment
//   };
// // Convert the JavaScript object to a Candid value
//   var recordCandid = await window.ic.Candid.encodeCandid(record);

// // Define the canister ID (replace 'YOUR_CANISTER_ID' with the actual canister ID)
// var canisterId = "aovwi-4maaa-aaaaa-qaagq-cai";


// // Define the canister's endpoint method (in this case, the storeRecord method)
// var endpoint = "storeRecord";

// // Create the request to the canister
// var request = {
//     canisterId: canisterId,
//     method: endpoint,
//     arg: recordCandid,
//   };

//   // Make the request to the canister
// var response = await window.ic.plug.request(request);

// // Handle the response
// console.log('Record stored successfully:', response);


