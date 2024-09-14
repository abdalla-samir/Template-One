//scroll top
let scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 1000) {
        scrollTop.classList.add("show");
    } else {
        scrollTop.classList.remove("show");
    }
});

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


// skills bar
let skillSection = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span")
window.addEventListener("scroll", () => {
    if (window.scrollY >= skillSection.offsetTop) {
        spans.forEach(element => {
            let width = element.dataset.width;
            element.style.width = `${width}%`
        });
    }
});

// number features
let start = false;
let stateSection = document.querySelector(".stats")
let spanNumber = document.querySelectorAll(".stats .container .cards .box .number");

window.addEventListener("scroll", () => {
    if (window.scrollY >= stateSection.offsetTop) {
        if (!start) {
            spanNumber.forEach((element) => counNumbers(element));
        }
        start = true;
    }
});

function counNumbers(element) {
    let goal = element.dataset.number;
    let code = setInterval(() => {
        element.textContent++;
        if (element.textContent == goal) {
            clearInterval(code);
        }
    }, 3000 / goal);
}