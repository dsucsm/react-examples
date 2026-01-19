// import logo from '../assets/react.svg'
import logo from '../assets/DSLogo.png'
import "bootstrap/dist/css/bootstrap.css"
import '../style/Header.css'

const Header = () => {
    return <span className='logo-image'>
        <a>
            <img src={logo} className="logo react" alt="React logo" />
        </a>
        <span className='logo-text'><u>&nbsp;DSucs&nbsp;&nbsp;</u></span>
    </span>;
}

export default Header;