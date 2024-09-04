import { forwardRef } from "react";
import classNames from "classnames";

import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export const Input = forwardRef((props: InputProps, ref: any) => {
    return (
        <div className="flex flex-col gap-1">
            <input
                ref={ref}
                {...props}
                className={classNames(
                    "border h-[50px] rounded-[15px] px-[24px]",
                    "focus:outline-none",
                    "aria-[invalid=true]:border-red-600"
                )}
            />
            {props["aria-invalid"] === "true" && <span className="text-red-600">error</span>}
        </div>
    );
});
