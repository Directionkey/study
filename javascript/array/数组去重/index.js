exports.duplicateByReduce = (arr) => {
  return arr.reduce((acc, cur) => {
    // if (acc.indexOf(cur) === -1) {
    //   acc.push(cur);
    // }
    // return acc;
    return acc.includes(cur) ? acc : [...acc, cur];
  }, []);
};

exports.duplicateByIndexOf = (arr) => {
  let newArr = [];
  //for循环，forEach
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

exports.duplicateByObjectkeys = (arr) => {
  let obj = {};
  arr.forEach((item, index) => {
    obj[arr[index]] = 'rua';
  });
  return Object.keys(obj).map((item) => ~~item);
  //+item也可以字符串转数字,~~缩写Math.floor()
};

exports.duplicateByFilter = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
};

exports.duplicateByArrayFrom = (arr) => {
  return Array.from(new Set(arr));
};

exports.duplicateByExpand = (arr) => {
  return [...new Set(arr)];
};

exports.duplicateByFor = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
};
