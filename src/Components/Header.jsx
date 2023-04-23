import style from './Header.module.css';

function Header() {
    return (
        <header>
            <div id={style.header_part1}></div>
            <div id={style.header_part2}>
                <div>
                    <p>Home</p>
                    <p>Serviços</p>
                    <p>Sobre Nós</p>
                    <p>Fale Conosco</p>
                </div>
            </div>
            <div id={style.header_part3}>
                <div>
                    <div>
                        <button id={style.abrir}>Abra sua Conta</button>
                    </div>
                    <div>
                        <button id={style.acessar}>Acessar</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header