import { FaCheckCircle } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { useLabelContext } from "@radix-ui/react-label";

import { AnimatePresence, motion } from "framer-motion";
import React, { FC, forwardRef } from "react";
import Spinner from "./Spinner";
import cx from "classnames";

type OptionalProps = {
  invalid?: boolean;
  isLoading?: boolean;
  touched?: boolean;
};

export type InputProps = React.HTMLProps<HTMLInputElement> & OptionalProps;

const Input: FC<InputProps> = forwardRef(
  (
    { invalid, isLoading, touched, ...props }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const labelId = useLabelContext();
    const className = cx(
      "relative h-full cursor-text px-4 py-3 border border-gray-300 placeholder-neutral-400 rounded text-black text-sm w-full outline-none focus-visible:ring-2 focus-visible:ring-cyan-600",
      {
        "ring-red-400 ring-2": invalid,
      }
    );

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          aria-labelledby={labelId}
          className={cx(props.className, className)}
        />
        <AnimatePresence>
          {invalid && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-400"
              transition={{ ease: "easeOut", duration: 0.1 }}
            >
              <FaExclamationTriangle size={20} />
            </motion.span>
          )}
          {!invalid && touched && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-cyan-600"
              transition={{ ease: "easeOut", duration: 0.1 }}
            >
              <FaCheckCircle size={20} />
            </motion.span>
          )}
          {isLoading && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-1/2 right-3 transform -translate-y-1/2"
              transition={{ ease: "easeOut", duration: 0.1 }}
            >
              <Spinner size={15} />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = "Input";

const Component = React.memo(Input);
Component.displayName = "Input";

export default Component;
