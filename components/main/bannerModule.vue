<template>
 <!-- Test용 메인배너 -->
    <div class="banner">
        <!-- <div class="bannerWrap"> -->
    <!-- Test용 메인배너 -->       

        <!-- 실제 사용 할 모듈구역 시작 -->
<!-- 테스터 시작 -->
    <!-- <div class="slider">
        <div class="slider-inner">
            <div class="slider-item"
                 v-for="(data, idx) of ['https://velog.velcdn.com/images/kyj0206/post/01174201-9b39-4b4e-9090-6ebbb4a134d8/image.png', 
                                        'https://velog.velcdn.com/images/kyj0206/post/01174201-9b39-4b4e-9090-6ebbb4a134d8/image.png']"
                 :key="idx"><img :src="data" /></div>
        </div>
    </div> -->



    <div class="slider-container">
      <div class="slide"
           v-for="(data, idx) of ['https://velog.velcdn.com/images/kyj0206/post/01174201-9b39-4b4e-9090-6ebbb4a134d8/image.png', 
                                        'https://velog.velcdn.com/images/kyj0206/post/01174201-9b39-4b4e-9090-6ebbb4a134d8/image.png']"
           :key="idx">
        <img :src="data"/>
      </div>
    </div>














    <!-- <div class="navy-infomation-list-pagination">
      <div class="pagination-progressive-bar" slot="pagination"></div>
      <div class="pagination-number-wrap">
        <button class="top-prev-btn arrow-btn"></button>
        <i class="praction"
          ><span>{{ 1 }}</span
          >/{{ ['https://velog.velcdn.com/images/kyj0206/post/01174201-9b39-4b4e-9090-6ebbb4a134d8/image.png', 
                'https://velog.velcdn.com/images/kyj0206/post/01174201-9b39-4b4e-9090-6ebbb4a134d8/image.png'].length }}</i
        >
        <button class="top-next-btn arrow-btn"></button>
      </div>
    </div> -->
<!-- 테스터 끝-->


        <!-- 실제 사용 할 모듈구역 끝 -->

        <!-- </div> -->
    </div>    
</template>

<script>
export default {
    created() {
        if (process.client) {
            // let slider = document.querySelector(".slider")
            // let innerSlider = document.querySelector(".slider-inner")
            // let pressed = false
            // let startx
            // let x

            // slider.addEventListener("mousedown", e => {
            // pressed = true
            // startx = e.offsetX - innerSlider.offsetLeft
            // slider.style.cursor = "grabbing"
            // })

            // slider.addEventListener("mouseenter", () => {
            // slider.style.cursor = "grab"
            // })

            // slider.addEventListener("mouseup", () => {
            // slider.style.cursor = "grab"
            // })

            // window.addEventListener("mouseup", () => {
            // pressed = false
            // })

            // slider.addEventListener("mousemove", e => {
            // if (!pressed) return
            // e.preventDefault()
            // x = e.offsetX

            // innerSlider.style.left = `${x - startx}px`
            // checkboundary()
            // })

            // function checkboundary() {
            // let outer = slider.getBoundingClientRect()
            // let inner = innerSlider.getBoundingClientRect()

            // if (parseInt(innerSlider.style.left) > 0) {
            //     innerSlider.style.left = "0px"
            // } else if (inner.right < outer.right) {
            //     innerSlider.style.left = `-${inner.width - outer.width}px`
            // }
            // }

            const slider = document.querySelector('.slider-container'),
            slides = Array.from(document.querySelectorAll('.slide'))

            let isDragging = false,
            startPos = 0,
            currentTranslate = 0,
            prevTranslate = 0,
            animationID,
            currentIndex = 0

            slides.forEach((slide, index) => {
            const slideImage = slide.querySelector('img')
            // disable default image drag
            slideImage.addEventListener('dragstart', (e) => e.preventDefault())
            // touch events
            slide.addEventListener('touchstart', touchStart(index))
            slide.addEventListener('touchend', touchEnd)
            slide.addEventListener('touchmove', touchMove)
            // mouse events
            slide.addEventListener('mousedown', touchStart(index))
            slide.addEventListener('mouseup', touchEnd)
            slide.addEventListener('mousemove', touchMove)
            slide.addEventListener('mouseleave', touchEnd)
            })

            // make responsive to viewport changes
            window.addEventListener('resize', setPositionByIndex)

            // prevent menu popup on long press
            window.oncontextmenu = function (event) {
            event.preventDefault()
            event.stopPropagation()
            return false
            }

            function getPositionX(event) {
            return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
            }

            function touchStart(index) {
            return function (event) {
                currentIndex = index
                startPos = getPositionX(event)
                isDragging = true
                animationID = requestAnimationFrame(animation)
                slider.classList.add('grabbing')
            }
            }

            function touchMove(event) {
            if (isDragging) {
                const currentPosition = getPositionX(event)
                currentTranslate = prevTranslate + currentPosition - startPos
            }
            }

            function touchEnd() {
            cancelAnimationFrame(animationID)
            isDragging = false
            const movedBy = currentTranslate - prevTranslate

            // if moved enough negative then snap to next slide if there is one
            if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

            // if moved enough positive then snap to previous slide if there is one
            if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

            setPositionByIndex()

            slider.classList.remove('grabbing')
            }

            function animation() {
            setSliderPosition()
            if (isDragging) requestAnimationFrame(animation)
            }

            function setPositionByIndex() {
            currentTranslate = currentIndex * -window.innerWidth
            prevTranslate = currentTranslate
            setSliderPosition()
            }

            function setSliderPosition() {
            slider.style.transform = `translateX(${currentTranslate}px)`
            }




        }
    },
    methods: {
        // getActiveSlide() {
        //     console.log(this.$el)
        //     this.exampleActiveIdx = this.$el
        //         .querySelector(".swiper-slide-active")
        //         .getAttribute("data-idx");
        // },
        // onSwiperRedied(e) {
        //     console.log("스와이퍼 리다이드", e)
        // }
    },
     data() {
        return {
        // exampleActiveIdx: 1,
        // options: {
        // slidesPerView: 'auto',
        // centeredSlides: true,
        // spaceBetween: '30',
        // direction: "horizontal",
        // loop: true,
        // loopedSlides: 3,
        // pagination: {
        //   el: ".pagination-progressive-bar",
        //   type: "progressbar",
        // },
        // navigation: {
        //   nextEl: ".top-next-btn",
        //   prevEl: ".top-prev-btn",
        // },
        // lazy : {
        //     initialImageLoaded: true
        // },
        // breakpoints: {
        //   1200: {
        //     slidesPerView: "auto",
        //     loop: true,
        //     mousewheel: false,
        //     direction: "horizontal",
        //     spaceBetween: 12,
        //   },
        //   480: {
        //     mousewheel: false,
        //     direction: "vertical",
        //     spaceBetween: 12,
        //   },
        // },
    //   },
        }
    }
}
</script>

