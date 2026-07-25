import { unref, computed } from "vue";

export function pluralize(count, forms) {
  const n = Math.abs(count);
  const [one, few, many] = forms;

  if (n === 1) return one;
  const lastDigit = n % 10;
  const lastTwoDigits = n % 100;

  if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    !(lastTwoDigits >= 12 && lastTwoDigits <= 14)
  ) {
    return few;
  }

  return many;
}

export function usePlural(count, forms) {
  return computed(() => {
    const n = unref(count);
    const word = pluralize(n, forms);
    return `${n} ${word}`;
  });
}
