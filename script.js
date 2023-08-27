const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animationX');
        } else {
            entry.target.classList.remove('animationX');
        }
    });
});

const allElements = document.querySelectorAll('.loading');
allElements.forEach((el) => observer.observe(el));
// ------------------------------- //
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animationY');
        } else {
            entry.target.classList.remove('animationY');
        }
    });
});

const allElements1 = document.querySelectorAll('.loading1');
allElements1.forEach((el) => observer1.observe(el));
