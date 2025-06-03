export const reverseArray = <T>(arr: T[]): T[] => {
  if (arr) {
    return arr.slice().reverse();
  } else {
    return [];
  }
};
