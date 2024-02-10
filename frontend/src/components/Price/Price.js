import React from "react";

export default function Price({ price, locale, currency }) {
  const formatPrice = () => {
    // Define a map of currency symbols for different currencies
    const currencySymbols = {
      LKR: "Rs.",
    };

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      currencyDisplay: "symbol", // Display the currency symbol
      minimumFractionDigits: 2, //  can adjust this as needed
    })
      .format(price)
      .replace(currencySymbols[currency], ""); // Replace the currency symbol
  };

  return <span>{formatPrice()}</span>;
}

Price.defaultProps = {
  locale: "en-US",
  currency: "LKR",
};