<style lang="scss" scoped>
// .banner 는 사용 안함 테스트용 껍데기
.banner {
    width: 100%;
    position: absolute;
    top: 80%;
    /* background-color: #000; */

    .bannerWrap {
        position: relative;
        /* width: 100%;
        height: 300px;
        padding: 50px 30px; */

        // 실제사용 모듈용 css 구역!!!!!!!!!!!!!!
        .bannerMoule {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 35%);
            padding: 0 30px;

            .banner1024 {
                display: block;
                max-width: 1200px;
                width: 100%;
                margin: 0 auto;
                a {
                    display: block;

                    img {
                        width: 100%;
                    }
                }
            }

            .banner768 {
                display: none;

                a {
                    display: block;

                    img {
                        width: 100%;
                    }
                }
            }
        }

        // 실제사용 모듈용 css 구역 여기까지!!!!!!!!!!!



    }
}
// .slider {
//   position: absolute;
//   left: 10%;
//   width: 80%;
//   height: 100%;
//   top: 85%;
//   max-height: 266px;
//   overflow: hidden;
// }

// .slider-inner {
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 200%;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 5px;
//   pointer-events: none;
// }

// .slider-item {
//   height: 100%;
//   img { width: 100%; max-height: 266px; }
// }

:root {
  --shadow: rgba(0, 0, 0, 0.8)
}

.slider-container {
  display: inline-flex;
  overflow: hidden;
  scrollbar-width: none;
  transform: translateX(0);
  will-change: transform;
  transition: transform 0.3s ease-out;
  cursor: grab;
}

.slide{
  max-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
   img { max-height: 230px; }
}

@media(min-width: 1200px){
  .slide {
    padding: 3rem;
  }
}

.slide img{
  max-width: 100%;
  width: 80%;
  transition: transform 0.3s ease-in-out;
  box-shadow: 5px 5px 50px -1px var(--shadow);
  border-radius: 4px;
  user-select: none;
}

.grabbing {
  cursor: grabbing;
}

.grabbing .slide img{
  transform: scale(0.9);
  box-shadow: 5px 5px 40px -1px var(--shadow);
}

@media screen and(max-width:768px) {
    .banner .bannerWrap .bannerMoule .banner1024{
        display: none;
    }

    .banner .bannerWrap .bannerMoule .banner768{
        display: block;
    }

    .banner .bannerWrap .bannerMoule{
        padding: 0 24px;
        transform: translate(-50%, 60%);
    }
}

</style>