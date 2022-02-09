const arr = [10, 2, 4, 5, 6, 0, 0, 1, 0, 323, 0, 234, 0];

const removeZeroBySort = (arr) => {
  return arr.sort((a, b) => {
    if (a === 0) return -1;
  });
};
