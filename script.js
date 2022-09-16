/*---------menu-----------*/

((d) => {
  const $menuBtn = document.querySelector(".menu-btn"),
    $menu = document.querySelector(".menu");

  $menuBtn.addEventListener("click", (e) => {
    $menuBtn.firstElementChild.classList.toggle("none");
    $menuBtn.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $menuBtn.firstElementChild.classList.remove("none");
    $menuBtn.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/*-------Formulario----------*/

((d) => {
  const $form = d.querySelector(".form-contact"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/davidmolina258@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => {
        res.ok ? res.json() : Promise.reject(res);
      })
      .then((json) => {
        console.log(json);
        location.hash = `#gracias`;
        $form.reset();
      })
      .catch((error) => {
        console.log(error);
        let message =
          error.statusText || "ocurrio un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${error.status}:${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);

// Efecto Escritura

const typed = new Typed(".typed", {
  // strings: ["<i>casa,</i>", "<i>mundo,</i>", "<i>estilo,</i>", "<i>web.</i>"],
  stringsElement: "#cadenas-textos",
  typeSpeed: 75,
  backSpeed: 75,
  startDelay: 500,
  smartBackspace: true,
  shuffle: false,
  backDelay: 500,
  loop: false,
  loopCount: false,
  showCursor: true,
  contentType: "html",
});

// forma #1
{
  /* <div class="hero-image-content">
          <h2 class="hero-image-tittle" style="--hero-text-color: var(--white-color);">
            Bienvenidos <br>a mi <span class="typed"></span>
          </h2>
          <a href="#contacto" class="btn">CONTACTAME</a>
        </div> */
}
