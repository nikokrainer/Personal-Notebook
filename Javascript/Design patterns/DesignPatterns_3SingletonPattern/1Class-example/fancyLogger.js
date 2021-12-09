class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = []
      FancyLogger.instance = this
    }
    return FancyLogger.instance //we just want to use single instance from this class, that's why we do this
  }

  log(message) {
    this.logs.push(message)
    console.log(`FANCY: ${message}`)
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`)
  }
}

const logger = new FancyLogger()
Object.freeze(logger)
export default logger
