function scroll() {
  let seo = document.querySelector(".seo");
  const blocks = document.querySelectorAll(".block");
  let Applications_header = document.querySelector(".Applications_header");
  let company = document.querySelector(".company");

  seo.addEventListener("click", () => {
    window.scrollTo({
      top: 1100,
      left: 0,
      behavior: "smooth",
    });
  });

  Applications_header.addEventListener("click", () => {
    window.scrollTo({
      top: 600,
      left: 0,
      behavior: "smooth",
    });
  });

  company.addEventListener("click", () => {
    window.scrollTo({
      top: 150,
      left: 0,
      behavior: "smooth",
    });
  });

  // Обработчик события скролла страницы
}

scroll();
