// scroll to Top button

let btn = document.querySelector(".btn")

window.onscroll = function() {
    if (window.scrollY >= 500) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
};

btn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

// addEventListener("click", function() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
// });
// ###############
// container Item Display by navbar
let containerShop = document.querySelector("#shopping-cart")
let shopBox = document.querySelector(".container-shop")

containerShop.onclick = function() {
        shopBox.classList.toggle("active")
    }
    // ###########
    // search input display by navbar

let searchBtn = document.querySelector("#search-btn")

let searchBox = document.getElementById("search-box")


searchBtn.addEventListener("click", function() {
    searchBox.classList.toggle("active")
})

// this funcution Testing
// searchBox.onclick = function() {
//     shopBox.style.display = "none"
// }


//  Navbar display

let navBtn = document.getElementById("bars-btn")
let ulNav = document.querySelector(".ulNav")
navBtn.onclick = function() {
    ulNav.classList.toggle("active")
}