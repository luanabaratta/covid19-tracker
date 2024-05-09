import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMap } from '@fortawesome/free-solid-svg-icons'
import './styles.css';
import flag from '../../assets/img/flag.png'


const Header = () => (
    <header id="main-header">
      <div className="container">
        <h1>Covid-19 Brazil API <img className="flag" src={flag} alt=""/></h1>
        <div className="box-nav">
          <Link className="nav" to={'/'}> <FontAwesomeIcon icon={faMap} /> Estados do Brasil</Link>
          <Link className="nav" to={'/countries'}> <FontAwesomeIcon icon={faGlobe} /> <span>Mundo</span></Link>
        </div>
      </div>

    </header>
);

export default Header;