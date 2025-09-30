(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("fade-in")) {
            entry.target.classList.add("play");
          }
          if (entry.target.hasAttribute("data-stagger")) {
            entry.target.classList.add("play");
          }
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  document.querySelectorAll(".fade-in, [data-stagger]").forEach((el) => {
    observer.observe(el);
  });
})();

document.querySelectorAll(".search").forEach((input) => {
  const list = document.querySelector(input.dataset.target);
  if (!list) return;
  const links = list.querySelectorAll("a");
  input.addEventListener("input", () => {
    const val = input.value.toLowerCase();
    links.forEach(
      (a) =>
        (a.style.display = a.textContent.toLowerCase().includes(val)
          ? ""
          : "none")
    );
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let i = [];
  let isSearchLoaded = false;

  const t = document.getElementById("searchInput");
  const l = document.getElementById("searchResults");
  const m = document.getElementById("menu");

  if (!t || !l || !m) return;

  t.addEventListener("focus", () => {
    if (isSearchLoaded) return;

    fetch("/search-index.json")
      .then((r) => r.json())
      .then((d) => {
        i = d;
        isSearchLoaded = true;
      });
  });

  t.addEventListener("input", (e) => {
    if (!isSearchLoaded) return;

    const q = e.target.value.toLowerCase();
    l.innerHTML = "";

    const r = i.filter((x) => x.toLowerCase().includes(q));
    m.style.display = q && r.length ? "none" : "";
    l.style.display = q && r.length ? "" : "none";

    r.slice(0, 10).forEach((x) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "/" + x + "/";
      a.textContent = x;
      li.appendChild(a);
      l.appendChild(li);
    });
  });
});
