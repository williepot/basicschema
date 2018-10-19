class BasicSchema {
  constructor (state) {
    this.state = state
  }

  // Returns an array of all field names
  get getFieldNames () {
    let temp = Object.entries(this.state)
    let arr = []
    for (var i in temp) {
      arr.push(temp[i][0])
    }
    return arr
  }

  // Returns the schema object
  get model () {
    return this.state
  }

  // Sets the 'value' field of all field objects to 'null'
  reset () {
    for (var field in this.state) {
      this.state[field].value = null
    }
  }

  // Returns the value of a specific field
  getField (field) {
    return this.state[field].value
  }

  // Sets the value of a specific field
  setField (field, value) {
    this.state[field].value = value
  }
}

module.exports = BasicSchema
