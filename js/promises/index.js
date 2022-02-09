function func1() {
 return new Promise(function (resolve, reject) {
   setTimeout(function () {
     resolve("Func1");
   }, 1000);
 });
}

function func2() {
 return new Promise(function (resolve, reject) {
   setTimeout(function () {
     console.log("func2");
     resolve("Func2");
   }, 2000);
 });
}

func1()
 .then(func2())
 .then()
 .then()
 .then()
 .then(function (result) {
   console.log(result);
 })
 .then()
 .then()
 .then()
 .then((c) => console.log(c));
