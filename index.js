const btn = document.querySelector('button')
const container = document.querySelector('.container')

btn.addEventListener('click', handleBtnClick)

function handleBtnClick() {
  const start = Number(document.querySelector('input[id="start"]').value)
  const end = Number(document.querySelector('input[id="end"]').value)
  const worker = new Worker('worker.js')
  worker.postMessage({ start, end })
  worker.onmessage = receiveWorkerMessage
}

function receiveWorkerMessage(event) {
  const currentNumber = event.data.currentNumber
  const item = document.createElement('div')
  item.innerText = `${currentNumber}`
  container.append(item)
}
