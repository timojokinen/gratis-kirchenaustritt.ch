import { AnimationProps, motion } from "framer-motion";
import React, { useRef } from "react";

type RequiredProps = {
  isVisible: boolean;
};

type OptionalProps = {
  duration?: number;
  ease?: string;
  variants?: AnimationProps["variants"];
};

export const AnimateHeight: React.FC<
  React.PropsWithChildren<RequiredProps & OptionalProps>
> = ({ duration, ease, variants, isVisible, children, ...other }) => {
  const ref = useRef(null);

  return (
    <motion.div
      className="overflow-hidden"
      initial={isVisible ? "open" : "collapsed"}
      animate={isVisible ? "open" : "collapsed"}
      inherit={false}
      variants={variants}
      transition={{
        ease,
        duration,
      }}
      {...other}
    >
      <div ref={ref}>{children}</div>
    </motion.div>
  );
};

AnimateHeight.defaultProps = {
  ease: "easeOut",
  variants: {
    open: {
      opacity: 1,
      height: "auto",
    },
    collapsed: { opacity: 0, height: 0 },
  },
};
