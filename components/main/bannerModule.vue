<template>
<div class="banner">

    <div class="slider-container">
      <div class="slide"
           v-for="(data, idx) of ['https://velog.velcdn.com/images/kyj0206/post/01174201-9b39-4b4e-9090-6ebbb4a134d8/image.png', 
                                        'https://velog.velcdn.com/images/kyj0206/post/01174201-9b39-4b4e-9090-6ebbb4a134d8/image.png']"
           :key="idx">
        <img :src="data"/>
      </div>
    </div>

</div>    
</template>

<script>
export default {
    created() {
        if (process.client) {

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
    },
     data() {
        return {
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