const sortinatorFunction = (str) => {
  let strArray = str.split("");

  strArray = strArray.sort((first, next) => {
    return first < next;
  })

  return strArray.join("");

}

module.exports = {
  sortinatorFunction
}