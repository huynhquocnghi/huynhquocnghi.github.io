/* ==================================================
   HUỲNH QUỐC NGHỊ
   WEBSITE JAVASCRIPT
================================================== */


/* ==================================================
   DARK MODE
================================================== */

const themeButton =
    document.getElementById("themeButton");


const savedTheme =
    localStorage.getItem("hqn-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";

}


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        themeButton.textContent = "☀️";

        localStorage.setItem(
            "hqn-theme",
            "dark"
        );

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem(
            "hqn-theme",
            "light"
        );

    }

});


/* ==================================================
   MOBILE MENU
================================================== */

const menuButton =
    document.getElementById("menuButton");


const mainNav =
    document.getElementById("mainNav");


menuButton.addEventListener("click", () => {

    mainNav.classList.toggle("active");

});


document
    .querySelectorAll("#mainNav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("active");

        });

    });


/* ==================================================
   CURRENT YEAR
================================================== */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();


/* ==================================================
   BACK TO TOP
================================================== */

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


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(
        ".quick-card, " +
        ".info-panel, " +
        ".personality-card, " +
        ".social-card, " +
        ".channel-card"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: .15
        }

    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ==================================================
   PREVENT EMPTY HASH JUMP
================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    targetId === "#"
                ) {

                    event.preventDefault();

                }

            }
        );

    });
