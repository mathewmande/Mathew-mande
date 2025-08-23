document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 200) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});






document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".social-toggle");
  const wrapper = document.querySelector(".social-media-icons-wrapper");

  toggle.addEventListener("click", () => {
    wrapper.classList.toggle("active");
  });
});
