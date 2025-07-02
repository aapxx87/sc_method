






btn_hide_navbar.addEventListener('click', function () {
  container_navbar.classList.remove("visible")
  container_navbar.classList.add("hidden")
})

btn_show_navbar.addEventListener('click', function () {
  container_navbar.classList.remove("hidden")
  container_navbar.classList.add("visible")
})