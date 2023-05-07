import style from '../CSS/Section1.module.css'

import Mulher_1 from '../Images/Mulher_1.jpg';
import Mulher_1_responsivo from '../Images/Mulher_1_responsivo.png';
import mulher_ajuda from '../Images/Mulher_ajuda.png';
import seta_vertical from '../Images/Seta_vertical.png'

function Section1() {
    return (
        <section id={style.section1}>
            <article>
                <div id={style.section1_part1}>
                    <div id={style.main_initial}>
                        <h1>Venha <span className={style.text_color}>facilitar</span> e <span className={style.text_color}>otimizar</span> as suas finanças conosco</h1>
                        <p>Descubra melhores maneiras de agilizar as suas transações econômicas em todos os sentidos</p>
                        <div id={style.mulher_1_responsivo}>
                            <img src={Mulher_1_responsivo} alt='Mulher ruiva mostrando o App e o cartão do banco' />
                        </div>
                        <button><p>Abra sua Conta</p></button>
                    </div>
                </div>
                <div id={style.section1_part2}>
                    <div id={style.mulher_1}>
                        <img src={Mulher_1} alt='Mulher ruiva mostrando o App e o cartão do banco' />
                    </div>
                    <div id={style.central_ajuda}>
                        <div>
                            <img src={mulher_ajuda} alt='imagem de mulher para a central de ajuda' id={style.mulher_ajuda} />
                            <p>Central de Ajuda</p>
                            <img src={seta_vertical} alt='clique para mostrar as opções de ajuda da nossa central' id={style.seta_vertical} />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Section1