/**
 * Gingr global utility
 */

export const generateRandomCharacter = (length = 5): string => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export const generateReference = (prefix = "PLK") => {
  const dt = new Date();
  return `${prefix}-${dt.getFullYear()}${("0" + (dt.getMonth() + 1)).slice(-2)}${(
    "0" +
    (dt.getDate() + 1)
  ).slice(
    -2,
  )}-${dt.getHours()}${dt.getMinutes()}${dt.getSeconds()}${dt.getMilliseconds()}-${generateRandomCharacter(
    4,
  )}`;
}

export const generateTransactionReference = (
  slug: string | null = null,
  type: string | null = null,
): string => {
  const date = new Date();
  const dateFormat = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ].join("");

  return `${slug != null ? slug.toUpperCase() : "GIN"}-${!type ? "PSK" : type.toUpperCase()
    }-${dateFormat}${generateRandomCharacter(4)}`;
}
