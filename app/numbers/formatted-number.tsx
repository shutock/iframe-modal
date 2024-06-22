import { createElement, forwardRef } from "react";

const format = (number: number) => {
  if (number === 0) return [number];

  const absNumber = Math.abs(number);

  if (absNumber >= 0.0001) {
    let digits = 2;

    if (absNumber < 0.1) digits++;
    if (absNumber < 0.01) digits++;
    if (absNumber < 0.001) digits++;
    if (absNumber < 0.0001) digits++;

    return [
      number.toLocaleString(undefined, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      }),
    ];
  }

  const e = number.toExponential(3);
  const [base, exponent] = e.split("e-");
  return [
    number >= 0 ? "0.0" : "-0.0",
    Number(exponent) - 1,
    Math.round(Math.abs(Number(base)) * 1000),
  ];
};

type Props = React.ComponentPropsWithRef<"span"> & {
  as?: React.ElementType;
};

export const FormattedNumber = forwardRef<HTMLElement, Props>(
  ({ as, children, ...props }, ref) => {
    return createElement(
      as || "span",
      { ref, ...props },
      typeof children !== "number"
        ? children
        : format(children).map((part, id) => {
            const isSubscript = id === 1;
            return createElement(
              isSubscript ? "sub" : "span",
              { key: id },
              part
            );
          })
    );
  }
);

FormattedNumber.displayName = "FormattedNumber";
