/**
 * 
 */
export class FrequentMark {
  static _STOP_THRESHOLD = 200
  _observer = null
  _records = []
  _startTime = 0
  _stopClock = null

  start() {
    if (this._stopClock) {
      clearTimeout(this._stopClock)
    }
    this._stopClock = setTimeout(this._stop.bind(this), FrequentMark._STOP_THRESHOLD)

    this._startTime = this._getNow()
  }

  _stop() {
    const sum = this._records.reduce((sum, item) => sum + item, 0)
    const averageDuration = sum / this._records.length
    this._observer && this._observer(averageDuration)
  }

  end() {
    this._records.push(this._getNow() - this._startTime)
  }

  observe(observer) {
    this._observer = observer
  }

  _getNow() {
    return performance.now()
  }
}
