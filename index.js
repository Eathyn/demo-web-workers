const btn = document.querySelector('button')
btn.addEventListener('click', doSearch)

function doSearch() {
  const fromNumber = document.getElementById('from').value
  const toNumber = document.getElementById('to').value

  const statusDisplay = document.getElementById('status')
  statusDisplay.innerHTML = 'Starting new search...'

  const worker = new Worker('./work.js')
  worker.postMessage({
    fromNumber: Number(fromNumber),
    toNumber: Number(toNumber)
  })
  worker.addEventListener('message', receiveWorkerMessage)
}

function receiveWorkerMessage(primes) {
  generateContent(primes)
}

function generateContent(evt) {
  const primes = evt.data
  let primeList = ''
  for (let i = 0; i < primes.length; i++) {
    primeList += primes[i]
    if (i !== primes.length - 1) primeList += ', '
  }

  const primeContainer = document.getElementById('primeContainer')
  primeContainer.innerHTML = primeList

  const statusDisplay = document.getElementById('status')
  if (primeList.length === 0) {
    statusDisplay.innerHTML = 'Search didn\'t find any results.'
  } else {
    statusDisplay.innerHTML = 'The results are here!'
  }
}
