
const binaryArrayToNumber = arr => {
  let binary = "";
  arr.forEach((element) => {
    binary += element.toString();
  });
  let decimal = parseInt(binary, 2);
  return decimal;
};
