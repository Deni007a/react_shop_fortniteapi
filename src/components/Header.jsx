import githubIcon from './GitHub_Logo_White.png';

function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">React shop</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Deni007a" target="_blank" rel="noopener noreferrer">

              <img src={githubIcon} alt="GitHub Icon" width="48" height="24" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };

