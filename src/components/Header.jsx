import logoApp from '../assets/imgs/portada.jpg'
import '../assets/styles/header.css'

function Header(){
    return(
        <header className='head'>
            <nav className='nav'>
                <img src={logoApp} alt="" className='portadita'/>
            </nav>
        </header>
    );

}

export default Header;