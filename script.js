/* ==================================================
   HUỲNH QUỐC NGHỊ
   OFFICIAL WEBSITE
================================================== */


/* ==================================================
   DARK MODE
================================================== */

const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("hqn-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    themeButton.textContent =
        isDark ? "☀️" : "🌙";

    localStorage.setItem(
        "hqn-theme",
        isDark ? "dark" : "light"
    );
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

document.getElementById("year").textContent =
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
   VIDEO DATA
==================================================

   CHỈ THÊM VIDEO KHI:
   1. Video thực sự thuộc Ngô Bảo An Gaming.
   2. Huỳnh Quốc Nghị thực sự xuất hiện.
   3. Đã kiểm tra đúng video ID.

   Ví dụ:

   {
       id: "VIDEO_ID",
       title: "Tên video chính xác",
       description: "Mô tả ngắn",
       date: "Ngày đăng nếu biết"
   }

================================================== */

const featuredVideos = [

    /*
    {
        id: "VIDEO_ID",
        title: "Tên video chính xác",
        description: "Huỳnh Quốc Nghị xuất hiện trong video.",
        date: "2026"
    },
    */

];


/* ==================================================
   RENDER VIDEO CARDS
================================================== */

const appearanceGrid =
    document.getElementById("appearanceGrid");


function renderFeaturedVideos() {

    if (!appearanceGrid) return;


    if (featuredVideos.length === 0) {

        appearanceGrid.innerHTML = `
            <div class="empty-video">

                <div class="empty-video-icon">
                    🎬
                </div>

                <h3>
                    Đang cập nhật danh sách video
                </h3>

                <p>
                    Các video sẽ được thêm sau khi
                    xác định chính xác những video
                    có sự xuất hiện của Huỳnh Quốc Nghị.
                </p>

                <a
                    href="https://www.youtube.com/@NgoBaoAnGaming"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="button primary">
                    Xem Ngô Bảo An Gaming ↗
                </a>

            </div>
        `;

        return;
    }


    appearanceGrid.innerHTML =
        featuredVideos.map(video => `

            <article class="appearance-card">

                <div class="appearance-video">

                    <iframe
                        src="https://www.youtube.com/embed/${video.id}"
                        title="${video.title}"
                        loading="lazy"
                        allowfullscreen>
                    </iframe>

                </div>

                <div class="appearance-content">

                    <span>
                        NGÔ BẢO AN GAMING
                    </span>

                    <h3>
                        ${video.title}
                    </h3>

                    <p>
                        ${video.description}
                    </p>

                    ${
                        video.date
                            ? `<small>📅 ${video.date}</small>`
                            : ""
                    }

                    <a
                        href="https://www.youtube.com/watch?v=${video.id}"
                        target="_blank"
                        rel="noopener noreferrer">
                        Xem video ↗
                    </a>

                </div>

            </article>

        `).join("");
}


renderFeaturedVideos();


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(
        ".quick-card, " +
        ".info-panel, " +
        ".achievement-card, " +
        ".personality-card, " +
        ".social-card, " +
        ".channel-card, " +
        ".appearance-card"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ==================================================
   PREVENT EMPTY HASH
================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (targetId === "#") {
                event.preventDefault();
            }

        });

    });
