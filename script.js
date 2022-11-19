const btn = document.querySelector("h1");
const container = document.getElementById("container");
const page = document.getElementsByTagName("body");

console.log(page);

page[0].addEventListener("keydown", (e) => {
  e.preventDefault();
  btn.style.display = "none";
  for (let i = 0; i < 3; i++) {
    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    card.appendChild(h2);
    container.appendChild(card);
  }

  const info = document.getElementsByTagName("h2");
  info[0].textContent = e.key;
  info[1].textContent = e.keyCode;
  info[2].textContent = e.code;
  const cards = document.getElementsByTagName("div");
  for (let i = 4; i < cards.length; i++) {
    cards[i].style.display = "none";
    cards[i].classList.add("removes");
  }
  const removes = document.querySelectorAll(".removes");
  for (let remove in removes) {
    removes[remove].parentNode.removeChild(removes[remove]);
  }
});
