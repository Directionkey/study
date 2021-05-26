it('遍历数组', () => {
  Array.prototype.rua = function () {
    console.log('rua');
  };
  const arr = [1, 2, 3, 4, 5];
  arr.name = 'rua';
  for (let val in arr) {
    console.log(val, typeof val);
  }
  //forIn不适合遍历数组的原因
  // 1.遍历元素的索引，且为字符串型数字，无法直接计算
  // 2.遍历顺序有可能不是按照实际数组的内部顺序
  // 3.遍历数组所有可枚举属性，包括原型上

  for (let val of arr) {
    console.log(val);
  }
  //forOf遍历的是数组内部元素值，不会遍历原型方法和属性
});

it.only('遍历对象', () => {
  Object.prototype.rua = function () {
    console.log('rua');
  };
  Object.prototype.waaagh = 'yes';
  var obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  obj.name = 'rua';
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // console.log(key);
    }
  }
  // 遍历对象所有可枚举属性，包括原型。
  // 可以通过hasOwnProperty判断是否为该对象的实例属性
  // 还可以使用Object.keys

  //for..of不可遍历对象
  //for..of适用遍历数组/数组对象/字符串/map/set等拥有迭代器对象的集合

  const map = new Map();
  map.set(1, 'rua');
  map.set('waaagh', 2);

  for (let [key, val] of map) {
    console.log(key, val);
  }

  const string = 'wasd666';
  for (let val of string) {
    console.log(val);
  }

  const arrObj = [{ name: 'rua' }, { name: 'waaagh' }];
  for (let val of arrObj) {
    console.log(val);
  }

  const arr = [1, 2, 3, 4, 5];
  const set = new Set(arr);
  for (let val of set) {
    console.log(val);
  }
});
