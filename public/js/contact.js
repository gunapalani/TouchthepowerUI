var form = document.getElementById("form-data");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (true) {
      fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("form-data")),
      })
        .then((response) => response.json())
        .then(() => {
          togglePopOpen();
        });
    } else {
      console.error("submission failed");
    }
  });
}
