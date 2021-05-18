const {
  flatArrayByFlat,
  flatArrayByToString,
  flatArrayByJoin,
  flatArrayByReduce,
  flatArrayByExpand,
} = require('./index.js');

it('Array.prototype.flat', () => {
  let arr = [1, [2, [3, [4, 5]]], 6];
  let result = flatArrayByFlat(arr);
  console.log(result);
});

it('Array.prototype.toString', () => {
  let arr = [1, [2, [3, [4, 5]]], 6];
  let result = flatArrayByToString(arr);
  console.log(result);
});

it('Array.prototype.join', () => {
  let arr = [1, [2, [3, [4, 5]]], 6];
  let result = flatArrayByJoin(arr);
  console.log(result);
});

it('Array.prototype.reduce', () => {
  let arr = [1, [2, [3, [4, 5]]], 6];
  let result = flatArrayByReduce(arr);
  console.log(result);
});

it.only('...', () => {
  let arr = [1, [2, [3, [4, 5]]], 6];
  let result = flatArrayByExpand(arr);
  console.log(result);
});
