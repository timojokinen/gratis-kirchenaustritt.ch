import Link from "next/link";
import cx from "classnames";
import { useRouter } from "next/router";
import { FaChurch } from "react-icons/fa";
import Container from "./Container";

const NavLink = ({ children, href, exact }) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Link href={href}>
      <a
        className={cx(
          "font-extrabold text-lg hover:text-cyan-600 transition-all",
          {
            "text-cyan-600": isActive,
          }
        )}
      >
        {children}
      </a>
    </Link>
  );
};

const Header = () => {
  return (
    <>
      <header className="h-[80px] fixed w-full bg-white z-40">
        <Container className="flex justify-between items-center h-full">
          <Link href="/">
            <a className="flex items-center gap-4">
              <FaChurch className="text-3xl" />
              <span className="text-xl font-extrabold">
                gratis-<span className="text-cyan-600">kirchenaustritt</span>.ch
              </span>
            </a>
          </Link>
          <nav className="flex items-center gap-8">
            <NavLink exact href="/austrittsformular">
              Austrittsformular
            </NavLink>
            <NavLink exact href="/anleitung">
              Anleitung
            </NavLink>
            <NavLink exact href="/datenschutz">
              Datenschutz
            </NavLink>
          </nav>
        </Container>
      </header>
      <div className="h-[80px] mb-24"></div>
    </>
  );
};

export default Header;
