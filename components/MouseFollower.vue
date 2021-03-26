<template>
  <div class="mouse-circle" ref="circle"></div>
</template>

<script>
import { gsap } from "gsap"
import Bus from '@/utils/Bus'
export default {
  name: "MouseFollower",
  data: ()=>({
    mouseCircle: null,
    pos: null,
    mouse: null,
    speed: 0.5,
    fpms: 60 / 1000,
    hovered: false
  }),
  beforeCreate() {
    try {
      document.createEvent("TouchEvent");
      this.isTouch = true
    } catch (e) {
      this.isTouch = false
    }
  },
  mounted() {
    if (!this.isTouch) {
      gsap.set(".mouse-circle", {xPercent: -50, yPercent: -50});
      this.mouseCircle = this.$refs.circle
      this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      this.mouse = { x: this.pos.x, y: this.pos.y }

      let xSet = gsap.quickSetter(this.mouseCircle, "x", "px");
      let ySet = gsap.quickSetter(this.mouseCircle, "y", "px");

      window.addEventListener("mousemove", e => {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
      });

      gsap.ticker.add((time, deltaTime) => {

        let delta = deltaTime * this.fpms;
        let dt = 1.0 - Math.pow(1.0 - this.speed, delta);

        this.pos.x += (this.mouse.x - this.pos.x) * dt;
        this.pos.y += (this.mouse.y - this.pos.y) * dt;
        xSet(this.pos.x);
        ySet(this.pos.y);
      });
      Bus.$on('hoverLink', ()=>{
        gsap.to(this.mouseCircle, { scale: 0 })
      })
      Bus.$on('leaveLink', ()=>{
        gsap.to(this.mouseCircle, { scale: 1 })
      })
    }
  }
}
</script>
