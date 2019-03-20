'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

/**
 * // Remove an item from the beginning of the list and return it's value
 * @returns {*}
 */
List.prototype.shift = function() {
  let returnValue = this.data[0];
  delete this.data[0];
  this.length--;
  return returnValue;
};
/**
 * //Add item to the beginning of the list
 * @param item
 */
List.prototype.unshift = function(item) {
  this.data[0] = item;
  this.length++;
};

/**
 * //invoke a callback function for every item in the list
 * @param callback
 */
List.prototype.foreach = function(callback) {
  for(var i =0; i<this.length; i++){
    callback(this.data[i], i, this.data);
  }
};
// { 'a':1, 'b':2 }

// keys = ['a', 'b']
// values = [1, 2]

module.exports = List;
