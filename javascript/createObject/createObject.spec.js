it('Object.create', () => {
  //Object.create()是继承于某个对象创建的新对象
  let obj1 = {
    name: 'rua',
    age: 23,
  };
  let obj2 = Object.create(obj1, {
    fruit: { value: 'apple', writable: true, enumerable: true },
  });
  console.log(obj1, obj2, obj2.name, obj2.__proto__);
  obj2.name = 'waaagh';
  console.log(obj1, obj2, obj2.__proto__);
  obj2.__proto__.name = 'waaaaagh';
  console.log(obj1, obj2, obj2.__proto__);
});

it.only('Object.defineProperties', () => {
  // Object.defineProperties()是对对象属性的扩展。
  let obj1 = {
    name: 'rua',
    age: 23,
  };
  Object.defineProperties(obj1, {
    fullName: {
      get: function () {
        //当你获取当前扩展属性值的时候，返回的就是当前属性的值
        return this.firstName + ' ' + this.lastName;
      },
      set: function (msg) {
        //监视当前属性值，当属性值发生改变的时候自动调用
        let names = msg.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
  });
  console.log(obj1);
  obj1.fullName = 'waaaagh rua';
  console.log(obj1, obj1.fullName);
});
