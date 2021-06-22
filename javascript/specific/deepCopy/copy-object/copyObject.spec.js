it('copyObject', () => {
  function deepCopy(newobj, oldobj) {
    for (let key in oldobj) {
      let item = oldobj[key];
      if (item instanceof Array) {
        newobj[key] = [];
        deepCopy(newobj[key], item);
      } else if (item instanceof Object) {
        newobj[key] = {};
        deepCopy(newobj[key], item);
      } else {
        newobj[key] = item;
      }
    }
  }

  let obj1 = { b: [1, 2, 3], c: { d: '123' }, e: 'rua' };
  let obj2 = {};
  deepCopy(obj2, obj1);
  obj1.b = [2, 3, 4];
  obj1.c.d = '456';

  console.log(obj1, obj2);
});
