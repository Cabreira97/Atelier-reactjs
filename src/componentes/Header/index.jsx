import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li className="logo-header">
          <img src="/images/logo-banner.svg" alt="" />
          Atelier Márcia Ferraz
        </li>
        <li>
          <img src="/imges/coracao-banner.svg" alt="" />
          <p>
            <a href="#">Entre</a> / <a href="#">Cadastre-se</a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
