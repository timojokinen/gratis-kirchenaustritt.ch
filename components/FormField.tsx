import * as Label from "@radix-ui/react-label";

import { AnimateHeight } from "./AnimateHeight";
import { AnimatePresence } from "framer-motion";
import { useField, useFormikContext } from "formik";
import React, { FC, cloneElement, useMemo } from "react";
import cx from "classnames";

type RequiredProps = {
  children: React.ReactElement & { type: { displayName: string } };
  name: string;
};

type OptionalProps = {
  className?: string;
  labelClassname?: string;
  label?: string;
  htmlFor?: string;
  id?: string;
};

const FormField: FC<RequiredProps & OptionalProps> = ({
  children,
  name,
  className,
  labelClassname,
  id,
  label,
}) => {
  const [field, { error }, { setValue }] = useField(name);
  const { submitCount, touched } = useFormikContext();
  const childType = children.type.displayName;
  const isTouched = touched[name];

  const fieldElement = useMemo(() => {
    if (childType === "Checkbox") {
      return cloneElement(children, {
        id,
        name,
        onChange: (v: boolean) => setValue(v, true),
        checked: field.value,
        invalid: !!error && submitCount > 0,
      });
    }

    return cloneElement(children, {
      id,
      ...field,
      invalid: !!error && isTouched,
      touched: isTouched,
    });
  }, [
    childType,
    children,
    error,
    field,
    id,
    isTouched,
    name,
    setValue,
    submitCount,
  ]);

  return (
    <div>
      <Label.Root className={cx("block", className)} asChild>
        <label htmlFor={id}>
          <span className={cx("font-bold select-none", labelClassname)}>
            {label}
          </span>
          {fieldElement}
        </label>
      </Label.Root>
      <AnimatePresence>
        <AnimateHeight isVisible={!!error && isTouched}>
          <span className="text-red-500 mt-1 block font-semibold">{error}</span>
        </AnimateHeight>
      </AnimatePresence>
    </div>
  );
};

export default React.memo(FormField);
