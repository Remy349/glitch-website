document.addEventListener('DOMContentLoaded', () => {
    /* ===> SHOW MENU <=== */
    const navMenu = document.getElementById('navMenu'),
        navToggle = document.getElementById('navToggle'),
        navClose = document.getElementById('navClose');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    /* ===> REMOVE MENU MOBILE <=== */
    const navLink = document.querySelectorAll('.nav__link');

    function removeMenuMobile() {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('show-menu');
    }

    navLink.forEach(navL => navL.addEventListener('click', removeMenuMobile));

    /* ===> CHANGE BACKGROUND HEADER <=== */
    function scrollHeader() {
        const header = document.getElementById('header'),
            navMenu = document.getElementById('navMenu');

        if (window.innerWidth < 768) {
            if (this.scrollY >= 80) {
                header.classList.add('scroll-header');
                navMenu.style.background = '#4361ee';
            } else {
                header.classList.remove('scroll-header');
                navMenu.style.background = 'linear-gradient(to right, #4361ee, #f72585)';
            }
        } else {
            if (this.scrollY >= 80) {
                header.classList.add('scroll-header');
                navMenu.style.background = '#4361ee';
            } else {
                header.classList.remove('scroll-header');
                navMenu.style.background = 'transparent';
            }
        }
    }

    window.addEventListener('scroll', scrollHeader);

    /* ===> SERVICIOS ACTIVE MODAL <=== */
    const modalViews = document.querySelectorAll('.servicios__content-modal'),
        modalBtns = document.querySelectorAll('.servicios__content-btns'),
        modalCloses = document.querySelectorAll('.servicios__content-modal_close');

    let modal = function(modalClick) {
        modalViews[modalClick].classList.add('active-modal');
    }

    modalBtns.forEach((modalBtn, i) => {
        modalBtn.addEventListener('click', () => {
            modal(i);
        });
    });

    modalCloses.forEach(modalClose => {
        modalClose.addEventListener('click', () => {
            modalViews.forEach(modalView => {
                modalView.classList.remove('active-modal');
            });
        });
    });

    /* ===> PORTAFOLIO VIDEOS <=== */
    const videoFile = document.getElementById('videoFile'),
        videoBtn = document.getElementById('videoBtn'),
        videoIcon = document.getElementById('videoIcon');
    const videoFileTwo = document.getElementById('videoFileTwo'),
        videoBtnTwo = document.getElementById('videoBtnTwo'),
        videoIconTwo = document.getElementById('videoIconTwo');

    function playPause() {
        if (videoFile.paused) {
            // Play video
            videoFile.play();
            // Change the icon
            videoIcon.classList.add('ri-pause-fill');
            videoIcon.classList.remove('ri-play-fill');
        } else {
            // Pause video
            videoFile.pause();
            // Change the icon
            videoIcon.classList.remove("ri-pause-fill");
            videoIcon.classList.add("ri-play-fill");
        }
    }

    function playPauseTwo() {
        if (videoFileTwo.paused) {
            // Play video
            videoFileTwo.play();
            // Change the icon
            videoIconTwo.classList.add('ri-pause-fill');
            videoIconTwo.classList.remove('ri-play-fill');
        } else {
            // Pause video
            videoFileTwo.pause();
            // Change the icon
            videoIconTwo.classList.remove("ri-pause-fill");
            videoIconTwo.classList.add("ri-play-fill");
        }
    }

    videoBtn.addEventListener('click', playPause);
    videoBtnTwo.addEventListener('click', playPauseTwo);

    function finalVideo() {
        // Video end, icon change
        videoIcon.classList.remove("ri-pause-fill");
        videoIcon.classList.add("ri-play-fill");
    }

    function finalVideoTwo() {
        // Video end, icon change
        videoIconTwo.classList.remove("ri-pause-fill");
        videoIconTwo.classList.add("ri-play-fill");
    }

    videoFile.addEventListener('ended', finalVideo);
    videoFileTwo.addEventListener('ended', finalVideoTwo);

    /* ===> SWIPER CARRUSEL <=== */
    const swiper = new Swiper('.portafolio__carrusel', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 32,
        coverflowEffect: {
            rotate: 0,
        },
    });
});
