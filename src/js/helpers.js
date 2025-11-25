export function shuffle(array) {
  const newArr = [...array];

  let i = newArr.length,
    j,
    temp;

  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));

    temp = newArr[j];
    newArr[j] = newArr[i];
    newArr[i] = temp;
  }

  return newArr;
}
