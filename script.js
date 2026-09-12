/* ========================================
   HUỲNH QUỐC NGHỊ
   WEBSITE JAVASCRIPT
======================================== */


/* ---------- MOBILE MENU ---------- */

const menuButton =
    document.getElementById("menuButton");

const menu =
    document.querySelector(".menu");


menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

});


/* ---------- CLOSE MENU WHEN CLICK ---------- */

document.querySelectorAll(".menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

        });

    });


/* ---------- DARK MODE ---------- */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (
        document.body.classList.contains("dark")
    ) {

        themeButton.textContent = "☀️";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


/* ---------- REMEMBER THEME ---------- */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";

}


/* ---------- CURRENT YEAR ---------- */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();


/* ---------- BACK TO TOP ---------- */

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ---------- FADE ANIMATION ---------- */

const sections =
    document.querySelectorAll(
        ".section, .stats"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.1
        }

    );


sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(30px)";

    section.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(section);

});
