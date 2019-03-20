'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    console.log(stuff.data);
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('remove items from the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.pop();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[0]).toEqual('a');
  });

  it('remove items from the beginning of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    console.log(stuff.data);
    stuff.shift();
    console.log(stuff.data);
    expect(stuff.length).toEqual(1);
    expect(stuff.data[1]).toEqual('b');
  });

  it('add items to the beginning of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.unshift('c');
    console.log(stuff.data);
    expect(stuff.length).toEqual(3);
    expect(stuff.data[0]).toEqual('c');
  });

  it('add callback to every item in the data set', () => {
    let stuff = new List();
    stuff.push('1');
    stuff.push('2');
    stuff.push('3');
    stuff.push('5');
    console.log(stuff);

    let for_count = 0;

    stuff.foreach(function(val, iaa, bbb){
      console.log('callback \t' + val);
      for_count ++ ;
    });
    
    expect(for_count).toEqual(stuff.length);
  });
});


