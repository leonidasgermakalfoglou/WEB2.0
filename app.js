(() => {
  const image = document.getElementById("gallery-image");
  const emptyState = document.getElementById("empty-state");
  const previousButton = document.getElementById("previous-image");
  const nextButton = document.getElementById("next-image");
  const counter = document.getElementById("image-counter");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const pages = [...document.querySelectorAll(".page")];

  let images = [];
  let currentIndex = 0;

  // Shuffle once on each fresh page load, then keep that order while browsing.
  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function showImage(index) {
    if (!images.length) return;
    currentIndex = (index + images.length) % images.length;
    image.src = images[currentIndex];
    image.alt = `Photograph ${currentIndex + 1} of ${images.length}`;
    image.classList.add("is-visible");
    emptyState.classList.remove("is-visible");
    counter.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;
    previousButton.disabled = images.length < 2;
    nextButton.disabled = images.length < 2;
  }

  function showEmptyState() {
    image.classList.remove("is-visible");
    emptyState.classList.add("is-visible");
    counter.textContent = "";
    previousButton.disabled = true;
    nextButton.disabled = true;
  }

  previousButton.addEventListener("click", () => showImage(currentIndex - 1));
  nextButton.addEventListener("click", () => showImage(currentIndex + 1));

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && !previousButton.disabled) showImage(currentIndex - 1);
    if (event.key === "ArrowRight" && !nextButton.disabled) showImage(currentIndex + 1);
  });

  function setPage(pageName) {
    const validPage = ["images", "about", "contact"].includes(pageName) ? pageName : "images";
    pages.forEach((page) => {
      page.hidden = page.id !== validPage;
    });
    navLinks.forEach((link) => {
      const active = link.dataset.page === validPage;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setPage(link.dataset.page));
  });

  window.addEventListener("hashchange", () => setPage(location.hash.slice(1)));
  setPage(location.hash.slice(1) || "images");

  // gallery.json is generated automatically by the GitHub Actions workflow
  // from every supported image file placed in /images.
  fetch("gallery.json")
    .then((response) => {
      if (!response.ok) throw new Error("Gallery list not found");
      return response.json();
    })
    .then((list) => {
      if (!Array.isArray(list) || list.length === 0) {
        showEmptyState();
        return;
      }
      images = shuffle(list);
      showImage(0);
    })
    .catch(() => showEmptyState());
})();
