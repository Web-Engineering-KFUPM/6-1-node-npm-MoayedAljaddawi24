import _ from "lodash";

export function parseNumbers(input) {
  const nums = _.map(input, (str) => Number(str));
  return _.filter(nums, (n) => Number.isFinite(n));
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}

