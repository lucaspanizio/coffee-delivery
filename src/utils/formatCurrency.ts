/**
 * Formata um valor numérico como uma moeda brasileira (BRL).
 *
 * @param {number} value - O valor numérico a ser formatado.
 * @param {boolean} [withSign=false] - Indica se o símbolo da moeda (R$) deve ser incluído no resultado.
 * @returns {string} - O valor formatado como moeda brasileira.
 *
 * @example
 * formatCurrency(10); // Retorna "10,00"
 *
 * @example
 * formatCurrency(10, true); // Retorna "R$ 10,00"
 *
 * @example
 * formatCurrency(1000, true); // Retorna "R$ 1.000,00"
 *
 * @example
 * formatCurrency(10.5); // Retorna "10,50"
 */
export function formatCurrency(value: number, withSign = false): string {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  };

  const formattedValue = new Intl.NumberFormat('pt-BR', options).format(value);

  return withSign ? formattedValue : formattedValue.replace(/^R\$\s?/, '');
}
