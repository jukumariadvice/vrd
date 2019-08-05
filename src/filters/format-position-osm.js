export default value => {
  const splitData = value.split(",");

  return [parseFloat(splitData[0]), parseFloat(splitData[1])];
};
