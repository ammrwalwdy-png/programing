
// Dark Mode

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

themeBtn.addEventListener("click", function () {

    const html = document.documentElement;

    const currentTheme = html.getAttribute("data-bs-theme");

    if (currentTheme === "light") {

        html.setAttribute("data-bs-theme", "dark");

        themeIcon.classList.replace(
            "bi-moon-stars-fill",
            "bi-sun-fill"
        );

    } else {

        html.setAttribute("data-bs-theme", "light");

        themeIcon.classList.replace(
            "bi-sun-fill",
            "bi-moon-stars-fill"
        );

    }

});


// Enroll Modal

const enrollButtons = document.querySelectorAll(".enroll-btn");

const selectedCourse = document.getElementById("selectedCourse");

enrollButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const courseName = button.getAttribute("data-course");

        selectedCourse.textContent = courseName;

    });

});


// Enrollment Form

const enrollForm = document.getElementById("enrollForm");

enrollForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("تم استلام طلب الاشتراك بنجاح!");

    enrollForm.reset();

    const modalElement = document.getElementById("enrollModal");

    const modal = bootstrap.Modal.getInstance(modalElement);

    modal.hide();

});
