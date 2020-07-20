export const format = {
  toDollar(sum, locale = "en-US") {
    const currency = Number(sum).toLocaleString(locale, {
      style: "currency",
      currency: "USD",
    });
    return currency;
  },
  toEuro(sum, locale = "en-US") {
    const currency = Number(sum).toLocaleString(locale, {
      style: "currency",
      currency: "EUR",
    });
    return currency;
  },
  toFrancCFA(sum, locale = "en-US") {
    const currency = Number(sum).toLocaleString(locale, {
      style: "currency",
      currency: "XOF",
    });
    return currency;
  },
  toYuan(sum, locale = "en-US") {
    const currency = Number(sum).toLocaleString(locale, {
      style: "currency",
      currency: "CNY",
    });
    return currency;
  },
  toYen(sum, locale = "en-US") {
    const currency = Number(sum).toLocaleString(locale, {
      style: "currency",
      currency: "JPY",
    });
    return currency;
  },
  toPound(sum, locale = "en-US") {
    const currency = Number(sum).toLocaleString(locale, {
      style: "currency",
      currency: "GBP",
    });
    return currency;
  },
  toRuble(sum, locale = "ru-RU") {
    const currency = Number(sum).toLocaleString(locale, {
      style: "currency",
      currency: "RUB",
    });
    return currency;
  },
  toMoney(sum, currency = "USD") {
    const cur = Number(sum).toLocaleString("en-US", {
      style: "currency",
      currency: currency,
    });
    return cur;
  },
};
