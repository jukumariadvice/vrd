export default value => {
  const splitData = value.split(",");
  return { lat: parseFloat(splitData[0]), lng: parseFloat(splitData[1]) };
};
