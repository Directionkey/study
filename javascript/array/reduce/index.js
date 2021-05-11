//1累加
function f1() {
  var result = [0, 2, 4, 6, 8].reduce((prev, cur) => {
    prev + cur;
  }, 100);
  console.log(result);
}
// f1();

//2累加对象数组里的值
function f2() {
  var result = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce((prev, cur) => {
    prev + cur.x;
  }, 0);
  console.log(result);
}
// f2();

//3将二维数组转化为一维
function f3() {
  var result = [
    [0, 1],
    [2, 3],
    [4, 5],
  ].reduce((prev, cur) => {
    return prev.concat(cur);
  }, []);
  console.log(result);
}
// f3();

//4计算数组中每个元素出现的次数
function f4() {
  var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
  var result = names.reduce((allNames, name) => {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});
  console.log(result);
}
// f4();

//5按属性对object分类
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
];
function f5(objArr, property) {
  return objArr.reduce((acc, obj) => {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
// var result = f5(people, 'age');
// console.log(result);

//6使用扩展运算符和initialValue绑定包含在对象数组中的数组
function f6() {
  var friends = [
    {
      name: 'Anna',
      books: ['Bible', 'Harry Potter'],
      age: 21,
    },
    {
      name: 'Bob',
      books: ['War and peace', 'Romeo and Juliet'],
      age: 26,
    },
    {
      name: 'Alice',
      books: ['The Lord of the Rings', 'The Shining'],
      age: 18,
    },
  ];
  var result = friends.reduce(
    (prev, cur) => {
      return [...prev, ...cur.books];
    },
    ['rua'],
  );
  console.log(result);
}
// f6();

//7数组去重
function f7() {
  let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
  var result = myArray.reduce((acc, cur) => {
    if (acc.indexOf(cur) === -1) {
      acc.push(cur);
    }
    return acc;
  }, []);
  console.log(result);
}
// f7();

//8按顺序运行Promise
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input),
  );
}
// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}
// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}
// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
  return a * 3;
}
// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
// runPromiseInSequence(promiseArr, 10).then(console.log);

//9功能型函数管道
const double = (x) => x + x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;
// Function composition enabling pipe functionality
// const pipe = (...functions) => (input) =>
//   functions.reduce((acc, fn) => fn(acc), input);
const pipe = function (...functions) {
  return function (input) {
    return functions.reduce((acc, fn) => fn(acc), input);
  };
};
// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);
// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240

//10使用 reduce实现map
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function (callback, thisArg) {
    return this.reduce(function (mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, []);
  };
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, index, array) => currentValue + index + array.length,
); // [5, 7, , 10]
