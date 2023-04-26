import style from '../CSS/Header.module.css';

function Header() {
    return (
        <header>
            <div id={style.header_part1}></div>
            <div id={style.header_part2}>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Serviços</li>
                        <li>Sobre Nós</li>
                        <li>Fale Conosco</li>
                    </ul>
                </nav>
            </div>
            <div id={style.header_part3}>
                <nav>
                    <div>
                        <button id={style.abrir}>Abra sua Conta</button>
                    </div>
                    <div>
                        <button id={style.acessar}>Acessar</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header