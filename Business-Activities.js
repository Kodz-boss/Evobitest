var btn = document.querySelector(".fa-solid.fa-bars-staggered")
var menu = document.querySelector(".menu")
var icons = document.querySelector(".icons")
var service = document.querySelector(".abou1")
var drop = document.querySelector(".drop")
var servicee = document.querySelector(".abou")
var dropp = document.querySelector(".drop1")

btn.addEventListener("click", () =>{
    menu.classList.add("active");
});

icons.addEventListener("click", () =>{
    menu.classList.remove("active")
})

service.addEventListener("click", () => {
    drop.classList.toggle("dropp");
});

servicee.addEventListener("click", () => {
    dropp.classList.toggle("dropp1");
});

document.addEventListener("DOMContentLoaded", function () {
    var readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var additionalContent = event.target.previousElementSibling;

            if (additionalContent && additionalContent.classList.contains('additional-content')) {
                // Toggle visibility
                additionalContent.style.display = (additionalContent.style.display === 'none') ? 'block' : 'none';
            }
        });
    });
});

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    loop: true,
 });
