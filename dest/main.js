function menuMobile() {
    let selMenu = document.querySelector(".header .btnmenu"),
        selNav = document.querySelector(".header .nav"),
        selNavOverlay = document.querySelector(".header .nav-overlay");

    selMenu.addEventListener("click", function() {
        this.classList.toggle("active");
        selNav.classList.toggle("active");
        selNavOverlay.classList.toggle("active");
    });
}
menuMobile();

function backToTop() {
    let selBtnTop = document.querySelector(".back-to-top");
    if (!selBtnTop) return;
    window.addEventListener("scroll", function() {
        let heightWindow = window.innerHeight;
        let scrollY = window.pageYOffset;
        if (scrollY > heightWindow) {
            selBtnTop.classList.add("active");
        } else {
            selBtnTop.classList.remove("active")
        }
    });

    selBtnTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0
        })
    })
}
backToTop();

function language() {
    let selLang = document.querySelector(".header__right-lang"),
        selText = document.querySelector(".header__right-lang .current .text"),
        selItem = document.querySelectorAll(".header__right-lang .select .item");
    selLang.addEventListener("click", function() {
        this.classList.toggle("active");
    });
    selItem.forEach(function(item) {
        item.addEventListener("click", function() {
            let addText = this.textContent;
            let text = selText.textContent;
            selText.innerHTML = addText;
            this.innerHTML = text;
        })
    })
}
language();

function popupVideo() {
    let selVideos = document.querySelectorAll(".scvideo .iconimg"),
        selPopupVideo = document.querySelector(".popupvideo"),
        selIframe = document.querySelector(".popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe"),
        selClose = document.querySelector(".popupvideo .popupvideo__inner .popupvideo__inner-iframe .close");

    selVideos.forEach(function(item) {
        item.addEventListener("click", function() {
            selPopupVideo.classList.add("active");

            let getDataId = item.getAttribute("data-video-src");
            selIframe.setAttribute("src", `https://www.youtube.com/embed/${getDataId}?autoplay=1`);
        });

        function closeHandle() {
            selPopupVideo.classList.remove("active");
            selIframe.setAttribute("src", ``);

        }
        selClose.addEventListener("click", function() {
            closeHandle();
        })
        selPopupVideo.addEventListener("click", function() {
            closeHandle();
        })
    })
}
popupVideo();

function sliderMesSager() {
    var selRun = document.querySelector('.scmessager .scmessager__left .textbox .run');
    if (!selRun) return;
    var flktySlider = new Flickity(selRun, {
        cellAlign: 'left',
        contain: true,
        draggable: '>1',
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
    });
    let selPrev = document.querySelector(".scmessager .scmessager__left .iconarow.--prev");
    let selNext = document.querySelector(".scmessager .scmessager__left .iconarow.--next");
    selPrev.addEventListener("click", function() {
        flktySlider.previous(true);
    });
    selNext.addEventListener("click", function() {
        flktySlider.next(true);
    });
}

function sliderHero() {
    let selListSlider = document.querySelector('.scslider__list');
    if (!selListSlider) return;
    let flktySlider = new Flickity(selListSlider, {
        cellAlign: 'left',
        contain: true,
        draggable: '>1',
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
    });
    let selPrev = document.querySelector(".iconarow.--prev");
    let selNext = document.querySelector(".iconarow.--next");
    selPrev.addEventListener("click", function() {
        flktySlider.previous(true);
    });
    selNext.addEventListener("click", function() {
        flktySlider.next(true);
    });
}

function sliderParNer() {
    let selListSlider = document.querySelector('.scparnerslider');
    if (!selListSlider) return;
    let flktySlider = new Flickity(selListSlider, {
        cellAlign: 'center',
        contain: true,
        draggable: '>1',
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        lazyLoad: true,
    });
}
window.addEventListener("load", function() {
    sliderHero();
    sliderParNer();
    sliderMesSager();
    sliderServices();

})


// SERVICES

function sliderServices() {
    let selListSlider = document.querySelector('.scsliderservices__list');
    if (!selListSlider) return;
    let flktySlider = new Flickity(selListSlider, {
        cellAlign: 'center',
        contain: true,
        draggable: '>1',
        // prevNextButtons: false,
        // pageDots: false,
        wrapAround: true,
    });
}

function fancyBox() {
    Fancybox.bind("[data-fancybox]", {
        infinite: false,
        keyboard: {
            Escape: "close",
            Delete: "close",
            Backspace: "close",
            PageUp: "next",
            PageDown: "prev",
            ArrowUp: "next",
            ArrowDown: "prev",
            ArrowRight: "next",
            ArrowLeft: "prev",
        },
        on: {
            ready: (fancybox) => {
                console.log(`fancybox #${fancybox.id} is ready!`);
            }
        },
        caption: function(fancybox, carousel, slide) {

        }
    })
}
fancyBox();

function tabsList() {
    let selTab = document.querySelectorAll(".sctabs__menu .sctabs__menu-item"),
        selTabList = document.querySelectorAll(".sctabs__list");
    selTab.forEach(function(tab) {
        tab.addEventListener("click", function() {
            selTab.forEach(function(tab) {
                tab.classList.remove("active");
            });
            this.classList.add("active");
            selTabList.forEach(function(list) {
                list.classList.remove("active");
            });
            let getId = this.getAttribute("data-tab");
            let tes = document.querySelector(".sctabs__list-" + getId).classList.add("active");
        });
    });
};
tabsList();