export function getRandomElement(arr) {
  const index = Math.floor(Math.random() * (arr.length - 1));
  return arr[index];
}
