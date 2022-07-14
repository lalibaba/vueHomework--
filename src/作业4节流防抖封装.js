// 节流函数，只有等到时间走完才能触发下一次事件
var timer, flag
function throttle(func, wait) {
  if (!flag) {
    flag = true
    timer = setTimeout(() => {
      flag = false
      typeof func === 'function' && func()
    }, wait)
  }
}
//防抖函数，每次触发会清除定时器，并其每次触发到完成时间固定
function debounce(func, wait) {
  if (timeout !== null) clearTimeout(timeout)
  timeout = setTimeout(function () {
    typeof func === 'function' && func()
  }, wait)
}
export default { debounce, throttle }
