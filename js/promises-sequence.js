const check = () =>
  new Promise((resolve, reject) => {
    if (value) resolve("check");
    else reject("error");
  });

const promise = check(true);

promise
  .then((value) => {
    console.log(value);
    return check(true);
  })
  .catch((err) => {
    console.log(err);
  })
  .then((value) => {
    console.log(value);
    return "SISA";
  })
  .catch((e) => {
    console.log(e);
    return e;
  })
  .then((va) => {
    console.log(va);
    return check(false);
  })
  .catch((e) => {
    console.log(e);
    throw "er";
    return e;
  })
  .catch((e) => {
    console.log(e);
    return e;
  })
  .catch((e) => {
    console.log(e);
  })
  .then((value) => {
    console.log(value);
  })
  .then((va) => {
    console.log(va);
  });

/**
 * 1. check
 * 2. check
 * 3. SISA
 * 3. error
 * 4. error
 * 5. undefined
 */

const show = (value) =>
  new Promise((resolve, reject) => {
    if (value) resolve("check");
    else reject("error");
  });

show(true)
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 1;
  });
