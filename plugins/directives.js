import Vue from 'vue'
import Bus from "@/utils/Bus";

let hover = ()=>{
  Bus.$emit('hoverLink')
}

let leaveLink = ()=>{
  Bus.$emit('leaveLink')
}

Vue.directive('hide-cursor', {
  bind: function (el) {
    el.addEventListener('mouseenter', hover)
    el.addEventListener('mouseleave', leaveLink)
  },
  unbind: function (el) {
    el.removeEventListener('mouseenter', hover)
    el.removeEventListener('mouseleave', leaveLink)
  }
})
