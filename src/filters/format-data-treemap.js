export default data => {
  let dataFormat = [];
  let countCompany = 0;
  _.forEach(data, function(contracts, company) {
    dataFormat = [...dataFormat, [countCompany + "", "" /*company*/, -1]];

    _.forEach(contracts, function(contract, key) {
      dataFormat = [
        ...dataFormat,
        [countCompany + "." + key, contract.title, parseFloat(contract.amount)]
      ];
    });
    countCompany++;
  });
  return dataFormat;
};
