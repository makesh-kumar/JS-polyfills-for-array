// polyfill for forEach method
Array.prototype.myForEach = function (fn, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (thisArg) {
      fn.call(thisArg, this[i], i, this);
    } else {
      fn(this[i], i, this);
    }
  }
};

// polyfill for map method
Array.prototype.myMap = function (fn, thisArg) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (thisArg) {
      res.push(fn.call(thisArg, this[i], i, this));
    } else {
      res.push(fn(this[i], i, this));
    }
  }
  return res;
};

// polyfill for filter method
Array.prototype.myFilter = function (fn, thisArg) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (thisArg) {
      if (fn.call(thisArg, this[i], i, this)) {
        res.push(this[i]);
      }
    } else {
      if (fn(this[i])) {
        res.push(this[i], i, this);
      }
    }
  }
  return res;
};

// polyfill for every method;
Array.prototype.myEvery = function (fn, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (thisArg) {
      if (!fn.call(thisArg, this[i], i, this)) {
        return false;
      }
    } else {
      if (!fn(this[i], i, this)) {
        return false;
      }
    }
  }
  return true;
};

// polyfill for some method;
Array.prototype.mySome = function (fn, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (thisArg) {
      if (fn.call(thisArg, this[i], i, this)) {
        return true;
      }
    } else {
      if (fn(this[i], i, this)) {
        return true;
      }
    }
  }
  return false;
};

// polyfill for concat method
Array.prototype.myConcat = function (arr) {
  var res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(this[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    res[++res.length - 1] = arr[i];
  }
  return res;
};

// polyfill for indexOf method
Array.prototype.myIndexOf = function (val, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === val) {
      return i;
    }
  }
  return -1;
};

// polyfill for lastIndexOf method
Array.prototype.myLastIndexOf = function (val, fromIndex) {
  fromIndex ? fromIndex : (fromIndex = this.length - 1);
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === val) {
      return i;
    }
  }
  return -1;
};

// polyfills for push method
Array.prototype.myPush = function (...val) {
  let len = this.length;
  for (let i = 0; i < val.length; i++) {
    this[len++] = val[i];
  }
  return this.length;
};

// polyfill for pop method
Array.prototype.myPop = function () {
  if (!this.length) {
    return;
  }
  const val = this[this.length - 1];
  this.length = this.length - 1;
  return val;
};

// polyfill for join method
Array.prototype.myJoin = function (seperator = ",") {
  let res = "";
  for (let i = 0; i < this.length; i++) {
    res =
      res + (this[i] ? this[i] : "") + (i == this.length - 1 ? "" : seperator);
  }
  return res;
};

// polyfill for reduce method
Array.prototype.myReduce = function (fn, initialVal) {
  // if empty array is passed with initial value
  if (!this.length && !initialVal) {
    throw new Error("Reduce of empty array with no initial value");
  }
  let sum = initialVal ? initialVal : 0;
  for (let i = 0; i < this.length; i++) {
    sum = fn(sum, this[i], i, this);
  }
  return sum;
};
