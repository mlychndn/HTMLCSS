const btn = document.querySelectorAll(".btn");

// console.log(btn);

btn.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.target.parentElement.parentElement.classList.toggle("open");
  });
});
