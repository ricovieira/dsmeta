import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <>
            <header>
                <div className="logo-container">
                    <img src={logo} alt="DSMeta" />
                        <h1>DSMeta</h1>
                        <p>Desenvolvido por <a href="https://github.com/ricovieira/dsmeta">Ricovieira</a></p>
                </div>
            </header>
        </>
    )
}

export default Header