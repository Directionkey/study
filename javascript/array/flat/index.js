var exports = module.exports;
// 为了方便，Node为每个模块提供一个exports变量，指向module.exports。这等同在每个模块头部，有一行这样的命令。
// exports 只是 module.exports的引用，辅助后者添加内容用的
// require导出的内容是module.exports的指向的内存块内容，并不是exports的

// module.exports = function flatArrayByFlat(arr) {
//   return arr.flat(Infinity);
// }; 这写法只能导出一个函数

exports.flatArrayByFlat = (arr) => {
  return arr.flat(Infinity);
};

exports.flatArrayByToString = (arr) => {
  return arr
    .toString()
    .split(',')
    .map((item) => {
      return +item; //这里的+是为了将数字字符串转为数字
    });
};

exports.flatArrayByJoin = (arr) => {
  //join() 方法用于把数组中的所有元素放入一个字符串。
  // join()和join("")是有区别的
  // 如果缺省该值，数组元素用逗号（,）分隔。
  // 如果separator是空字符串("") ，则所有元素之间都没有任何字符,
  // 但在多维数组中，只有第一层起效，其后几层仍旧用逗号分隔
  return arr
    .join('')
    .split(',')
    .map((item) => {
      return +item;
    });
};

exports.flatArrayByReduce = (arr) => {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val)
        ? acc.concat(this.flatArrayByReduce(val))
        : acc.concat(val),
    [],
  );
};

exports.flatArrayByExpand = (arr) => {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr);
  }
  return arr;
};
