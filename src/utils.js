const getRandomUser = () => {
  const arr = [1, 2, 3, 4, 5, 5, 5, 7];
  return arr[parseInt(Math.random() * arr.length)].toString().repeat(5);
};

const getRandomAccount = () => {
  const arr = [1, 2, 3];
  return arr[parseInt(Math.random() * arr.length)].toString().repeat(3);
};

export { getRandomAccount, getRandomUser };
