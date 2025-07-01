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