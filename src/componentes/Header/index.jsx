import "./Header.css";
import img from "../images/coracao-banner.svg";
import logo from "../images/logo-banner.svg";

function Header() {
  return (
    <div className="header">
      <ul>
        <li className="logo-header">
          <img src={logo} alt="" />
          Atelier Márcia Ferraz
        </li>
        <li className="coracao">
          <img src={img} alt="" />
          <p>
            <a href="#">Entre</a> / <a href="#">Cadastre-se</a>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Header;
