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

it.only('Object.defineProperty', () => {
  // Object.defineProperty()是对对象属性的扩展。
  let obj1 = {
    name: 'rua',
    age: 23,
  };
  // 禁止扩展
  // 如果你想禁止一个对象添加新属性并且保留已有属性，就可以使用Object.preventExtensions(obj)
  // Object.preventExtensions(obj1);
  // 密封
  // Object.seal()会创建一个密封的对象，这个方法实际上会在一个现有对象上调用object.preventExtensions(...)并把所有现有属性标记为configurable:false。
  // 冻结
  // Object.freeze()会创建一个冻结对象，这个方法实际上会在一个现有对象上调用Object.seal(),并把所有现有属性标记为writable: false,这样就无法修改它们的值。
  // 重点：Object.freeze()这个方法是你可以应用在对象上级别最高的不可变性，它会禁止对于对象本身及其任意直接属性的修改（但是这个对象引用的其他对象是不受影响的）你可以深度冻结一个对象，具体方法为，首先这个对象上调用Object.freeze()然后遍历它引用的所有对象，并在这些对象上调用Object.freeze()。但是一定要小心，因为这么做有可能会无意中冻结其他共享对象。
  Object.defineProperty(obj1, 'fullName', {
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
  });
  console.log(obj1);
  obj1.fullName = 'waaaagh rua';
  console.log(obj1, obj1.fullName);
});

it('Object.defineProperties', () => {
  // Object.defineProperties()是对对象属性的扩展,可一次定义多个属性
  let obj1 = {
    name: 'rua',
    age: 23,
  };
  Object.defineProperties(obj1, {
    sex: {
      value: 'male',
      configurable: true, //描述属性是否配置描述符，以及可否删除 默认false
      writable: true, //是否能通过赋值（obj.xx=xx）来修改属性值 默认false
      enumerable: true, // 描述属性是否会出现在for in 或者 Object.keys()的遍历中 默认false

      //不变性
      // 结合writable: false 和 configurable: false 就可以创建一个真正的常量属性（不可修改，不可重新定义或者删除）
    },
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
  console.log(obj1, obj1.fullName, obj1.sex);
});

it('get,set', () => {
  // 对象的 set get 是es5的中对象的特性
  let obj1 = {
    name: 'rua',
    age: 23,
    get userNameAge() {
      return this.userName + '&&' + this.userAge;
    },
    set userNameAge(msg) {
      let info = msg.split(' ');
      this.userName = info[0];
      this.userAge = info[1];
    },
  };
  obj1.userNameAge = 'x2 24';
  console.log(obj1, obj1.userName, obj1.userAge, obj1.userNameAge);
});
