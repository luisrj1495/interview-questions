
const promise = new Promise((resolve, reject) => {
 setTimeout(() => {
   resolve("resolve");
 }, 1000);
 setTimeout(() => {
   reject("reject");
 }, 1000);
});

promise
 .then((response) => {
   console.log({ response });

   return new Promise((_, reject) => {
     reject(new Error("Error"));
   });
 })
 .catch((e) => {
   console.log(e);
 });
