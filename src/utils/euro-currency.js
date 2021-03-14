export function euroCurrency(value) {
  return value.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'symbol',
  });
}
