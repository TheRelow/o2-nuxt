<template>
    <div class="slider">
      <div class="slider__wrapper">
        <div class="slider__nav slider__nav_prev" @click="prevSlide"></div>
        <div class="slider__nav slider__nav_next" @click="nextSlide"></div>
        <div class="slider__pagination" v-if="pagination"></div>
        <div class="slider__current" v-if="current">{{currentState}}</div>
        <div class="slider__slides">
          <div :class="{'slider__content': true, 'slider__content_dragging': dragging}" ref="content" @mousedown.prevent="mouseDown">
            <div :class="{'slider__slide': true, 'slider__slide_current': slide.active}" v-for="slide of slides" :style="`background-image:url(${slide.img});`">
            </div>
          </div>
        </div>
      </div>
      <div v-if="thumbnails" class="slider__thumbnails" @wheel="thumb" ref="thumb" @mousedown.prevent="mouseDownThumb">
        <div class="slider__thumb" v-for="(slide, index) of slides" @click="openSlide(index)">
          <img v-if="slide.thumb" :src="slide.thumb" alt="">
          <div v-else>{{index + 1}}</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "SliderComponent",
  props: {
    thumbnails: {
      type: Boolean,
      default: false
    },
    current: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: Boolean,
      default: false
    },
    slides: {
      default: [
        {
          img: require('@/assets/img/slide.jpg'),
          thumb: require('@/assets/img/slide.jpg'),
          active: true
        },
        {
          img: require('@/assets/img/slide.jpg'),
          thumb: require('@/assets/img/slide.jpg'),
          active: false
        },
        {
          img: require('@/assets/img/slide.jpg'),
          thumb: require('@/assets/img/slide.jpg'),
          active: false
        },
        {
          img: require('@/assets/img/slide.jpg'),
          thumb: require('@/assets/img/slide.jpg'),
          active: false
        }
      ]
    }
  },
  data: () => ({
    lastSlide: false,
    firstSlide: true,
    currentSlide: 0,
    lastClickX: null,
    dragging: false,
    draggingStartPosThumb: false,
  }),
  computed: {
    currentState() { return `${this.currentSlide + 1} / ${this.slides.length}` },
  },
  methods: {
    thumb(e) {
      console.log(e)
      console.dir(this.$refs.thumb)
    },
    openSlide(index) {
      this.currentSlide = index
      this.updateSlide()
    },
    nextSlide() {
      if (this.currentSlide !== this.slides.length - 1) {
        this.currentSlide++
      }
      this.updateSlide()
    },
    prevSlide() {
      if (this.currentSlide !== 0) {
        this.currentSlide--
      } else {
      }
      this.updateSlide()
    },
    updateSlide() {
      if ( this.currentSlide == 0 ) {
        this.firstSlide = true
      } else {
        this.firstSlide = false
      }
      if (this.currentSlide == this.slides.length - 1) {
        this.lastSlide = true
      } else {
        this.lastSlide = false
      }
      for (let slide of this.slides) {
        slide['active'] = false
      }
      this.slides[this.currentSlide]['active'] = true
      let currentPos = this.$refs.content.clientWidth * this.currentSlide
      this.moveContent(-currentPos)
    },
    mouseDownThumb(e) {
      this.lastClickX = e.clientX
      this.draggingStartPosThumb = this.$refs.thumb.scrollLeft
      document.addEventListener('mousemove', this.mouseMoveThumb)
      document.addEventListener('mouseup', this.mouseUpThumb)
    },
    mouseMoveThumb(e) {
      let xDifference = this.lastClickX - e.clientX
      this.$refs.thumb.scrollLeft = this.draggingStartPosThumb + xDifference
    },
    mouseUpThumb() {
      document.removeEventListener('mousemove', this.mouseMoveThumb)
      document.removeEventListener('mouseup', this.mouseUpThumb)
    },
    mouseDown(e) {
      this.lastClickX = e.clientX
      this.dragging = true
      document.addEventListener('mousemove', this.mouseMove)
      document.addEventListener('mouseup', this.mouseUp)
    },
    mouseUp(e) {
      this.dragging = false
      setTimeout(()=>{
        let xDifference = this.lastClickX - e.clientX
        if (xDifference > 50) {
          this.nextSlide()
        } else if (xDifference < -50) {
          this.prevSlide()
        }
        document.removeEventListener('mousemove', this.mouseMove)
        document.removeEventListener('mouseup', this.mouseUp)

        this.updateSlide()
      },0)
    },
    mouseMove(e) {
      let currentPos = this.$refs.content.clientWidth * this.currentSlide
      let xDifference = (this.lastClickX - e.clientX) / -2 - currentPos
      this.moveContent(xDifference)
    },
    moveContent(xDifference) {
      this.$refs.content.style.transform = `translateX(${xDifference}px)`
    }
  }
}
</script>

<style scoped lang="scss">
.slider {
  width: auto;
  height: 100%;
}

.slider__slides {
  height: 100%;
  overflow: hidden;
  border-radius: 0 10px 10px 0;
}

.slider__wrapper {
  position: relative;
  height: 100%;
}
.slider__nav {
  position: absolute;
  right: 0;
  bottom: 70px;
  width: 60px;
  height: 70px;
  background-color: #3B3B3C;
  border-radius: 10px 0 0 10px;
  background-image: url('../assets/img/slider-arrow.svg');
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;
  cursor: pointer;
  &_next {
    right: -60px;
    background-color: #C4C4C4;
    transform: rotate(180deg);
  }
}
.slider__pagination {
  position: absolute;
  bottom: 40px;
  left: 50%;
  width: 200px;
  height: 50px;
  transform: translateX(-50%);
  background-color: #fff;
  z-index: 2;
}
.slider__current {
  position: absolute;
  top: 40px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  transform: translateX(-50%);
  background-color: #fff;
  z-index: 2;
}
.slider__content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  transition: 0.3s;
  cursor: grab;
  &_dragging {
    transition: none;
    cursor: grabbing;
  }
}
.slider__slide {
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-size: cover;
  background-position: center;
}
.slider__thumbnails {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  overflow-x: scroll;
}
.slider__thumb {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: calc(33.33% - 20px / 3 * 2);
  max-height: 100px;
  margin: 10px;
  background-color: #F0F0F0;
  img {
    max-width: 100%;
    max-height: 100px;
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
}
@media (max-width: 850px) {
  .slider__slides {
    border-radius: 0 0 10px 10px;
  }
  .slider__nav {
    bottom: -10px;
    right: 50px;
  }
  .slider__nav_next {
    bottom: -10px;
    right: -10px;
  }
}
@media (max-width: 400px) {
  .slider__nav {
    bottom: 0;
    right: 60px;
  }
  .slider__nav_next {
    bottom: 0;
    right: 0;
  }
}
</style>
