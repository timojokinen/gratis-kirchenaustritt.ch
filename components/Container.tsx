import cx from "classnames";
import React from "react";
import { PropsWithChildren } from "react";

type OptionalProps = {
  className?: string;
  tag?: string;
};

const Container: React.FC<PropsWithChildren<OptionalProps>> = ({
  children,
  className,
  tag,
}) => {
  const comp = React.createElement(tag || "div", {
    className: cx("container mx-auto px-4", className),
    children,
  });
  return <>{comp}</>;
};

export default Container;
