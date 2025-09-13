// document.addEventListener("DOMContentLoaded", () => {
//   let i = [];
//   fetch("/search-index.json")
//     .then((r) => r.json())
//     .then((d) => {
//       i = d;
//     });
//   const t = document.getElementById("searchInput"),
//     l = document.getElementById("searchResults"),
//     m = document.getElementById("menu");
//   if (!t || !l || !m) return;
//   t.addEventListener("input", (e) => {
//     const q = e.target.value.toLowerCase();
//     l.innerHTML = "";
//     const r = i.filter((x) => x.name.toLowerCase().includes(q));
//     m.style.display = q && r.length ? "none" : "";
//     l.style.display = q && r.length ? "" : "none";
//     r.slice(0, 10).forEach((x) => {
//       const li = document.createElement("li"),
//         a = document.createElement("a");
//       a.href = "/" + x.slug + "/";
//       a.textContent = x.name;
//       li.appendChild(a);
//       l.appendChild(li);
//     });
//   });
// });

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
