it('时间对象与字符串', () => {
  let obj = {
    name: 'a',
    date: [new Date(1536627600000), new Date(1540047600000)],
  };
  console.log(typeof obj.date[0]); //时间对象
  let result = JSON.parse(JSON.stringify(obj));
  console.log(typeof result.date[0]); //字符串
});

it('RegExp、Error对象', () => {
  let obj = {
    name: 'a',
    reg: new RegExp('\\w+'),
  };
  console.log(obj); // RegExp、Error对象
  let result = JSON.parse(JSON.stringify(obj));
  console.log(result); // 空对象
});

it('函数', () => {
  let obj = {
    name: 'a',
    funk: () => {
      console.log('rua');
    },
  };
  console.log(obj); // 函数funk
  let result = JSON.parse(JSON.stringify(obj));
  console.log(result); // undefined,函数丢失
});

it('NaN、Infinity、-Infinity', () => {
  let obj = {
    age: NaN,
    count: Infinity,
  };
  console.log(obj); // 函数funk
  let result = JSON.parse(JSON.stringify(obj));
  console.log(result); // null
});

it('对象的可枚举的自有属性', () => {
  function Age(age) {
    this.age = age;
    console.log(age);
  }
  const age = new Age(23);
  let obj = {
    age: age,
  };
  console.log(obj);
  let result = JSON.parse(JSON.stringify(obj));
  console.log(result); // 会丢弃对象的constructor,这里是Age
});

it.only('对象中存在循环引用的情况也无法正确实现深拷贝', () => {
  let obj = {
    age: 23,
    name: 'rua',
  };
  obj.info = obj;
  // console.log(obj, 123);
  // let result = JSON.parse(JSON.stringify(obj));
  // console.log(result);
  // 报错: Converting circular structure to JSON。
  // 可以通过JSON扩展包的var c = JSON.decycle(a)和var a = JSON.retrocycle(c)来处理

  function hasLoop(obj) {
    function findLoop(target, src) {
      const source = src.slice().concat([target]);
      for (let key in target) {
        if (typeof target[key] === 'object') {
          if (
            source.indexOf(target[key]) > -1 ||
            findLoop(target[key], source)
          ) {
            return true;
          }
        } else {
          return false;
        }
      }
    }
    return typeof obj === 'object' ? findLoop(obj, []) : false;
  }
  console.log(hasLoop(obj));
  // function cycle(obj, parent) {
  //   // 表示调用的父级数组
  //   var parentArr = parent || [obj];
  //   console.log(parentArr, 123);
  //   for (var i in obj) {
  //     if (typeof obj[i] === 'object') {
  //       // 判断是否有循环引用
  //       parentArr.forEach((pObj) => {
  //         if (pObj === obj[i]) {
  //           obj[i] = '[cycle]';
  //         }
  //       });
  //       cycle(obj[i], [...parentArr, obj[i]]);
  //     }
  //   }
  //   return obj;
  // }
  // console.log(cycle(obj));
});
