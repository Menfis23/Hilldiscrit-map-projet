// The top menu and footer, written once here and added to every page.
// To add or rename a page, change this list.
(function () {
  const pages = [
    ["index.html", "Home"], ["map.html", "Lot Map"], ["cycle.html", "Shelter Cycle"],
    ["roadmap.html", "Roadmap"], ["costs.html", "Costs"], ["involved.html", "Get Involved"]
  ];
  const here = location.pathname.split("/").pop() || "index.html";
  const header = document.createElement("header");
  header.className = "topnav";
  header.innerHTML = `<a class="brand" href="index.html">Hill District <span>Vision</span></a>
    <button class="menuBtn" aria-label="Menu" aria-expanded="false">Menu</button>
    <nav>${pages.map(([href, label]) => `<a href="${href}"${href === here ? ' class="on" aria-current="page"' : ""}>${label}</a>`).join("")}</nav>`;
  document.body.prepend(header);
  const btn = header.querySelector(".menuBtn");
  btn.onclick = () => { const open = header.classList.toggle("open"); btn.setAttribute("aria-expanded", open); };

  if (!document.body.dataset.nofooter) {
    const f = document.createElement("footer");
    f.className = "footer";
    f.innerHTML = `A church-led vision for the Hill District, Pittsburgh, by Rechab. Costs are rough ranges, not quotes.<br>
      Lot data: Allegheny County parcels and WPRDC property assessments. Map imagery © Esri, Maxar, Earthstar Geographics.`;
    document.body.append(f);
  }
})();
