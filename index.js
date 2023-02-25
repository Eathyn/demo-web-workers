const btn = document.querySelector('button')
btn.addEventListener('click', doSearch)

function doSearch() {
  const fromNumber = document.getElementById('from').value
  const toNumber = document.getElementById('to').value

  const statusDisplay = document.getElementById('status')
  statusDisplay.innerHTML = 'Starting new search...'

  const primes = findPrimes(fromNumber, toNumber)
  generateContent(primes)
}

function findPrimes(fromNumber, toNumber) {
  const list = []
  for (let i = fromNumber; i <= toNumber; i++) {
    if (i > 1) list.push(i)
  }

  const maxDiv = Math.round(Math.sqrt(toNumber))
  const primes = []

  for (let i = 0; i < list.length; i++) {
    let failed = false
    for (let j = 2; j <= maxDiv; j++) {
      if ((list[i] !== j) && (list[i] % j === 0)) {
        failed = true
      } else if ((j === maxDiv) && (failed === false)) {
        primes.push(list[i])
      }
    }
  }

  return primes
}

function generateContent(primes) {
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
