

    // // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
    //!Меню бургер
    const headerList = document.querySelector('.header__list');
    const headerItem = document.querySelectorAll('.header__item');
    const headerBurger = document.querySelector('.header__burger');

    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('header__burger_active');
        headerList.classList.toggle('header__list_active');
    });

    headerItem.forEach(item => {
        item.addEventListener('click', () => {
            headerBurger.classList.toggle('header__burger_active');
            headerList.classList.toggle('header__list_active');
        });
    });
    // // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //

    //!Слайдер
    // // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
    $('.slider__body').slick({
        arrows: false,
        dots: true,
        accessibility: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        speed: 700
    });
    // // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //

    // !Анимация сайта
    // // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //

    // $('.generation__title').addClass('anim-items animate__animated');
    new WOW().init();

    const animItems = document.querySelectorAll('.anim-items');
    
    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
       
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++){
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 1;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('animate__bounceInUp');
                } else {
                    if (animItem.classList.contains('one-more-time')) {
                        animItem.classList.remove('animate__bounceInUp');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
        setTimeout(() => {
            animOnScroll();
        }, 300);
    }
    
    // // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
