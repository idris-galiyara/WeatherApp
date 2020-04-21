class Prime {
  isPrimeDay (day) {
    try {
      if (typeof day !== 'number') {
        throw { 'day': 'Provided day is not valid' }
      }
      if (day === 1) {
        return false
      }
      for (let i = 2; i <= day - 1; i++) {
        if (day % i === 0) {
          return false
        }
      }
      return true
    } catch (error) {
      throw error
    }
  }
}

module.exports = new Prime()
