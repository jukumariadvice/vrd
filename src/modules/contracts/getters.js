export function onlyLabels(state) {
  return groupByCompanyNames(state.contracts)
    .reduce((array, contract) => [...array, contract.companyName], [])
    .slice(0, 20);
}

export function onlySubtotal(state) {
  return groupByCompanyNames(state.contracts)
    .reduce(
      (array, contract) => [...array, parseFloat(contract.subtotal.toFixed(2))],
      []
    )
    .slice(0, 20);
}

export function countContracts(state) {
  return state.contracts.length;
}

export function totalCost(state) {
  return state.contracts
    .reduce((sum, contract) => {
      return parseFloat(contract.amount) + sum;
    }, 0)
    .toFixed(2);
}

export function sumByAmount(state) {
  return groupByCompanyNames(state.contracts);
}

function groupByCompanyNames(contracts) {
  return _.chain(contracts)
    .map((contract, id) => ({
      ...contract,
      amount: parseFloat(contract.amount)
    }))
    .groupBy("company_name")
    .map((company, id) => ({
      companyName: id,
      subtotal: _.sumBy(company, "amount")
    }))
    .sortBy("subtotal")
    .value()
    .reverse();
}
