export default function analyzeArray(array) {
  if (Array.isArray(array)) {
    // eslint-disable-next-line no-restricted-globals
    const filteredArray = array.filter(
      (elem) => typeof elem === "number" && !Number.isNaN(elem)
    );
    return {
      average:
        filteredArray.reduce((total, current) => total + current, 0) /
        filteredArray.length,
      min: Math.min(...filteredArray),
      max: Math.max(...filteredArray),
      length: array.length,
    };
  }
  return new Error("Not an array");
}
