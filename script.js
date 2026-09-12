// ===============================
// HUỲNH QUỐC NGHỊ WEBSITE
// ===============================

console.log(
    "Website Huỳnh Quốc Nghị đã được tải."
);


// Hiển thị năm hiện tại

const year = new Date().getFullYear();

const footerText = document.querySelector(
    "footer p"
);

if (footerText) {

    footerText.textContent =
        "© " + year + " Huỳnh Quốc Nghị";

}
