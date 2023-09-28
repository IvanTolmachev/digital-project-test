import wIcon from '../images/icons.svg';

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'custom', // Изменим тип пагинации на custom
      renderCustom: function (swiper, current, total) {
        // Используем renderCustom для кастомной пагинации
        return (
          '<span class="custom-pagination">' +
          0 +
          current + // Текущий номер слайда
          '</span>' +
          '<span class="total-pagination">' +
          0 +
          total + // Общее количество слайдов
          '</span>'
        );
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
