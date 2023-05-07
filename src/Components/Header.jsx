import style from '../CSS/Header.module.css';
//import { Spin as Hamburger } from 'hamburger-react';

function Header() {
    return (
        <header>
            <div id={style.header_part1}>
                <div>
                    <h1>J<span className={style.logo_color}>M</span> Bank</h1>
                </div>
            </div>
            <div id={style.header_part2}>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Serviços</li>
                        <li>Benefícios</li>
                        <li>Fale Conosco</li>
                    </ul>
                </nav>
            </div>
            <div id={style.header_part3}>
                <nav>
                    <div className={style.abrir_acessar}>
                        <button id={style.abrir}>Abra sua Conta</button>
                    </div>
                    <div className={style.abrir_acessar}>
                        <button id={style.acessar}>Acessar</button>
                    </div>
                    <div id={style.menu_hamburger}>
                    <div id={style.menuToggle}>
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id={style.menu}>
                                <li id={style.acessar2}>Acessar</li>                              
                                <li>Home</li>                          
                                <li>Serviços</li>                         
                                <li>Benefícios</li>
                                <li>Fale Conosco</li>                              
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header