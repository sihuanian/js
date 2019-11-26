// window.onload = function () {
//   const imgBox = document.querySelector('.img-box')
//   const img = document.querySelector('.img-box img')
//   window.onscroll = function () {
//     if (img.getAttribute('src')) {
//       return true
//     }
//     let A = imgBox.offsetTop + imgBox.clientHeight
//     let B = window.innerHeight + window.scrollY
//     if (B > A) {
//       const dataSrc = img.getAttribute('data-src')
//       img.setAttribute('src', dataSrc)
//     }
//   }
// }

// 假数据
window.onload = function () {
  const container = document.querySelector('.container')
  const imgBox = document.querySelector('.img-box')
  new Array(10).fill(null).forEach(el => {
    const node = imgBox.cloneNode(true)
    container.appendChild(node)
  })
}

window.onscroll = function () {
  const imgBoxes = [...document.querySelectorAll('.img-box')]
  imgBoxes.forEach((el) => {
    lazyLoad(el, el.firstElementChild)
  })
}

// 懒加载函数
/**
 * 
 * @param {*图片容器} imgWrapperNode 
 * @param {*图片} imgNode 
 */
function lazyLoad (imgWrapperNode, imgNode) {
  if (imgNode.getAttribute('src')) {
    return true
  }
  let A = imgWrapperNode.offsetTop + imgWrapperNode.clientHeight
  let B = window.innerHeight + window.scrollY
  if (B > A) {
    const dataSrc = imgNode.getAttribute('data-src')
    imgNode.setAttribute('src', dataSrc)
  }
}