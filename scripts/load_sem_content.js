document.addEventListener("DOMContentLoaded", () => {

  fetch('fragments/sem_meta.html')
    .then(response => response.text())
    .then(html => {
      sem_content.innerHTML = html;
    })
    .catch(err => {
      console.error("Ошибка загрузки semantic_model.html", err);
    });

});


page_content.addEventListener('click', function () {

  sem_content.innerHTML = ""

  fetch('fragments/sem_content.html')
    .then(response => response.text())
    .then(html => {
      sem_content.innerHTML = html;
    })
    .catch(err => {
      console.error("Ошибка загрузки semantic_model.html", err);
    });

})


page_meta.addEventListener('click', function () {

  sem_content.innerHTML = ""

  fetch('fragments/sem_meta.html')
    .then(response => response.text())
    .then(html => {
      sem_content.innerHTML = html;
    })
    .catch(err => {
      console.error("Ошибка загрузки semantic_model.html", err);
    });

})


page_additional.addEventListener('click', function () {

  sem_content.innerHTML = ""

  fetch('fragments/sem_additional.html')
    .then(response => response.text())
    .then(html => {
      sem_content.innerHTML = html;
    })
    .catch(err => {
      console.error("Ошибка загрузки semantic_model.html", err);
    });

})



