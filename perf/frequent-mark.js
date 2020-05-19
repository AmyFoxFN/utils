/**
 * 
 */
export default class FrequentMark {
  _averageDuration = 0
  _observer = null

  constructor({ stopThreshold = 200 } = {}) {
    // setTimeout(() => {
    //   this._observer && this._observer(1)
    // }, 2000)
  }

  start() {

  }

  end() {

  }

  observe(observer) {
    this._observer = observer
  }
}
