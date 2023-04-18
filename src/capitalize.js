export default function capitalize(str) {
  let cap = "";
  if (str) {
    cap += str[0].toUpperCase() + str.slice(1);
  }
  return cap;
}
