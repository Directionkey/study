const {
  traverseObjectByKeys,
  traverseObjectByValues,
  traverseObjectByEntries,
} = require('./index.js');

it('forIn', () => {
  const obj = {
    id: 1,
    name: 'zhangsan',
    age: 18,
  };
  for (let key in obj) {
    console.log(`${obj}-${obj[key]}`);
  }
});

it('Object.keys Object.values', () => {
  // const obj = {
  //   id: 1,
  //   name: 'zhangsan',
  //   age: 18,
  // };
  const obj = Object.create(
    {},
    {
      waaagh: {
        value: '我可枚举',
        enumerable: true,
      },
      rua: {
        value: '我不可枚举',
        enumerable: false,
      },
    },
  );
  let keys = traverseObjectByKeys(obj);
  let values = traverseObjectByValues(obj);
  console.log(keys, values);
});

it.only('Object.getOwnPropertyNames', () => {
  //可以获取不可枚举属性
  const obj1 = Object.create(
    {},
    {
      waaagh: {
        value: '我可枚举',
        enumerable: true,
      },
      rua: {
        value: '我不可枚举',
        enumerable: false,
      },
    },
  );
  const obj2 = {};
  Object.defineProperties(obj2, {
    property1: { enumerable: true, value: 1 },
    property2: { enumerable: false, value: 2 },
  });

  Object.getOwnPropertyNames(obj1).forEach((key) => {
    console.log(key, obj1[key]);
  });

  let keys = traverseObjectByKeys(obj2);
  let values = traverseObjectByValues(obj2);
  console.log(keys, values);
});

it.only('Object.entries', () => {
  const obj = {
    id: 1,
    name: 'zhangsan',
    age: 18,
  };
  let result = traverseObjectByEntries(obj);
  console.log(result);
});
