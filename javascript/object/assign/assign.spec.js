it('Object.assign(target, ...sources)', () => {
  // 复制一个对象
  // 因为 Object.assign()拷贝的是（可枚举）属性值
  // 假如源值是一个对象的引用，它仅仅会复制其引用值。
  const obj = { a: 1, b: { c: 0 } };
  const copyObj = Object.assign({}, obj);
  copyObj.a = 2;
  copyObj.b.c = 6;
  console.log(obj, copyObj);

  const arr = [1, 2, [3, 4]];
  const copyArr = Object.assign([], arr);
  copyArr[0] = 6;
  copyArr[2][0] = 6;
  console.log(arr, copyArr);
});

it('Object.assign(target, ...sources)', () => {
  // 合并对象
  const o1 = { a: 1 };
  const o2 = { b: 2 };
  const o3 = { c: 3 };

  const obj = Object.assign(o1, o2, o3);
  console.log(obj); // { a: 1, b: 2, c: 3 }
  console.log(o1); // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
});

it('Object.assign(target, ...sources)', () => {
  // 合并具有相同属性的对象,属性被后续参数中具有相同属性的其他对象覆盖。
  const o1 = { a: 1, b: 1, c: 1 };
  const o2 = { b: 2, c: 2 };
  const o3 = { c: 3 };

  const obj = Object.assign({}, o1, o2, o3);
  console.log(obj); // { a: 1, b: 2, c: 3 }
});

it('Object.assign(target, ...sources)', () => {
  // 拷贝 symbol 类型的属性
  const o1 = { a: 1 };
  const o2 = { [Symbol('foo')]: 2 };

  const obj = Object.assign({}, o1, o2);
  console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
  console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(foo)] 返回一个给定对象自身的所有 Symbol 属性的数组。
});

it('Object.assign(target, ...sources)', () => {
  // 继承属性和不可枚举属性是不能拷贝的
  const obj = Object.create(
    { foo: 1 },
    {
      // foo 是个继承属性。
      bar: {
        value: 2, // bar 是个不可枚举属性。
      },
      baz: {
        value: 3,
        enumerable: true, // baz 是个自身可枚举属性。
      },
    },
  );

  const copy = Object.assign({}, obj);
  console.log(copy); // { baz: 3 }
});

it('Object.assign(target, ...sources)', () => {
  // 原始类型会被包装为对象
  const v1 = 'abc';
  const v2 = true;
  const v3 = 10;
  const v4 = Symbol('foo');

  const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
  // 原始类型会被包装，null 和 undefined 会被忽略。
  // 注意，只有字符串的包装对象才可能有自身可枚举属性。
  console.log(obj); // { "0": "a", "1": "b", "2": "c" }
});

it('Object.assign(target, ...sources)', () => {
  // 异常会打断后续拷贝任务
  const target = Object.defineProperty({}, 'foo', {
    value: 1,
    writable: false,
  }); // target 的 foo 属性是个只读属性。

  Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
  // TypeError: "foo" is read-only
  // 注意这个异常是在拷贝第二个源对象的第二个属性时发生的。

  console.log(target.bar); // 2，说明第一个源对象拷贝成功了。
  console.log(target.foo2); // 3，说明第二个源对象的第一个属性也拷贝成功了。
  console.log(target.foo); // 1，只读属性不能被覆盖，所以第二个源对象的第二个属性拷贝失败了。
  console.log(target.foo3); // undefined，异常之后 assign 方法就退出了，第三个属性是不会被拷贝到的。
  console.log(target.baz); // undefined，第三个源对象更是不会被拷贝到的。
});

//拷贝访问器
