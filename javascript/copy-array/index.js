// 需求 copy array
exports.cloneArrayBySpreadOperator = (arr) => {
  return [...arr];
};

exports.cloneArrayByArrayFrom = (arr) => {
  return Array.from(arr);
};

exports.cloneArrayByArraySlice = (arr) => {
  return arr.slice();
};

exports.cloneArrayByArrayMap = (arr) => {
  return arr.map((i) => i);
};

exports.cloneArrayByArrayFilter = (arr) => {
  return arr.filter(() => true);
};

exports.cloneArrayByObjectAssign = (arr) => {
  return Object.assign([], arr);
};

exports.cloneArrayByArrayConcat = (arr, newArr) => {
  return [].concat(arr);
};

exports.cloneArrayByJSON = (arr) => {
  return JSON.parse(JSON.stringify(arr));
};
