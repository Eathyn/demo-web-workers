let start = 0
let end = 0

onmessage = (evt) => {
  start = evt.data.start
  end = evt.data.end
}

function sendCurrentNumber() {
  let timerId = null

  timerId = setTimeout(function send() {
    postMessage({ currentNumber: start })
    start++
    timerId = setTimeout(send, 1000)
    if (start > end) {
      clearTimeout(timerId)
    }
  }, 1000)
}

sendCurrentNumber()
