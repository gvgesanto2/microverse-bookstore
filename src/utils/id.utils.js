/* eslint-disable import/prefer-default-export */
export const genNewIdForElem = (elemsArray) => {
  if (elemsArray.length > 0) {
    return elemsArray[elemsArray.length - 1].id + 1;
  }
  return 1;
};