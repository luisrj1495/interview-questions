length = 10;
function func() {
  console.log(this)
  console.log(this.length);
}

var obj = {
  length: 5,
  thisFunc: function (func) {
    func();
    console.log({arguments, len: this.length})

    arguments[0]();
  },
};

obj.thisFunc(func, 3);























/**
 * RTA:
 * 10
 * 2
 */