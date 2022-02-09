const createPromise = (index) => {
  console.log({ index });
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(index);
      resolve(index);
    }, 1000 - index);
  });
};
const main = async () => {
  const promises = new Array(5).map((_, index) => createPromise(index));

  for (let p of promises) await p;

  // const response = await Promise.all(promises);

  // console.log({ response });
};

main();
