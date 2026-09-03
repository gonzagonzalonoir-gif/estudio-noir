(function () {
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var header = document.querySelector("[data-header]");
  var bar = document.querySelector("[data-progress]");
  function onScroll() {
    var y = window.scrollY;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    if (header) header.classList.toggle("is-solid", y > window.innerHeight * 0.8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  var els = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  if (reduced) {
    els.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  els.forEach(function (el) {
    var delay = parseFloat(el.getAttribute("data-delay") || "0");
    el.style.transitionDelay = delay + "s";
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: "0px 0px -6% 0px" });
  els.forEach(function (el) { io.observe(el); });
  requestAnimationFrame(function () {
    els.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95) {
        el.classList.add("is-visible");
        io.unobserve(el);
      }
    });
  });
  var heroMedia = document.querySelector("[data-hero-media]");
  if (heroMedia) {
    requestAnimationFrame(function () { heroMedia.style.transform = "scale(1)"; });
  }
})();
