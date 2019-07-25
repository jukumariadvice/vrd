export default data =>
  _.map(data).map(data => {
    return data[0];
  });
