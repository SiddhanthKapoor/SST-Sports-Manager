document.getElementById("title").addEventListener("click", function() {
   
});

const currentURL = window.location.href;
let currentRes = currentURL.split("/");
currentRes = currentRes[currentRes.length - 1];
console.log({currentRes});

const currentUser = JSON.parse(localStorage.getItem("user"));
console.log({currentUser});

if (currentUser == null) {
  window.location.href = "index.html";
  alert("Please Login");
}