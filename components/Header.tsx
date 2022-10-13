import Link from "next/link";
import cx from "classnames";
import { useScroll } from "framer-motion";
import { useRouter } from "next/router";
import { FaChurch } from "react-icons/fa";
import Container from "./Container";
import GradientHighlightText from "./GradientHighlightText";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useEffect, useState } from "react";

const NavLink = ({ children, href, exact }) => {
  const { pathname } = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Link href={href}>
      <a
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cx(
          "font-semibold px-4 py-2 transition-all duration-200 relative hover:text-black",
          {
            "text-black": isActive,
            "text-zinc-500": !isActive,
          }
        )}
      >
        <>
          {children}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              layoutId="larry"
              className="w-full bg-gradient-to-br from-purple-100 to-blue-100 rounded absolute inset-0 -z-10"
            ></motion.div>
          )}
        </>
      </a>
    </Link>
  );
};

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);
  return (
    <>
      <header
        className={cx("h-[80px] fixed w-full bg-white z-40", {
          "shadow-sm": isScrolled,
        })}
      >
        <Container className="flex justify-between items-center h-full">
          <Link href="/">
            <a className="flex items-center gap-4">
              <FaChurch className="text-3xl" />
              <span className="text-xl font-extrabold">
                gratis-
                <GradientHighlightText>kirchenaustritt</GradientHighlightText>
                .ch
              </span>
            </a>
          </Link>
          <nav className="flex items-center gap-0">
            <AnimateSharedLayout>
              <NavLink exact href="/austrittsformular">
                Austrittsformular
              </NavLink>
              <NavLink exact href="/anleitung">
                Anleitung
              </NavLink>
              <NavLink exact href="/datenschutz">
                Datenschutz
              </NavLink>
            </AnimateSharedLayout>
          </nav>
        </Container>
      </header>
      <div className="h-[80px] mb-24"></div>
    </>
  );
};

export default Header;
