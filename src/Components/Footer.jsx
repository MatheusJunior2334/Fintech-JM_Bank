//import { Link } from 'react-router-dom';
import style from '../CSS/Footer.module.css';

import instagram_footer from '../Images/Instagram_footer.png';
import facebook_footer from '../Images/Facebook_footer.png';
import github_footer from '../Images/GitHub_footer.png';
import linkedin_footer from '../Images/Linkedin_footer.png';
import seta_vertical_footer from '../Images/Seta_vertical_footer.png';

function Footer() {
    return (
        <footer>
            <nav>
                <div id={style.footer_superior}>
                    <div id={style.secao_1}>
                        <h2>JM Bank</h2>
                        <h6>© JM Bank - 2023</h6>
                        <div id={style.redes_sociais}>
                            <img src={instagram_footer} alt='clique para acessar o nosso instagram' />
                            <img src={facebook_footer} alt='clique para acessar o nosso facebook' />
                            <img src={github_footer} alt='clique para acessar o nosso github' />
                            <img src={linkedin_footer} alt='clique para acessar o nosso linkedin' />
                        </div>
                    </div>
                    <div className={style.demais_secoes}>
                        <h3>Atendimento</h3>
                        <ul>
                            <li>Rua Tito 54, Lapa - SP</li>
                            <li>exemplo@jmbank.com.br</li>
                            <li>(99) 99999-9999</li>
                            <li>Atendimento Acessível</li>
                        </ul>
                    </div>
                    <div className={style.demais_secoes}>
                        <h3>Precisa de ajuda?</h3>
                        <ul>
                            <li>Central de ajuda</li>
                            <li>2ª via de boleto</li>
                            <li>Negocie sua dívida</li>
                            <li>Ferramentas de acessibilidade</li>
                        </ul>
                    </div>
                    <div className={style.demais_secoes}>
                        <h3>Outras Informações</h3>
                        <ul>
                            <li>Política de Privacidade</li>
                            <li>Termos de Uso</li>
                            <li>Trabalhe Conosco</li>
                            <li>Nosso Blog</li>
                        </ul>
                    </div>
                    <div id={style.seta}>
                        <img src={seta_vertical_footer} alt='clique para voltar ao início da página' />
                    </div>
                </div>
                <div id={style.footer_inferior}>
                    <h6>Desenvolvido com 💙 por Matheus Júnior</h6>
                </div>
            </nav>
        </footer>
    )
}

export default Footer