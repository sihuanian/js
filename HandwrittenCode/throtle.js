/* function myThrotle (func, wait) {
  let timeout;
  return function() {
      let context = this;
      let args = arguments;
      if (!timeout) {
          timeout = setTimeout(() => {
              timeout = null;
              func.apply(context, args)
          }, wait)
      }
  }
} */

function myThrotle(func, await) {
  let pre = 0
  return function () {
    let _self = this
    let now = Date.now()
    let args = arguments
    if (now - pre >= await) {
      func.apply(_self, args)
      pre = now
    }
  }
}
window.myThrotle = myThrotle