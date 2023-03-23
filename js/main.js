const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach((element) => {
   element.addEventListener('click', open);
});

function open(evt) {
   const tabTarget = evt.currentTarget; 


tabItem.forEach((item) => {
   item.classList.remove('tabs__btn-item--active')
});

tabTarget.classList.add('tabs__btn-item--active');
};

const swiper = new Swiper('swiper', {
   effect: 'fade',
   pagination: {
      el: '.swiper-pagination',
   },

   autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

});













