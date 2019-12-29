Array.prototype.uniq = function () {
  let res = new Set(this)
  return Array.from(res)
}

console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq())
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']