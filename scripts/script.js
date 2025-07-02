// Selectors

const container_navbar = document.querySelector('.navbar-container')

const btn_hide_navbar = document.querySelector('.hide-navbar-btn')
const btn_show_navbar = document.querySelector('.show-navbar-btn')


document.addEventListener("DOMContentLoaded", () => {
  fetch('fragments/semantic_model.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('semflow-container').innerHTML = html;
    })
    .catch(err => {
      console.error("Ошибка загрузки semantic_model.html", err);
    });
});



btn_hide_navbar.addEventListener('click', function () {
  container_navbar.classList.remove("visible")
  container_navbar.classList.add("hidden")
})

btn_show_navbar.addEventListener('click', function () {
  container_navbar.classList.remove("hidden")
  container_navbar.classList.add("visible")
})