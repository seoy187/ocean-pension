document.querySelectorAll(".roomSwiper").forEach((swiperElement)=>{

    new Swiper(swiperElement,{

        loop:true,

        speed:800,

        autoplay:{

            delay:3000,

            disableOnInteraction:false,

        },

        pagination:{

            el:swiperElement.querySelector(".swiper-pagination"),

            clickable:true,

        },

        navigation:{

            nextEl:swiperElement.querySelector(".swiper-button-next"),

            prevEl:swiperElement.querySelector(".swiper-button-prev"),

        },

    });

});