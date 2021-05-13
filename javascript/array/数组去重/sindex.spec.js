const {
  duplicateByReduce,
  duplicateByArrayFrom,
  duplicateByExpand,
  duplicateByFor,
  duplicateByIndexOf,
  duplicateByFilter,
  duplicateByObjectkeys,
} = require('./index.js');

it.only('reduce', () => {
  const arr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
  const newArr = duplicateByReduce(arr);

  // console.log(newArr);
});

it('Array.from', () => {
  const arr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
  const newArr = duplicateByArrayFrom(arr);

  console.log(newArr);
});

it('扩展运算符', () => {
  const arr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
  const newArr = duplicateByExpand(arr);

  console.log(newArr);
});

it('2层for循坏', () => {
  const arr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
  const newArr = duplicateByFor(arr);

  console.log(newArr);
});

it('IndexOf', () => {
  const arr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
  const newArr = duplicateByIndexOf(arr);

  console.log(newArr);
});

it('Array.filter', () => {
  const arr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
  const newArr = duplicateByFilter(arr);

  console.log(newArr);
});

it('Object.keys', () => {
  const arr = [1, 2, 3, 3, 3, 5, 8, 8];
  const newArr = duplicateByObjectkeys(arr);

  console.log(newArr);
});
