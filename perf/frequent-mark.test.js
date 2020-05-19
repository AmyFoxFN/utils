import FrequentMark from './frequent-mark'


test('run well', (done) => {
  const frequentMark = new FrequentMark()

  const interval = setInterval(() => {
    frequentMark.start()
    const a = 1
    frequentMark.end()
  }, 20);

  setTimeout(() => {
    clearInterval(interval)
  }, 1000)

  frequentMark.observe((averageDuration) => {
    expect(averageDuration).toBeGreaterThan(0)
    done()
  })
})