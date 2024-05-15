const menu = {
  overlay: document.querySelector(".menu-overlay"),
  list: document.querySelector(".menu__list"),
  listFooter: document.querySelector(".footer__products"),

  toggleMenu(selector) {
    document.querySelector(selector).addEventListener("click", () => {
      this.list.classList.toggle("menu__list--open");
      this.overlay.classList.toggle("menu-overlay--show");
    });
  },

  smoothBehavior(list, link) {
    list.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains(link)) {
        const href = e.target.getAttribute("href");
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      }
    });
  },

  removeStyle() {
    this.list.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("menu__link")) {
        this.list.classList.remove("menu__list--open");
        this.overlay.classList.remove("menu-overlay--show");
      }
    });
  },
};

menu.toggleMenu(".menu__btn");
menu.toggleMenu(".menu__close-btn");
menu.smoothBehavior(menu.list, "menu__link");
menu.smoothBehavior(menu.listFooter, "footer__products-link");
menu.removeStyle();
