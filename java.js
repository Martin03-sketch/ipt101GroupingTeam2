function showLoadingAndRedirect(page) {
    document.getElementById("loading-screen").style.display = "flex";

    setTimeout(function () {
        window.location.href = page;
    }, 200);
}

window.addEventListener("load", function () {

    setTimeout(function () {
        document.getElementById("loading-screen").classList.add("hide");

        setTimeout(function () {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("welcomePopup").classList.add("show");
        }, 500);

    }, 2000);
});

function closePopup() {
    document.getElementById("welcomePopup").classList.remove("show");
}


function login() {
    showLoadingAndRedirect("home.html");
}

function home() {
    showLoadingAndRedirect("home.html");
}

function c() {
    showLoadingAndRedirect("home.html");
}

function b() {
    showLoadingAndRedirect("AboutUs.html");
}

function d() {
    showLoadingAndRedirect("Gallery.html");
}

function contact() {
    showLoadingAndRedirect("Contact.html");
}

function service() {
    showLoadingAndRedirect("Services.html");
}

function e() {
    showLoadingAndRedirect("index.html");
}





if (document.querySelector('.slider-container')) {

    const swiper = new Swiper('.slider-container', {
        loop: true,
        grabCursor: true,   
        spaceBetween: 30,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });

}