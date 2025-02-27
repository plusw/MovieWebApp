import { Link } from "react-router-dom";
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";
import "./foot.css";
const Foot = () => {
  return (
    <>
      <div className="footer " style={{ backgroundImage: `url(${bg})` }}>
        <div className="content">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">tMovies</Link>
          </div>
          <div className="linkArea">
            <div className="column">
              <Link to="/">Home</Link>
              <Link to="/">Contact us</Link>
              <Link to="/">Term of services</Link>
              <Link to="/">About us</Link>
            </div>
            <div className="column">
              <Link to="/">Live</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">Premium</Link>
              <Link to="/">Pravacy policy</Link>
            </div>
            <div className="column">
              <Link to="/">You must watch</Link>
              <Link to="/">Recent release</Link>
              <Link to="/">Top IMDB</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foot;
