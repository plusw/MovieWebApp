import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/tmovie.png";
import "./Navbar.scss";
const Navbar = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        if (headerRef.current) headerRef.current.classList.add("shrink");
      } else {
        if (headerRef.current) headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <>
      <div ref={headerRef} className="header">
        <div className="header__wrap container">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">tMovies</Link>
          </div>
          <ul className="header__nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/tvs">TV Series</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
