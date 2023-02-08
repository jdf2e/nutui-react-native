function requestAniFrame() {
  if (typeof global !== 'undefined') {
    return (
      global.requestAnimationFrame ||
      function (callback) {
        setTimeout(callback, 1000 / 60)
      }
    )
  }
  return function (callback: Function) {
    setTimeout(callback, 1000 / 60)
  }
}

export default requestAniFrame()
