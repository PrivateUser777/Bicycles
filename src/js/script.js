window.addEventListener('DOMContentLoaded', () => {
    new WOW().init();

    // !Присвоение классов для анимации
    // // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
    $('.generation__icon').addClass('wow animate__animated animate__bounceInDown');
    $('.generation__icon').attr('data-wow-offset', '220');
    $('.generation__title').addClass('wow animate__animated animate__bounceInLeft');
    $('.generation__title').attr('data-wow-offset', '160');
    $('.generation__text').addClass('wow animate__animated animate__bounceInRight');
    $('.generation__text').attr('data-wow-offset', '100');

    $('.company__right-icon').addClass('wow animate__animated animate__flipInY');
    $('.company__right-icon').attr('data-wow-offset', '200');
    $('.company__title').addClass('wow animate__animated animate__flipInY');
    $('.company__title').attr('data-wow-offset', '200');
    $('.company__text').addClass('wow animate__animated animate__flipInY');
    $('.company__text').attr('data-wow-offset', '200');
    // // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //

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
});