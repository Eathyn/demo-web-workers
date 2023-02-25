onmessage = (evt) => {
  const { fromNumber, toNumber } = evt.data
  const primes = findPrimes(fromNumber, toNumber)
  postMessage(primes)
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
