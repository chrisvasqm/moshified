const collapsibles = document.querySelectorAll(".collapsible__header");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);