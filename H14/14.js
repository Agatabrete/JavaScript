//Agata Brete Jõpiselg IT-23 26.01/2026

const items = document.querySelectorAll(".list-group-item");

items.forEach(item => {
  const text = item.textContent.toLowerCase();

  if (text.includes("ootel")) {
    item.classList.add("list-group-item-warning");
  } 
  else if (text.includes("tehtud")) {
    item.classList.add("list-group-item-success");
  } 
  else if (text.includes("viga")) {
    item.classList.add("list-group-item-danger");
  }
});
