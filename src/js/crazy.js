document.querySelector("#show-login").addEventListener("click", function() {
    document.querySelector(".crazy").classList.add("active");
});

document.querySelector("#show-contacts").addEventListener("click", function() {
    document.querySelector(".contacts-crazy").classList.add("active");
});

document.querySelectorAll(".crazy .close-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        document.querySelector(".crazy").classList.remove("active");
    });
});

document.querySelectorAll(".contacts-crazy .close-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        document.querySelector(".contacts-crazy").classList.remove("active");
    });
});