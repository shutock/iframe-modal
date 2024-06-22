"use client";

import { useState } from "react";
import { FormattedNumber } from "./formatted-number";

export const NumbersPage: React.FC = () => {
  const defaultValue = 0.00001337;

  const [value, setValue] = useState<number>(defaultValue);

  return (
    <main className="bg-slate-300 size-full absolute grid place-items-center">
      <div className="w-full max-w-[20rem] bg-slate-100 p-2 rounded-2xl flex flex-col gap-2">
        <FormattedNumber className="py-2 px-3 text-2xl font-bold text-center">
          {value}
        </FormattedNumber>

        <input
          className="bg-slate-200 py-2 px-3 rounded-md mb-2"
          type="number"
          onChange={(event) => setValue(Number(event.target.value))}
          placeholder={defaultValue.toString()}
          value={value}
        />

        <div className="flex gap-2 flex-wrap">
          {["0", "-1,337,420.69", "1.337e-70", "0.00069", "0.000069"].map(
            (example, id) => {
              const isCurrent = value === Number(example.replace(/,/g, ""));

              return (
                <button
                  key={`${example}${id}`}
                  onClick={() => setValue(Number(example.replace(/,/g, "")))}
                  className={[
                    isCurrent
                      ? "bg-slate-500 border-slate-500 text-slate-50"
                      : "border-slate-300",
                    "border py-1 px-3 rounded-md",
                  ].join(" ")}
                >
                  {example}
                </button>
              );
            }
          )}
        </div>
      </div>
    </main>
  );
};

export default NumbersPage;
