export default function html([first, ...strings], ...values) {
  return values
    .reduce(
      (acc, cur) => {
        acc.concat(cur, strings.shift());
      },
      [first],
    )
    .filter((x) => x && x !== true)
    .join("");
}
