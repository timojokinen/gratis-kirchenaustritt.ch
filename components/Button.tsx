import cx from "classnames";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<Props> = ({ className, children, type }) => {
  return (
    <button
      type={type}
      className={cx(
        "bg-slate-900 text-white font-extrabold py-4 px-8 rounded hover:bg-cyan-600 transition-all tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
