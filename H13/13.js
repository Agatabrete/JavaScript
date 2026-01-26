//Agata Brete Jõpiselg IT-23 26.01/2026


// ---- 13.1 Atribuutide lugemine, muutmine ja eemaldamine ----

const p = document.querySelector("p");

p.removeAttribute("id");
p.setAttribute("attr", "Mario");
console.log(p.getAttribute("attr"));


// ---- 13.2 Data-atribuutide kasutamine kaartidel ----

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const img = card.querySelector("img");
  const title = img.getAttribute("data-title");
  const description = img.getAttribute("data-description");

  const cardTitle = card.querySelector(".card-title");
  const cardText = card.querySelector(".card-text");

  cardTitle.textContent = title;
  cardText.textContent = description;
});
