'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  /**
   * 
   */
  shift() {
    let returnValue = this.data[0];
    delete this.data[0];
    this.length--;
    return returnValue;
  }

  /**
  * //Add item to the beginning of the list
  * @param item
  */
  unshift(item) {
    this.data[0] = item;
    this.length++;
  }
 
  /**
  * //invoke a callback function for every item in the list
  * @param callback
  */
  foreach(callback) {
    for(var i =0; i<this.length; i++)
      callback(this[i], i, this);
  }

}

module.exports = List;
