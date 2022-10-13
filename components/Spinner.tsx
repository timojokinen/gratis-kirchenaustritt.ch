import { FaSpinner } from "react-icons/fa";
import cx from "classnames";

type OptionalProps = {
  size?: number;
  className?: string;
};

const Spinner: React.FC<OptionalProps> = ({ size, className }) => {
  return <FaSpinner size={size} className={cx(className, "animate-spin")} />;
};

export default Spinner;
