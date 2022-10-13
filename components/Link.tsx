import Link from "next/link";
import cx from "classnames";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
  href: string;
};

const AppLink: React.FC<Props> = ({ children, href, className }) => {
  return (
    <Link href={href}>
      <a
        className={cx(
          "underline text-black hover:text-opacity-70 transition-all",
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default AppLink;
