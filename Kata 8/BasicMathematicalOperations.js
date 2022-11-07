function basicOp(operation, value1, value2)
{
  var rules = {"+": value1 + value2, "-": value1 - value2, "*": value1 * value2, "/": value1 / value2};
  return rules[operation]
}

// Depending on the task, it will give the proper operator
// test