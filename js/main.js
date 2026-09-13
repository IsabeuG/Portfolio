(function () {
  // Featured projects tab filter (home page only)
  var tabs = document.querySelectorAll(".projects__tab");
  var panels = document.querySelectorAll(".projects__grid[data-panel]");

  if (tabs.length && panels.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var target = tab.getAttribute("data-tab");

        tabs.forEach(function (t) {
          var isActive = t === tab;
          t.classList.toggle("is-active", isActive);
          t.setAttribute("aria-selected", String(isActive));
        });

        panels.forEach(function (panel) {
          panel.hidden = panel.getAttribute("data-panel") !== target;
        });
      });
    });
  }

  // Highlight the current section link in the floating nav
  var navLinks = document.querySelectorAll(
    ".nav__brand[href^='#'], .nav__link[href^='#']"
  );
  var sections = Array.prototype.map
    .call(navLinks, function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = document.querySelector(
            "[href='#" + entry.target.id + "']"
          );
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) {
              l.classList.remove("is-active");
            });
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // Subtle cursor-tilt parallax on the hero portrait
  var portrait = document.querySelector(".hero__portrait");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var supportsHover = window.matchMedia("(hover: hover)").matches;

  if (portrait && !reduceMotion && supportsHover) {
    var img = portrait.querySelector("img");
    var maxTilt = 2; // degrees

    portrait.addEventListener("mousemove", function (event) {
      var rect = portrait.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width - 0.5;
      var y = (event.clientY - rect.top) / rect.height - 0.5;

      var rotateY = x * maxTilt * 2;
      var rotateX = y * -maxTilt * 2;

      img.style.transform =
        "scale(1.03) rotateX(" + rotateX.toFixed(2) + "deg) rotateY(" + rotateY.toFixed(2) + "deg)";
    });

    portrait.addEventListener("mouseleave", function () {
      img.style.transform = "";
    });
  }
})();
